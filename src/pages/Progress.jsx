import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Progress() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#2f364a', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Poppins', sans-serif" }}>
      {/* Hero Section */}
      <div style={{
        height: '250px',
        background: 'linear-gradient(135deg, #1a2332 0%, #2d3f52 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px'
      }}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#ff9a56', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>DASHBOARD</h3>
        <h1 style={{ fontSize: '48px', fontWeight: '800', color: 'white', margin: '0 0 8px 0' }}>Your Progress</h1>
        <p style={{ fontSize: '16px', color: '#aaa', margin: '0' }}>Track your learning journey</p>
      </div>

      {/* Progress Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px',
        padding: '40px 20px',
        maxWidth: '900px',
        margin: '0 auto',
        width: '100%'
      }}>
        {/* Quizzes Taken */}
        <div style={{
          backgroundColor: '#1e2d3d',
          border: '1px solid rgba(110, 219, 213, 0.2)',
          borderRadius: '16px',
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#253648';
          e.currentTarget.style.borderColor = '#6edbd5';
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 12px 32px rgba(110, 219, 213, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#1e2d3d';
          e.currentTarget.style.borderColor = 'rgba(110, 219, 213, 0.2)';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)';
        }}
        >
          <div style={{ fontSize: '32px', marginBottom: '12px' }}>✅</div>
          <p style={{ fontSize: '13px', fontWeight: '500', color: '#999', margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Quizzes Taken</p>
          <h2 style={{ fontSize: '44px', fontWeight: '800', color: 'white', margin: '0' }}>24</h2>
        </div>

        {/* Questions Answered */}
        <div style={{
          backgroundColor: '#1e2d3d',
          border: '1px solid rgba(110, 219, 213, 0.2)',
          borderRadius: '16px',
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#253648';
          e.currentTarget.style.borderColor = '#6edbd5';
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 12px 32px rgba(110, 219, 213, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#1e2d3d';
          e.currentTarget.style.borderColor = 'rgba(110, 219, 213, 0.2)';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)';
        }}
        >
          <div style={{ fontSize: '32px', marginBottom: '12px' }}>💬</div>
          <p style={{ fontSize: '13px', fontWeight: '500', color: '#999', margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Questions Answered</p>
          <h2 style={{ fontSize: '44px', fontWeight: '800', color: 'white', margin: '0' }}>240</h2>
        </div>

        {/* Avg Score */}
        <div style={{
          backgroundColor: '#1e2d3d',
          border: '1px solid rgba(110, 219, 213, 0.2)',
          borderRadius: '16px',
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#253648';
          e.currentTarget.style.borderColor = '#6edbd5';
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 12px 32px rgba(110, 219, 213, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#1e2d3d';
          e.currentTarget.style.borderColor = 'rgba(110, 219, 213, 0.2)';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)';
        }}
        >
          <div style={{ fontSize: '32px', marginBottom: '12px' }}>🎯</div>
          <p style={{ fontSize: '13px', fontWeight: '500', color: '#999', margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Avg. Score</p>
          <h2 style={{ fontSize: '44px', fontWeight: '800', color: '#6edbd5', margin: '0' }}>78%</h2>
        </div>

        {/* Best Streak */}
        <div style={{
          backgroundColor: '#1e2d3d',
          border: '1px solid rgba(110, 219, 213, 0.2)',
          borderRadius: '16px',
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#253648';
          e.currentTarget.style.borderColor = '#6edbd5';
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 12px 32px rgba(110, 219, 213, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#1e2d3d';
          e.currentTarget.style.borderColor = 'rgba(110, 219, 213, 0.2)';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)';
        }}
        >
          <div style={{ fontSize: '32px', marginBottom: '12px' }}>🔥</div>
          <p style={{ fontSize: '13px', fontWeight: '500', color: '#999', margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Best Streak</p>
          <h2 style={{ fontSize: '44px', fontWeight: '800', color: '#ff9a56', margin: '0' }}>12</h2>
        </div>
      </div>

      {/* Back Button */}
      <div style={{ textAlign: 'center', padding: '20px', marginTop: 'auto' }}>
        <button
          onClick={() => navigate('/')}
          style={{
            backgroundColor: '#63b7b6',
            color: 'white',
            border: 'none',
            fontSize: '14px',
            fontWeight: '600',
            padding: '12px 28px',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
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
          ← Back to Home
        </button>
      </div>

      {/* Category Breakdown */}
      <div style={{
        backgroundColor: '#1e2d3d',
        border: '1px solid rgba(110, 219, 213, 0.2)',
        borderRadius: '16px',
        padding: '32px',
        margin: '20px',
        maxWidth: '1000px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', gap: '20px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'white', margin: '0' }}>Category Breakdown</h2>
          <span style={{
            backgroundColor: '#ff9a56',
            color: 'white',
            fontSize: '12px',
            fontWeight: '600',
            padding: '6px 12px',
            borderRadius: '6px'
          }}>This Month</span>
        </div>

        {/* Math */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '14px', fontWeight: '600', color: 'white' }}>🧮 Math</span>
            <span style={{ fontSize: '14px', fontWeight: '700', color: '#4b9fd8' }}>82%</span>
          </div>
          <div style={{
            width: '100%',
            height: '8px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: '82%',
              height: '100%',
              backgroundColor: '#4b9fd8',
              borderRadius: '4px'
            }}></div>
          </div>
        </div>

        {/* Science */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '14px', fontWeight: '600', color: 'white' }}>🔬 Science</span>
            <span style={{ fontSize: '14px', fontWeight: '700', color: '#28a745' }}>85%</span>
          </div>
          <div style={{
            width: '100%',
            height: '8px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: '85%',
              height: '100%',
              backgroundColor: '#28a745',
              borderRadius: '4px'
            }}></div>
          </div>
        </div>

        {/* Reading */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '14px', fontWeight: '600', color: 'white' }}>📖 Reading</span>
            <span style={{ fontSize: '14px', fontWeight: '700', color: '#ffc107' }}>76%</span>
          </div>
          <div style={{
            width: '100%',
            height: '8px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: '76%',
              height: '100%',
              backgroundColor: '#ffc107',
              borderRadius: '4px'
            }}></div>
          </div>
        </div>

        {/* Language */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '14px', fontWeight: '600', color: 'white' }}>🌐 Language</span>
            <span style={{ fontSize: '14px', fontWeight: '700', color: '#6edbd5' }}>79%</span>
          </div>
          <div style={{
            width: '100%',
            height: '8px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: '79%',
              height: '100%',
              backgroundColor: '#6edbd5',
              borderRadius: '4px'
            }}></div>
          </div>
        </div>

        {/* Literature */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '14px', fontWeight: '600', color: 'white' }}>📚 Literature</span>
            <span style={{ fontSize: '14px', fontWeight: '700', color: '#9b59b6' }}>88%</span>
          </div>
          <div style={{
            width: '100%',
            height: '8px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: '88%',
              height: '100%',
              backgroundColor: '#9b59b6',
              borderRadius: '4px'
            }}></div>
          </div>
        </div>

        {/* History */}
        <div style={{ marginBottom: '0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '14px', fontWeight: '600', color: 'white' }}>🏛️ History</span>
            <span style={{ fontSize: '14px', fontWeight: '700', color: '#ff9a56' }}>72%</span>
          </div>
          <div style={{
            width: '100%',
            height: '8px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: '72%',
              height: '100%',
              backgroundColor: '#ff9a56',
              borderRadius: '4px'
            }}></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
