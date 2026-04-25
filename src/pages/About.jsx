import Footer from '../components/Footer';

export default function About() {
  return (
    <div style={{ backgroundColor: '#2f364a', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Poppins', sans-serif" }}>
      {/* Hero Section */}
      <div style={{ 
        height: '350px',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(/cat-forest-bg.png)',
        backgroundPosition: 'center 55%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center', 
        padding: '50px 20px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
      }}>
        <h1 style={{ fontSize: '40px', fontWeight: '800', color: 'white', margin: '0 0 12px 0' }}>About WayQuizz</h1>
        <p style={{ fontSize: '18px', fontStyle: 'italic', color: 'rgba(255,255,255,0.95)', margin: '0', maxWidth: '700px', fontWeight: '500' }}>
          Empowering learners through fun, interactive quizzes
        </p>
      </div>

      {/* Content Section */}
      <section style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto', flex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px', color: '#f2e9b8' }}>Our Mission</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '20px', color: '#ddd', fontWeight: '500' }}>
            WayQuizz is an interactive learning platform designed to make education fun and engaging.
            Our goal is to help students test their knowledge through exciting quizzes
            in subjects like Math, Science, Reading, Languages, Literature, History, and more.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '35px',
          marginBottom: '80px'
        }}>
          <div style={{ 
            backgroundColor: 'rgba(99, 183, 182, 0.15)',
            padding: '40px',
            borderRadius: '18px',
            borderLeft: '6px solid #63b7b6',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.2)';
            e.currentTarget.style.backgroundColor = 'rgba(99, 183, 182, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            e.currentTarget.style.backgroundColor = 'rgba(99, 183, 182, 0.15)';
          }}
          >
            <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '15px', color: '#f2e9b8' }}>🎓 Learn</h3>
            <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#ddd', fontWeight: '500' }}>
              Access diverse quiz topics and expand your knowledge across multiple subjects with well-curated questions.
            </p>
          </div>

          <div style={{ 
            backgroundColor: 'rgba(99, 183, 182, 0.15)',
            padding: '40px',
            borderRadius: '18px',
            borderLeft: '6px solid #63b7b6',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.2)';
            e.currentTarget.style.backgroundColor = 'rgba(99, 183, 182, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            e.currentTarget.style.backgroundColor = 'rgba(99, 183, 182, 0.15)';
          }}
          >
            <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '15px', color: '#f2e9b8' }}>✓ Test</h3>
            <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#ddd', fontWeight: '500' }}>
              Challenge yourself with comprehensive quizzes and get instant feedback on your performance.
            </p>
          </div>

          <div style={{ 
            backgroundColor: 'rgba(99, 183, 182, 0.15)',
            padding: '40px',
            borderRadius: '18px',
            borderLeft: '6px solid #63b7b6',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.2)';
            e.currentTarget.style.backgroundColor = 'rgba(99, 183, 182, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            e.currentTarget.style.backgroundColor = 'rgba(99, 183, 182, 0.15)';
          }}
          >
            <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '15px', color: '#f2e9b8' }}>🚀 Grow</h3>
            <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#ddd', fontWeight: '500' }}>
              Track your progress and improve your skills with personalized learning experiences.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h3 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '20px', color: 'white' }}>Why Choose WayQuizz?</h3>
          <div style={{ 
            backgroundColor: 'rgba(99, 183, 182, 0.08)',
            padding: '45px',
            borderRadius: '18px',
            border: '2px solid rgba(99, 183, 182, 0.3)'
          }}>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '25px',
              textAlign: 'left'
            }}>
              <li style={{ fontSize: '18px', color: '#ddd', lineHeight: '1.8', fontWeight: '600' }}>✅ User-friendly Interface</li>
              <li style={{ fontSize: '18px', color: '#ddd', lineHeight: '1.8', fontWeight: '600' }}>✅ Diverse Subject Coverage</li>
              <li style={{ fontSize: '18px', color: '#ddd', lineHeight: '1.8', fontWeight: '600' }}>✅ Instant Feedback</li>
              <li style={{ fontSize: '18px', color: '#ddd', lineHeight: '1.8', fontWeight: '600' }}>✅ Progress Tracking</li>
              <li style={{ fontSize: '18px', color: '#ddd', lineHeight: '1.8', fontWeight: '600' }}>✅ Fun Learning Experience</li>
              <li style={{ fontSize: '18px', color: '#ddd', lineHeight: '1.8', fontWeight: '600' }}>✅ Free Access</li>
            </ul>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '20px', lineHeight: '1.9', color: '#bbb', fontWeight: '500' }}>
            We believe learning should be simple, fun, and accessible to everyone.
            Start your journey with WayQuizz today and unlock your potential! 🌟
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}