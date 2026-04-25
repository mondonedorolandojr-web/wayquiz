import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginModal from './components/LoginModal';
import Home from './pages/Home';
import QuizApp from './QuizApp';
import About from './pages/About';
import Progress from './pages/Progress';
import HowItWorks from './pages/HowItWorks';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState('');

  // Check for stored auth token on mount
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('userData');
    if (token && userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
      }
    }
  }, []);

  return (
    <Router>
      <Navbar 
        user={user}
        onLogout={() => {
          setUser(null);
          localStorage.removeItem('authToken');
          localStorage.removeItem('userData');
        }}
        onLoginClick={() => {
          setIsLoginMode(true);
          setIsLoginOpen(true);
          setLoginError('');
        }}
        onSignupClick={() => {
          setIsLoginMode(false);
          setIsLoginOpen(true);
          setLoginError('');
        }}
      />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizApp user={user} onRequireLogin={() => {
          setIsLoginMode(true);
          setIsLoginOpen(true);
          setLoginError('');
        }} />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
      
      <LoginModal 
        isOpen={isLoginOpen}
        onClose={() => {
          setIsLoginOpen(false);
          setLoginError('');
        }}
        isLogin={isLoginMode}
        onSwitch={() => {
          setIsLoginMode(!isLoginMode);
          setLoginError('');
        }}
        onLoginSuccess={(userData) => {
          const { token, ...userInfo } = userData;
          localStorage.setItem('authToken', token);
          localStorage.setItem('userData', JSON.stringify(userInfo));
          setUser(userInfo);
          setIsLoginOpen(false);
          setLoginError('');
        }}
        loginError={loginError}
        setLoginError={setLoginError}
      />
    </Router>
  );
}

export default App;