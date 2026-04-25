import { useEffect, useState } from 'react';
import { quizzes } from './lib/quizData';
import Footer from './components/Footer';
import QuizUploader from './components/QuizUploader';

export default function QuizApp({ user, onRequireLogin }) {
  const [allQuizzes, setAllQuizzes] = useState(quizzes);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showUploader, setShowUploader] = useState(false);
  const [failedImages, setFailedImages] = useState(new Set());
  const [timeLeft, setTimeLeft] = useState(20);
  const [isTimeExpired, setIsTimeExpired] = useState(false);

  useEffect(() => {
    if (!currentQuiz || showResults) return;

    const isAnswered = selectedAnswers[currentQuestionIndex] !== undefined;
    if (isAnswered || isTimeExpired) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsTimeExpired(true);
          const nextAnswers = [...selectedAnswers];
          nextAnswers[currentQuestionIndex] = null;
          setSelectedAnswers(nextAnswers);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentQuiz, currentQuestionIndex, selectedAnswers, isTimeExpired, showResults]);

  if (!user) {
    return (
      <div className="app-shell">
        <div className="hero-panel" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(/cat-forest-bg.png)', backgroundPosition: 'center 55%', backgroundSize: 'cover' }}>
          <h1 style={{ fontSize: '40px', fontWeight: '700', color: 'white', margin: '0 0 10px 0' }}>Please Log In</h1>
          <p style={{ fontSize: '16px', fontStyle: 'italic', color: 'rgba(255,255,255,0.95)', margin: '0' }}>
            You must be logged in before you can access quizzes.
          </p>
        </div>
        <main className="page-content" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '40px', maxWidth: '480px', width: '100%', textAlign: 'center', boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}>
            <p style={{ fontSize: '18px', color: '#141a2a', marginBottom: '24px' }}>
              Login to continue and start your quiz journey.
            </p>
            <button
              onClick={onRequireLogin}
              style={{
                backgroundColor: '#63b7b6',
                color: 'white',
                border: 'none',
                fontSize: '16px',
                fontWeight: '700',
                padding: '14px 28px',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#4a9595';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#63b7b6';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Login Now
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleSelectQuiz = (quiz) => {
    setCurrentQuiz(quiz);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswers([]);
    setTimeLeft(20);
    setIsTimeExpired(false);
  };

  const handleImageError = (imageSrc) => {
    setFailedImages(prev => new Set([...prev, imageSrc]));
  };

  const getImageUrl = (quizId) => {
    if (quizId === 'math') return '/math.jfif';
    if (quizId === 'science') return '/science.jfif';
    if (quizId === 'reading') return '/reading.jfif';
    if (quizId === 'language') return '/foreign.jfif';
    if (quizId === 'literature') return '/literature.jpg';
    if (quizId === 'history') return '/history.jpg';
    return '/math.jfif';
  };

  const getIconForQuiz = (quizId) => {
    if (quizId === 'math') return '🧮';
    if (quizId === 'science') return '🔬';
    if (quizId === 'reading') return '📖';
    if (quizId === 'language') return '🌐';
    if (quizId === 'literature') return '📚';
    if (quizId === 'history') return '🏛️';
    return '❓';
  };

  const handleAnswerSelect = (optionIndex) => {
    const isAnswered = selectedAnswers[currentQuestionIndex] !== undefined;
    if (isAnswered || isTimeExpired) return;

    const question = currentQuiz.questions[currentQuestionIndex];
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);

    if (optionIndex === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswers([...selectedAnswers]);
      setTimeLeft(20);
      setIsTimeExpired(false);
    } else {
      setShowResults(true);
    }
  };

  const handleRetry = () => {
    handleSelectQuiz(currentQuiz);
  };

  const handleQuizGenerated = (newQuiz) => {
    const normalizedQuiz = {
      ...newQuiz,
      isGenerated: true,
      questions: newQuiz.questions.map(({ trivia, ...question }) => ({ ...question })) // eslint-disable-line no-unused-vars
    };

    setAllQuizzes([...allQuizzes, normalizedQuiz]);
    setCurrentQuiz(normalizedQuiz);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswers([]);
    setTimeLeft(20);
    setIsTimeExpired(false);
  };

  // Quiz Selection Screen
  if (!currentQuiz) {
    return (
      <div className="app-shell">
        {/* Hero Section */}
        <div
          className="hero-panel"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(/cat-forest-bg.png)',
            backgroundPosition: 'center 55%',
            backgroundSize: 'cover',
          }}
        >
          <h1 style={{ fontSize: '40px', fontWeight: '700', color: 'white', margin: '0 0 10px 0' }}>Quizzes</h1>
          <p style={{ fontSize: '16px', fontStyle: 'italic', color: 'rgba(255,255,255,0.95)', margin: '0' }}>
            Challenge yourself and test your knowledge
          </p>
        </div>

        <main className="page-content" style={{ flex: 1, maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
          {/* Section Title */}
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '32px', 
            margin: '0 0 20px 0', 
            color: 'white', 
            fontWeight: '700'
          }}>
            Featured Quizzes
          </h2>

          {/* Create Custom Quiz Section */}
          <div style={{ 
            backgroundColor: 'rgba(99, 183, 182, 0.12)', 
            margin: '0 20px 30px 20px', 
            padding: '30px', 
            borderRadius: '14px', 
            textAlign: 'center',
            maxWidth: '650px',
            marginLeft: 'auto',
            marginRight: 'auto',
            border: '2px solid #63b7b6'
          }}>
            <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '10px', color: '#f2e9b8' }}>✨ Create Your Own Quiz</h3>
            <p style={{ fontSize: '14px', fontWeight: '500', marginBottom: '18px', color: '#ddd' }}>
              Upload your own quiz from a text file and challenge yourself or your friends!
            </p>
            <button
              onClick={() => setShowUploader(true)}
              style={{
                backgroundColor: '#f2e9b8',
                color: '#141a2a',
                padding: '10px 28px',
                fontSize: '14px',
                fontWeight: '700',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(242, 233, 184, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#e5d699';
                e.currentTarget.style.transform = 'scale(1.04) translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(242, 233, 184, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f2e9b8';
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(242, 233, 184, 0.3)';
              }}
            >
              📝 Create Quiz
            </button>
          </div>

          <div className="quiz-grid" style={{ marginBottom: '30px' }}>
            {allQuizzes.map((quiz) => {
              const imageSrc = getImageUrl(quiz.id);
              const hasFailedImage = failedImages.has(imageSrc);
              
              return (
                <button
                  key={quiz.id}
                  onClick={() => handleSelectQuiz(quiz)}
                  className="quiz-card"
                  style={{
                    transform: 'translateY(0)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                  }}
                >
                  {hasFailedImage ? (
                    <div style={{ width: '100%', height: '150px', backgroundColor: '#b0c4de', borderRadius: '8px', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '60px' }}>
                      {getIconForQuiz(quiz.id)}
                    </div>
                  ) : (
                    <img 
                      src={imageSrc} 
                      alt={quiz.title} 
                      onError={() => handleImageError(imageSrc)}
                      className="quiz-card-image"
                      style={{ marginBottom: '10px' }} 
                    />
                  )}
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>{quiz.title}</h3>
                  <p style={{ marginBottom: '10px', opacity: 0.9, fontSize: '14px' }}>{quiz.description}</p>
                  <p style={{ fontSize: '14px', opacity: 0.75, marginBottom: '15px' }}>{quiz.questions?.length || 0} Questions</p>
                  <div className="quiz-card-footer">
                    Take quiz
                  </div>
                </button>
              );
            })}
          </div>
        </main>

        {/* Footer */}
        <Footer />

        {/* Uploader Modal */}
        {showUploader && (
          <QuizUploader 
            onQuizGenerated={handleQuizGenerated}
            onClose={() => setShowUploader(false)}
          />
        )}
      </div>
    );
  }

  // Results Screen
  if (showResults) {
    const totalQuestions = currentQuiz.questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    let message = '';
    let emoji = '';

    if (percentage === 100) {
      message = 'Perfect Score! 🌟';
      emoji = '🏆';
    } else if (percentage >= 80) {
      message = 'Excellent! 🎉';
      emoji = '⭐';
    } else if (percentage >= 60) {
      message = 'Good Job! 👍';
      emoji = '😊';
    } else if (percentage >= 40) {
      message = 'Keep Trying! 💪';
      emoji = '🤔';
    } else {
      message = 'Keep Practicing! 📚';
      emoji = '😌';
    }

    return (
      <div className="app-shell">
        <main className="page-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '24px', 
            maxWidth: '500px', 
            width: '100%', 
            padding: '50px 40px', 
            textAlign: 'center', 
            color: '#141a2a',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
          }}>
          <div style={{ fontSize: '80px', marginBottom: '20px', animation: 'bounce 1s ease-in-out' }}>{emoji}</div>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '10px', color: '#141a2a' }}>{message}</h2>
          <p style={{ color: '#999', marginBottom: '35px', fontSize: '16px' }}>Quiz Complete!</p>

          <div style={{ 
            backgroundColor: '#63b7b6', 
            borderRadius: '16px', 
            padding: '35px', 
            marginBottom: '35px', 
            color: 'white',
            boxShadow: '0 4px 12px rgba(99, 183, 182, 0.3)'
          }}>
            <div style={{ fontSize: '56px', fontWeight: 'bold', marginBottom: '12px' }}>{score}/{totalQuestions}</div>
            <div style={{ fontSize: '16px', marginBottom: '20px', opacity: 0.9 }}>Correct Answers</div>
            <div style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.25)', borderRadius: '12px', height: '10px', overflow: 'hidden', marginBottom: '20px' }}>
              <div
                style={{
                  backgroundColor: 'white',
                  height: '100%',
                  width: `${percentage}%`,
                  transition: 'width 0.8s ease',
                  borderRadius: '12px'
                }}
              ></div>
            </div>
            <div style={{ fontSize: '18px', fontWeight: '700' }}>{percentage}%</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <button
              onClick={handleRetry}
              style={{
                backgroundColor: '#63b7b6',
                color: 'white',
                padding: '14px 28px',
                borderRadius: '10px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(99, 183, 182, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#4a9595';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(99, 183, 182, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#63b7b6';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(99, 183, 182, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Try Again
            </button>
            <button
              onClick={() => setCurrentQuiz(null)}
              style={{
                backgroundColor: 'transparent',
                color: '#63b7b6',
                padding: '14px 28px',
                borderRadius: '10px',
                fontWeight: '600',
                border: '2px solid #63b7b6',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(99, 183, 182, 0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Choose Another Quiz
            </button>
          </div>
        </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Quiz Screen
  if (!currentQuiz?.questions || !Array.isArray(currentQuiz.questions) || currentQuiz.questions.length === 0) {
    return (
      <div className="app-shell">
        <main className="page-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
          <h2>Error: No questions available</h2>
          <button onClick={() => setCurrentQuiz(null)} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#63b7b6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
            ← Back to Quizzes
          </button>
        </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const question = currentQuiz.questions[currentQuestionIndex];
  if (!question) return null;

  return (
    <div className="app-shell">
      <main className="page-content" style={{ flex: 1, padding: '40px 20px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '35px' }}>
          <button
            onClick={() => setCurrentQuiz(null)}
            style={{ 
              color: '#f2e9b8', 
              background: 'none', 
              border: 'none', 
              fontSize: '16px', 
              fontWeight: '600', 
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: '8px 12px',
              borderRadius: '6px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.backgroundColor = 'rgba(242, 233, 184, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#f2e9b8';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            ← Back to Quizzes
          </button>
          <div style={{ 
            backgroundColor: 'rgba(99, 183, 182, 0.2)', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '10px 20px', 
            borderRadius: '20px', 
            color: '#f2e9b8', 
            fontWeight: '700',
            fontSize: '15px',
            border: '1px solid rgba(99, 183, 182, 0.3)'
          }}>
            Score: <span style={{ fontSize: '18px', fontWeight: '800' }}>{score}</span><span style={{ opacity: 0.6 }}>/{currentQuiz.questions.length}</span>
          </div>
        </div>

        {/* Progress */}
        <div style={{ marginBottom: '30px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', color: 'white', fontWeight: '600', fontSize: '14px' }}>
            <span>Question {currentQuestionIndex + 1} of {currentQuiz.questions.length}</span>
            <span style={{ opacity: 0.8 }}>{Math.round(((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100)}% Complete</span>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{ color: '#f2e9b8', fontWeight: '700' }}>Time left: {timeLeft}s</div>
            <div style={{ flex: 1, height: '10px', backgroundColor: 'rgba(255,255,255,0.18)', borderRadius: '999px', overflow: 'hidden' }}>
              <div
                style={{
                  width: `${(timeLeft / 20) * 100}%`,
                  height: '100%',
                  backgroundColor: '#63b7b6',
                  transition: 'width 0.5s linear'
                }}
              ></div>
            </div>
          </div>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', width: '100%', borderRadius: '12px', height: '10px', overflow: 'hidden', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)' }}>
            <div
              style={{
                backgroundImage: 'linear-gradient(90deg, #63b7b6 0%, #f2e9b8 100%)',
                width: `${((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100}%`,
                height: '100%',
                transition: 'width 0.5s ease',
                borderRadius: '12px',
                boxShadow: '0 0 10px rgba(242, 233, 184, 0.5)'
              }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '20px', 
          padding: '45px', 
          marginBottom: '35px', 
          color: '#141a2a',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease',
          fontFamily: "'Poppins', sans-serif"
        }}>
          <h2 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '35px', lineHeight: '1.6', color: '#141a2a' }}>
            {question.question}
          </h2>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {question.options.map((option, index) => {
              const isAnswered = selectedAnswers[currentQuestionIndex] !== undefined;
              const colorOptions = ['#ADE8F4', '#A4F9B5', '#FFF4A3', '#FFD4E5'];
              const getButtonColor = () => {
                if (selectedAnswers[currentQuestionIndex] === index) {
                  return index === question.correctAnswer ? '#10b981' : '#ef4444';
                }
                return !isAnswered ? colorOptions[index] : '#f3f4f6';
              };
              
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  style={{
                    backgroundColor: getButtonColor(),
                    color: selectedAnswers[currentQuestionIndex] === index ? 'white' : '#141a2a',
                    padding: '20px 24px',
                    borderRadius: '14px',
                    fontWeight: '700',
                    textAlign: 'left',
                    border: selectedAnswers[currentQuestionIndex] === index
                      ? `3px solid ${index === question.correctAnswer ? '#10b981' : '#ef4444'}`
                      : '2px solid rgba(0,0,0,0.08)',
                    cursor: !isAnswered && !isTimeExpired ? 'pointer' : 'not-allowed',
                    transition: 'all 0.3s ease',
                    opacity: (isAnswered && selectedAnswers[currentQuestionIndex] !== index && selectedAnswers[currentQuestionIndex] !== question.correctAnswer) ? 0.5 : 1,
                    fontSize: '18px',
                    transform: !isAnswered && !isTimeExpired ? 'scale(1)' : 'scale(0.98)',
                    boxShadow: !isAnswered && !isTimeExpired ? '0 4px 12px rgba(0,0,0,0.1)' : 'none'
                  }}
                  disabled={isAnswered || isTimeExpired}
                  onMouseEnter={(e) => {
                    if (!isAnswered && !isTimeExpired) {
                      const hoverColors = ['#7DD9ED', '#70F499', '#FFE54F', '#FFC6DB'];
                      e.currentTarget.style.backgroundColor = hoverColors[index];
                      e.currentTarget.style.transform = 'translateX(6px) scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.15)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isAnswered && !isTimeExpired) {
                      const colorOptions = ['#ADE8F4', '#A4F9B5', '#FFF4A3', '#FFD4E5'];
                      e.currentTarget.style.backgroundColor = colorOptions[index];
                      e.currentTarget.style.transform = 'translateX(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                    }
                  }}
                >
                  <span style={{ display: 'inline-block', width: '36px', height: '36px', backgroundColor: 'rgba(0,0,0,0.12)', borderRadius: '50%', textAlign: 'center', lineHeight: '36px', marginRight: '14px', fontWeight: '800', fontSize: '16px' }}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {(selectedAnswers[currentQuestionIndex] !== undefined || isTimeExpired) && (
            <div
              style={{
                marginTop: '30px',
                padding: '25px',
                borderRadius: '14px',
                backgroundColor: selectedAnswers[currentQuestionIndex] === question.correctAnswer ? '#d1fae5' : '#fee2e2',
                color: selectedAnswers[currentQuestionIndex] === question.correctAnswer ? '#065f46' : '#991b1b',
                fontWeight: '600',
                borderLeft: `5px solid ${selectedAnswers[currentQuestionIndex] === question.correctAnswer ? '#10b981' : '#ef4444'}`,
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
              }}
            >
              <p style={{ marginBottom: '12px', fontSize: '20px', fontWeight: '800' }}>
                {isTimeExpired && selectedAnswers[currentQuestionIndex] === null ? '⏱️ Time is up!' : selectedAnswers[currentQuestionIndex] === question.correctAnswer ? '✅ Correct!' : '❌ Incorrect!'}
              </p>
              <p style={{ fontSize: '17px', fontWeight: '600', lineHeight: '1.7', marginBottom: '16px', opacity: 0.95 }}>
                {question.explanation}
              </p>
              
              {(!currentQuiz.isGenerated && !String(currentQuiz.id).startsWith('uploaded_') && question.trivia) && (
                <div style={{ backgroundColor: 'rgba(0,0,0,0.08)', padding: '14px', borderRadius: '10px', marginBottom: '16px', fontSize: '17px', fontStyle: 'italic', fontWeight: '600' }}>
                  💡 Fun Fact: {question.trivia}
                </div>
              )}
              
              {currentQuestionIndex < currentQuiz.questions.length - 1 && (
                <button
                  onClick={handleNextQuestion}
                  style={{
                    marginTop: '12px',
                    backgroundColor: selectedAnswers[currentQuestionIndex] === question.correctAnswer ? '#10b981' : '#ef4444',
                    color: 'white',
                    padding: '13px 24px',
                    borderRadius: '10px',
                    fontWeight: '800',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontSize: '16px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Next Question →
                </button>
              )}
              {currentQuestionIndex === currentQuiz.questions.length - 1 && (
                <button
                  onClick={() => setShowResults(true)}
                  style={{
                    marginTop: '12px',
                    backgroundColor: selectedAnswers[currentQuestionIndex] === question.correctAnswer ? '#10b981' : '#ef4444',
                    color: 'white',
                    padding: '13px 24px',
                    borderRadius: '10px',
                    fontWeight: '800',
                    border: 'none',
                    cursor: selectedAnswers[currentQuestionIndex] !== undefined ? 'pointer' : 'not-allowed',
                    transition: 'all 0.3s ease',
                    fontSize: '16px',
                    opacity: selectedAnswers[currentQuestionIndex] !== undefined ? 1 : 0.5,
                    width: '100%',
                    textAlign: 'center'
                  }}
                  disabled={selectedAnswers[currentQuestionIndex] === undefined}
                  onMouseEnter={(e) => {
                    if (selectedAnswers[currentQuestionIndex] !== undefined) {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  View Results →
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}
