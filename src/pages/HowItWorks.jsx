import Footer from '../components/Footer';

export default function HowItWorks() {
  return (
    <div style={{ backgroundColor: '#2f364a', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Poppins', sans-serif" }}>
      <div style={{
        height: '350px',
        background: 'linear-gradient(135deg, #121822 0%, #2f4257 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '50px 20px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
      }}>
        <p style={{ fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', color: '#ff9a56', marginBottom: '12px', fontWeight: '700' }}>How It Works</p>
        <h1 style={{ fontSize: '42px', fontWeight: '800', color: 'white', margin: '0 0 16px 0' }}>Learn, Quiz, Improve</h1>
        <p style={{ maxWidth: '720px', color: '#cfd8e3', fontSize: '17px', lineHeight: '1.9', margin: '0' }}>
          WayQuizz helps you practice with quick, easy-to-use quizzes across subjects.
          Choose a category, answer questions, and track your performance instantly.
        </p>
      </div>

      <section style={{ padding: '70px 20px', maxWidth: '1100px', margin: '0 auto', flex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginBottom: '60px' }}>
          <div style={{ backgroundColor: '#1f3143', borderRadius: '20px', padding: '32px', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 12px 30px rgba(0,0,0,0.15)' }}>
            <div style={{ fontSize: '32px', marginBottom: '18px' }}>1️⃣</div>
            <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '14px', color: '#f2e9b8' }}>Choose a Subject</h2>
            <p style={{ color: '#cfd8e3', fontSize: '15px', lineHeight: '1.8' }}>
              Start from Math, Science, English, Language, Literature, or History.
              Each card gives you a quick glance at the topic before you begin.
            </p>
          </div>

          <div style={{ backgroundColor: '#1f3143', borderRadius: '20px', padding: '32px', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 12px 30px rgba(0,0,0,0.15)' }}>
            <div style={{ fontSize: '32px', marginBottom: '18px' }}>2️⃣</div>
            <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '14px', color: '#f2e9b8' }}>Answer Questions</h2>
            <p style={{ color: '#cfd8e3', fontSize: '15px', lineHeight: '1.8' }}>
              Pick the right answer from multiple choices. Your score is tracked as you go.
              The quiz flows smoothly from one question to the next.
            </p>
          </div>

          <div style={{ backgroundColor: '#1f3143', borderRadius: '20px', padding: '32px', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 12px 30px rgba(0,0,0,0.15)' }}>
            <div style={{ fontSize: '32px', marginBottom: '18px' }}>3️⃣</div>
            <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '14px', color: '#f2e9b8' }}>See Your Result</h2>
            <p style={{ color: '#cfd8e3', fontSize: '15px', lineHeight: '1.8' }}>
              After finishing, your score and completion rate are shown immediately.
              Use the progress dashboard to see how you improve over time.
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: '#262f44', borderRadius: '24px', padding: '36px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 12px 36px rgba(0,0,0,0.18)' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '20px', color: 'white' }}>Why it works</h2>
          <p style={{ color: '#d3d9e9', fontSize: '16px', lineHeight: '1.9', marginBottom: '18px' }}>
            WayQuizz uses fast, bite-sized quizzes that make review quick and enjoyable.
            Consistent practice builds confidence, and instant feedback helps you learn from mistakes right away.
          </p>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            <li style={{ backgroundColor: 'rgba(255,255,255,0.04)', padding: '18px', borderRadius: '16px', fontWeight: '600', color: '#cfd8e3' }}>Fast review in minutes</li>
            <li style={{ backgroundColor: 'rgba(255,255,255,0.04)', padding: '18px', borderRadius: '16px', fontWeight: '600', color: '#cfd8e3' }}>Clear subject categories</li>
            <li style={{ backgroundColor: 'rgba(255,255,255,0.04)', padding: '18px', borderRadius: '16px', fontWeight: '600', color: '#cfd8e3' }}>Instant score feedback</li>
            <li style={{ backgroundColor: 'rgba(255,255,255,0.04)', padding: '18px', borderRadius: '16px', fontWeight: '600', color: '#cfd8e3' }}>Progress tracking page</li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
