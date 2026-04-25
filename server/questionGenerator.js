/**
 * Question Generator - Generates multiple choice questions from text
 * Using Groq API for question generation
 */

/* changed to groq - uses Groq API for AI-powered question generation */

// Helper function to escape regex special characters
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Helper function to extract key sentences
function getKeySentences(text, count = 10) {
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
  return sentences
    .map(s => s.trim())
    .filter(s => s.length > 20 && s.split(' ').length > 4)
    .slice(0, count);
}

// Helper function to extract important terms/entities
function extractTerms(sentence) {
  const commonWords = new Set(['the', 'a', 'an', 'and', 'or', 'but', 'in', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'must', 'can', 'of', 'to', 'for', 'with', 'by', 'from', 'as', 'on', 'at', 'it', 'that', 'this', 'which', 'who', 'whom', 'what', 'where', 'when', 'why', 'how']);

  const words = sentence.split(/\s+/).map(w => w.replace(/[^\w'-]/g, ''));
  return words
    .filter(word =>
      word.length >= 2 &&
      !commonWords.has(word.toLowerCase()) &&
      /^[a-z']+$/i.test(word) &&
      !/^\d+$/.test(word)
    );
}

// Generate contextually relevant distractors
function generateDistracters(correctAnswer, context, sentence) {
  const distractors = [];
  const contextTerms = extractTerms(context || sentence);

  contextTerms
    .filter(t => t !== correctAnswer && t.length >= 2)
    .slice(0, 2)
    .forEach(term => distractors.push(term));

  if (distractors.length < 3) {
    const variations = [
      correctAnswer.replace(/s$/, ''),
      correctAnswer.charAt(0).toUpperCase() + correctAnswer.slice(1),
      correctAnswer + 's',
      correctAnswer.replace(/ing$/, ''),
      correctAnswer.replace(/ed$/, ''),
    ];
    distractors.push(...variations.filter(d => d !== correctAnswer && d.length > 1));
  }

  if (distractors.length < 3) {
    const genericOptions = ['information', 'knowledge', 'understanding', 'concept', 'process'];
    distractors.push(...genericOptions.filter(d => d !== correctAnswer).slice(0, 3 - distractors.length));
  }

  return [...new Set(distractors)].slice(0, 3);
}

// Check if a sentence is suitable for question generation
function isSuitableForQuestion(sentence, term) {
  if (!sentence.toLowerCase().includes(term.toLowerCase())) return false;
  if (sentence.length < 20) return false;
  const words = sentence.split(' ');
  if (words.length < 5) return false;
  if (sentence.includes('?')) return false;
  return true;
}

// Strip markdown code fences and surrounding backticks from model JSON output
function cleanJsonString(content) {
  let cleaned = content.trim();
  cleaned = cleaned.replace(/```(?:json)?/gi, '');
  cleaned = cleaned.replace(/`/g, '');
  const firstBracket = cleaned.indexOf('[');
  const lastBracket = cleaned.lastIndexOf(']');
  if (firstBracket !== -1 && lastBracket !== -1) {
    cleaned = cleaned.slice(firstBracket, lastBracket + 1);
  }
  return cleaned.trim();
}

/* changed to groq - uses Groq API for AI-powered question generation */
async function generateTriviaQuestions(text, amount = 10) {
  //console.log('[QG] generateTriviaQuestions called, text length:', text?.length);

  if (!text || text.trim().length === 0) {
    console.error('[QG] Empty text provided - returning early');
    return [];
  }

  const GROQ_API_KEY = process.env.GROQ_API_KEY;
  //console.log('[QG] API Key exists?', !!GROQ_API_KEY);

  if (!GROQ_API_KEY) {
    throw new Error('GROQ_API_KEY is not set. Add GROQ_API_KEY=your_key_here to your .env file.');
  }

  try {
    //console.log('[QG] About to call Groq API...');

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'system',
            content: 'You are an expert quiz question generator. Your task is to create high-quality multiple choice questions that test knowledge from provided text. Each question must be a complete, self-contained sentence ending with a question mark. Never create fill-in-the-blank questions. Each question must have exactly 4 answer choices. All choices must be meaningful, complete words or phrases - never single articles, fragments, or incomplete words. There must be exactly one correct answer and three plausible but incorrect alternatives. Questions should test actual knowledge, not just reading comprehension. Always return valid JSON.'
          },
          {
            role: 'user',
            content: `Generate ${amount} multiple choice questions from this text. Return as a JSON array with this exact structure: [{"question": "What is the capital of France?", "options": ["Paris", "London", "Berlin", "Madrid"], "correctAnswer": 0, "explanation": "Paris is the capital of France."}]. Text: ${text}`
          }
        ],
        temperature: 0.3,
        max_tokens: 2000
      })
    });

    //console.log('[QG] Groq API response status:', response.status);

if (!response.ok) {
  const errorBody = await response.json();
  console.error('[QG] Groq error details:', JSON.stringify(errorBody, null, 2));
  throw new Error(`Groq API HTTP Error: ${response.status} ${response.statusText}`);
}
    let data;
    try {
      data = await response.json();
    } catch (parseError) {
      throw new Error(`Groq API: Failed to parse response as JSON - ${parseError.message}`);
    }

    if (!data.choices || !Array.isArray(data.choices) || data.choices.length === 0) {
      throw new Error('Groq API: No choices returned in response.');
    }

    if (!data.choices[0].message || !data.choices[0].message.content) {
      throw new Error('Groq API: Unexpected response structure.');
    }

    let parsed;
    try {
      const cleanedContent = cleanJsonString(data.choices[0].message.content);
      parsed = JSON.parse(cleanedContent);
    } catch (jsonError) {
      throw new Error(`Groq API: Failed to parse JSON from model response - ${jsonError.message}`);
    }

    if (!Array.isArray(parsed)) {
      throw new Error('Groq API: Parsed response is not an array.');
    }

    const questions = parsed
      .filter((q, idx) => {
        if (!q.question || !Array.isArray(q.options)) {
          console.warn(`[QG] Question ${idx} missing required fields`);
          return false;
        }
        if (q.options.length !== 4) {
          console.warn(`[QG] Question ${idx} has ${q.options.length} options, expected 4`);
          return false;
        }
        if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
          console.warn(`[QG] Question ${idx} has invalid correctAnswer: ${q.correctAnswer}`);
          return false;
        }
        return true;
      })
      .map((q, idx) => ({
        id: `groq_${idx + 1}`,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation || 'Generated by Groq API.'
      }));

    //console.log('[QG] Successfully generated questions count:', questions.length);
    return questions;

  } catch (error) {
    console.error('[QG] Groq API Error:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    throw new Error(`Groq API request failed: ${error.message}`);
  }
}

// Fallback to local generation if API fails
function generateLocalQuestions() {
  return [];
}

/* changed to groq - updated main function to use Groq API */
export async function generateQuestionsFromText(text) {
  //console.log('[QG] generateQuestionsFromText called, text length:', text?.length);
  try {
    const groqQuestions = await generateTriviaQuestions(text, 10);
    //console.log('[QG] Returning questions count:', groqQuestions.length);
    return groqQuestions;
  } catch (error) {
    console.error('[QG] generateQuestionsFromText failed:', error.message);
    throw error;
  }
}