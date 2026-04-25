import express from 'express';
import cors from 'cors';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from './database.js';
import { generateQuestionsFromText } from './questionGenerator.js';

// Load environment variables from server/.env
// Add the following to your .env file:
// GROQ_API_KEY=your_key_here
// JWT_SECRET=your_secret_key_here
// Do not commit .env to source control; add .env to .gitignore.
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Setup multer for file uploads
const upload = multer({ 
  dest: 'uploads/',
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB max file size
});

// Create uploads directory if it doesn't exist
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running!' });
});

// JWT verification middleware
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Signup endpoint
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }

    // Convert email to lowercase for case-insensitive comparison
    const lowercaseEmail = email.toLowerCase();

    // Check if email already exists
    db.get('SELECT * FROM users WHERE email = ?', [lowercaseEmail], async (err, row) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      if (row) {
        return res.status(400).json({ error: 'Email already registered' });
      }

      // Hash password
      const hashedPassword = await bcryptjs.hash(password, 10);

      // Insert new user
      db.run(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        [name, lowercaseEmail, hashedPassword],
        function (err) {
          if (err) {
            return res.status(500).json({ error: 'Failed to create user' });
          }

          // Create JWT token
          const token = jwt.sign({ userId: this.lastID }, JWT_SECRET, { expiresIn: '7d' });

          res.json({
            success: true,
            token,
            user: {
              id: this.lastID,
              name,
              email
            }
          });
        }
      );
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login endpoint
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Convert email to lowercase for case-insensitive comparison
    const lowercaseEmail = email.toLowerCase();

    // Find user by email
    db.get('SELECT * FROM users WHERE email = ?', [lowercaseEmail], async (err, user) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      if (!user) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      // Verify password
      const passwordMatch = await bcryptjs.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      // Create JWT token
      const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });

      res.json({
        success: true,
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        }
      });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// File upload and question generation endpoint
// This backend route proxies the Groq API request so the frontend never sends the API key directly to the browser.
app.post('/api/generate-questions', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Read the uploaded file
    const filePath = req.file.path;
    let fileContent;
    try {
      fileContent = fs.readFileSync(filePath, 'utf-8');
    } catch (readError) {
      // If UTF-8 fails, try latin1 encoding
      try {
        fileContent = fs.readFileSync(filePath, 'latin1');
      } catch (latin1Error) {
        return res.status(400).json({ error: 'Unable to read the uploaded file. Please ensure it is a valid text file with UTF-8 or compatible encoding.' });
      }
    }

    if (!fileContent || fileContent.trim().length === 0) {
      return res.status(400).json({ error: 'The uploaded file is empty or contains no readable text.' });
    }

    // Generate questions from the text
    const questions = await generateQuestionsFromText(fileContent);

    // Clean up uploaded file
    fs.unlinkSync(filePath);

    res.json({ 
      success: true, 
      questions,
      questionCount: questions.length
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ WayQuizz API Server running on http://localhost:${PORT}`);
  console.log(`📤 Upload endpoint: POST http://localhost:${PORT}/api/generate-questions`);
});
