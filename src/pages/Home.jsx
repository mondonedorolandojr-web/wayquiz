import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Footer from '../components/Footer';
import QuizUploader from '../components/QuizUploader';

export default function Home() {
  const [showUploader, setShowUploader] = useState(false);
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#2f364a', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Poppins', sans-serif" }}>
      {/* Hero Section */}
      <div
        style={{
          height: '350px',
          background: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(/cat-forest-bg.png) center 55%/cover no-repeat`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '20px'
        }}
      >
        <h1 style={{ fontSize: '40px', fontWeight: '800', color: 'white', marginBottom: '12px' }}>Welcome to WayQuizz!</h1>
        <p style={{ marginTop: '8px', fontSize: '18px', fontStyle: 'italic', color: 'white', marginBottom: '28px' }}>Test your knowledge with fun, interactive quizzes.</p>
        
        <div style={{ marginTop: '25px', display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link
            to="/quiz"
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: '700',
              textDecoration: 'none',
              backgroundColor: '#1b2236',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2d3e54';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1b2236';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
            }}
          >
            🚀 Start Quiz
          </Link>
          <Link
            to="/about"
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: '700',
              textDecoration: 'none',
              backgroundColor: '#63b7b6',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(99, 183, 182, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#4a9595';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(99, 183, 182, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#63b7b6';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(99, 183, 182, 0.3)';
            }}
          >
            📚 Learn More
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', padding: '40px 20px', flexWrap: 'wrap', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ 
          backgroundColor: '#63b7b6', 
          padding: '25px', 
          borderRadius: '14px', 
          width: '300px', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '20px', 
          color: 'white',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.25)';
          e.currentTarget.style.backgroundColor = '#4a9595';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
          e.currentTarget.style.backgroundColor = '#63b7b6';
        }}
        >
          <div style={{ fontSize: '48px' }}>❓</div>
          <div>
            <h3 style={{ marginBottom: '6px', color: '#f2e9b8', fontSize: '16px', fontWeight: '700' }}>Popular Quizzes</h3>
            <p style={{ fontSize: '14px', fontWeight: '500' }}>Top quizzes to try</p>
          </div>
        </div>

        <div style={{ 
          backgroundColor: '#63b7b6', 
          padding: '30px', 
          borderRadius: '16px', 
          width: '320px', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '20px', 
          color: 'white',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.25)';
          e.currentTarget.style.backgroundColor = '#4a9595';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
          e.currentTarget.style.backgroundColor = '#63b7b6';
        }}
        >
          <div style={{ fontSize: '48px' }}>🎯</div>
          <div>
            <h3 style={{ marginBottom: '6px', color: '#f2e9b8', fontSize: '16px', fontWeight: '700' }}>How It Works</h3>
            <p style={{ fontSize: '14px', fontWeight: '500' }}>Learn step by step</p>
          </div>
        </div>

        <div style={{ 
          backgroundColor: '#63b7b6', 
          padding: '30px', 
          borderRadius: '16px', 
          width: '320px', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '20px', 
          color: 'white',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.25)';
          e.currentTarget.style.backgroundColor = '#4a9595';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
          e.currentTarget.style.backgroundColor = '#63b7b6';
        }}
        >
          <div style={{ fontSize: '48px' }}>📊</div>
          <div>
            <h3 style={{ marginBottom: '6px', color: '#f2e9b8', fontSize: '16px', fontWeight: '700' }}>Track Progress</h3>
            <p style={{ fontSize: '14px', fontWeight: '500' }}>Monitor your scores</p>
          </div>
        </div>
      </div>

      {/* Section Title */}
      <h2 style={{ textAlign: 'center', fontSize: '32px', margin: '30px 0 20px 0', color: 'white', fontWeight: '800' }}>
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

      {/* Quiz Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ 
          backgroundColor: '#d8e3ec', 
          color: '#111', 
          padding: '18px', 
          borderRadius: '12px', 
          textAlign: 'center',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          display: 'flex',
          flexDirection: 'column'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
          e.currentTarget.style.boxShadow = '0 10px 24px rgba(0,0,0,0.25)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        }}
        >
          <img src="/math.jfif" alt="Math" style={{ width: '100%', height: '140px', borderRadius: '10px', marginBottom: '12px', objectFit: 'cover' }} />
          <h3 style={{ margin: '10px 0', fontSize: '17px', fontWeight: '700' }}>🧮 Math</h3>
          <p style={{ fontSize: '13px', fontWeight: '500', marginBottom: '12px', flex: 1 }}>Love your numbers with mathematics</p>
          <Link to="/quiz" style={{ display: 'inline-block', marginTop: 'auto', padding: '9px 20px', background: '#4b6ea9', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '13px', transition: 'all 0.3s ease' }}
          onMouseEnter={(e) => {
            e.style.backgroundColor = '#3a5285';
            e.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.style.backgroundColor = '#4b6ea9';
            e.style.transform = 'translateY(0)';
          }}
          >Take Quiz</Link>
        </div>

        <div style={{ 
          backgroundColor: '#d8e3ec', 
          color: '#111', 
          padding: '20px', 
          borderRadius: '16px', 
          textAlign: 'center',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          display: 'flex',
          flexDirection: 'column'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
          e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.25)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        }}
        >
          <img src="/science.jfif" alt="Science" style={{ width: '100%', height: '140px', borderRadius: '12px', marginBottom: '12px', objectFit: 'cover' }} />
          <h3 style={{ margin: '10px 0', fontSize: '17px', fontWeight: '700' }}>🔬 Science</h3>
          <p style={{ fontSize: '13px', fontWeight: '500', marginBottom: '12px', flex: 1 }}>Explore the wonders of the natural world!</p>
          <Link to="/quiz" style={{ display: 'inline-block', marginTop: 'auto', padding: '10px 20px', background: '#4b6ea9', color: 'white', borderRadius: '10px', textDecoration: 'none', fontWeight: '600', fontSize: '13px', transition: 'all 0.3s ease' }}
          onMouseEnter={(e) => {
            e.style.backgroundColor = '#3a5285';
            e.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.style.backgroundColor = '#4b6ea9';
            e.style.transform = 'translateY(0)';
          }}
          >Take Quiz</Link>
        </div>

        <div style={{ 
          backgroundColor: '#d8e3ec', 
          color: '#111', 
          padding: '20px', 
          borderRadius: '16px', 
          textAlign: 'center',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          display: 'flex',
          flexDirection: 'column'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
          e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.25)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        }}
        >
          <img src="/reading.jfif" alt="Reading" style={{ width: '100%', height: '140px', borderRadius: '12px', marginBottom: '12px', objectFit: 'cover' }} />
          <h3 style={{ margin: '10px 0', fontSize: '17px', fontWeight: '700' }}>📖 English</h3>
          <p style={{ fontSize: '13px', fontWeight: '500', marginBottom: '12px', flex: 1 }}>Test your reading comprehension skills!</p>
          <Link to="/quiz" style={{ display: 'inline-block', marginTop: 'auto', padding: '10px 20px', background: '#4b6ea9', color: 'white', borderRadius: '10px', textDecoration: 'none', fontWeight: '600', fontSize: '13px', transition: 'all 0.3s ease' }}
          onMouseEnter={(e) => {
            e.style.backgroundColor = '#3a5285';
            e.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.style.backgroundColor = '#4b6ea9';
            e.style.transform = 'translateY(0)';
          }}
          >Take Quiz</Link>
        </div>

        <div style={{ 
          backgroundColor: '#d8e3ec', 
          color: '#111', 
          padding: '20px', 
          borderRadius: '16px', 
          textAlign: 'center',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          display: 'flex',
          flexDirection: 'column'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
          e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.25)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        }}
        >
          <img src="/foreign.jfif" alt="Foreign Language" style={{ width: '100%', height: '140px', borderRadius: '12px', marginBottom: '12px', objectFit: 'cover' }} />
          <h3 style={{ margin: '10px 0', fontSize: '17px', fontWeight: '700' }}>🌐 Language</h3>
          <p style={{ fontSize: '13px', fontWeight: '500', marginBottom: '12px', flex: 1 }}>How well do you know the world?</p>
          <Link to="/quiz" style={{ display: 'inline-block', marginTop: 'auto', padding: '10px 20px', background: '#4b6ea9', color: 'white', borderRadius: '10px', textDecoration: 'none', fontWeight: '600', fontSize: '13px', transition: 'all 0.3s ease' }}
          onMouseEnter={(e) => {
            e.style.backgroundColor = '#3a5285';
            e.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.style.backgroundColor = '#4b6ea9';
            e.style.transform = 'translateY(0)';
          }}
          >Take Quiz</Link>
        </div>

        <div style={{ 
          backgroundColor: '#d8e3ec', 
          color: '#111', 
          padding: '20px', 
          borderRadius: '16px', 
          textAlign: 'center',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          display: 'flex',
          flexDirection: 'column'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
          e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.25)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        }}
        >
          <img src="/literature.jpg" alt="Literature" style={{ width: '100%', height: '140px', borderRadius: '12px', marginBottom: '12px', objectFit: 'cover' }} />
          <h3 style={{ margin: '10px 0', fontSize: '17px', fontWeight: '700' }}>📚 Literature</h3>
          <p style={{ fontSize: '13px', fontWeight: '500', marginBottom: '12px', flex: 1 }}>Explore stories and famous authors!</p>
          <Link to="/quiz" style={{ display: 'inline-block', marginTop: 'auto', padding: '10px 20px', background: '#4b6ea9', color: 'white', borderRadius: '10px', textDecoration: 'none', fontWeight: '600', fontSize: '13px', transition: 'all 0.3s ease' }}
          onMouseEnter={(e) => {
            e.style.backgroundColor = '#3a5285';
            e.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.style.backgroundColor = '#4b6ea9';
            e.style.transform = 'translateY(0)';
          }}
          >Take Quiz</Link>
        </div>

        <div style={{ 
          backgroundColor: '#d8e3ec', 
          color: '#111', 
          padding: '20px', 
          borderRadius: '16px', 
          textAlign: 'center',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          display: 'flex',
          flexDirection: 'column'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
          e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.25)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        }}
        >
          <img src="/history.jpg" alt="History" style={{ width: '100%', height: '140px', borderRadius: '12px', marginBottom: '12px', objectFit: 'cover' }} />
          <h3 style={{ margin: '10px 0', fontSize: '17px', fontWeight: '700' }}>🏛️ History</h3>
          <p style={{ fontSize: '13px', fontWeight: '500', marginBottom: '12px', flex: 1 }}>Journey through time and cultures!</p>
          <Link to="/quiz" style={{ display: 'inline-block', marginTop: 'auto', padding: '10px 20px', background: '#4b6ea9', color: 'white', borderRadius: '10px', textDecoration: 'none', fontWeight: '600', fontSize: '13px', transition: 'all 0.3s ease' }}
          onMouseEnter={(e) => {
            e.style.backgroundColor = '#3a5285';
            e.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.style.backgroundColor = '#4b6ea9';
            e.style.transform = 'translateY(0)';
          }}
          >Take Quiz</Link>
        </div>
      </div>

      {/* Create Custom Quiz Section */}
      {/* Stats Section */}
      <div style={{ backgroundColor: 'rgba(99, 183, 182, 0.1)', padding: '60px 20px', marginTop: '40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '800', textAlign: 'center', marginBottom: '50px', color: '#f2e9b8' }}>Why Learners Love WayQuizz</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', textAlign: 'center' }}>
            <div style={{ padding: '30px' }}>
              <div style={{ fontSize: '48px', fontWeight: '800', color: '#63b7b6', marginBottom: '10px' }}>1000+</div>
              <p style={{ fontSize: '16px', fontWeight: '600', color: 'white' }}>Questions Available</p>
            </div>
            
            <div style={{ padding: '30px' }}>
              <div style={{ fontSize: '48px', fontWeight: '800', color: '#63b7b6', marginBottom: '10px' }}>10+ </div>
              <p style={{ fontSize: '16px', fontWeight: '600', color: 'white' }}>Subject Categories</p>
            </div>
            
            <div style={{ padding: '30px' }}>
              <div style={{ fontSize: '48px', fontWeight: '800', color: '#63b7b6', marginBottom: '10px' }}>100%</div>
              <p style={{ fontSize: '16px', fontWeight: '600', color: 'white' }}>Free to Use</p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '18px', color: 'white' }}>Ready to Test Your Knowledge?</h2>
        <p style={{ fontSize: '16px', fontWeight: '500', marginBottom: '30px', color: '#ddd', maxWidth: '600px', margin: '0 auto 30px auto' }}>
          Join thousands of learners who are improving their skills with interactive quizzes. Start now and see how much you can achieve!
        </p>
        <button
          onClick={() => navigate('/quiz')}
          style={{
            backgroundColor: '#63b7b6',
            color: 'white',
            padding: '14px 40px',
            fontSize: '16px',
            fontWeight: '700',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(99, 183, 182, 0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#4a9595';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(99, 183, 182, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#63b7b6';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(99, 183, 182, 0.3)';
          }}
        >
          🚀 Start Exploring Quizzes
        </button>
      </div>

      {/* Footer */}
      <Footer />

      {/* Uploader Modal */}
      {showUploader && (
        <QuizUploader 
          onClose={() => setShowUploader(false)}
          onQuizGenerated={() => {
            setShowUploader(false);
            navigate('/quiz');
          }}
        />
      )}
    </div>
  );
}