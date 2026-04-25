import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ user, onLogout, onLoginClick, onSignupClick }) {
  const location = useLocation();

  return (
    <nav style={{ backgroundColor: '#141a2a', padding: '15px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      {/* Logo */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <img src="/logo.jpg" alt="Logo" style={{ height: '45px', borderRadius: '50%', background: 'white', padding: '4px' }} />
        <span style={{ fontSize: '24px', fontWeight: '700', color: '#6edbd5' }}>WayQuizz</span>
      </Link>

      {/* Nav Links */}
      <ul style={{ listStyle: 'none', display: 'flex', gap: '25px', margin: 0, padding: 0 }}>
        <li>
          <Link to="/" style={{
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '500',
            padding: '8px 14px',
            borderRadius: '6px',
            backgroundColor: location.pathname === '/' ? '#f2e9b8' : 'transparent',
            color: location.pathname === '/' ? '#141a2a' : 'white',
            transition: 'all 0.4s ease',
            border: location.pathname === '/' ? '2px solid #f2e9b8' : '2px solid transparent',
            backgroundImage: location.pathname !== '/' ? 'linear-gradient(90deg, #f2e9b8 0%, #f2e9b8 0%, transparent 0%)' : 'none',
            backgroundSize: location.pathname !== '/' ? '0% 100%' : '100% 100%',
            backgroundPosition: location.pathname !== '/' ? 'left' : 'left',
            backgroundRepeat: 'no-repeat'
          }}
          onMouseEnter={(e) => {
            if (location.pathname !== '/') {
              e.currentTarget.style.backgroundImage = 'linear-gradient(90deg, rgba(242, 233, 184, 0.2) 0%, rgba(242, 233, 184, 0.2) 100%, transparent 100%)';
              e.currentTarget.style.backgroundSize = '100% 100%';
              e.currentTarget.style.color = '#f2e9b8';
            }
          }}
          onMouseLeave={(e) => {
            if (location.pathname !== '/') {
              e.currentTarget.style.backgroundImage = 'linear-gradient(90deg, #f2e9b8 0%, #f2e9b8 0%, transparent 0%)';
              e.currentTarget.style.backgroundSize = '0% 100%';
              e.currentTarget.style.color = 'white';
            }
          }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="/quiz" style={{
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '500',
            padding: '8px 14px',
            borderRadius: '6px',
            backgroundColor: location.pathname === '/quiz' ? '#f2e9b8' : 'transparent',
            color: location.pathname === '/quiz' ? '#141a2a' : 'white',
            transition: 'all 0.4s ease',
            border: location.pathname === '/quiz' ? '2px solid #f2e9b8' : '2px solid transparent',
            backgroundImage: 'linear-gradient(90deg, rgba(242, 233, 184, 0.2) 0%, rgba(242, 233, 184, 0.2) 0%, transparent 0%)',
            backgroundSize: '0% 100%',
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat'
          }}
          onMouseEnter={(e) => {
            if (location.pathname !== '/quiz') {
              e.currentTarget.style.backgroundImage = 'linear-gradient(90deg, rgba(242, 233, 184, 0.2) 0%, rgba(242, 233, 184, 0.2) 100%, transparent 100%)';
              e.currentTarget.style.backgroundSize = '100% 100%';
              e.currentTarget.style.color = '#f2e9b8';
            }
          }}
          onMouseLeave={(e) => {
            if (location.pathname !== '/quiz') {
              e.currentTarget.style.backgroundImage = 'linear-gradient(90deg, rgba(242, 233, 184, 0.2) 0%, rgba(242, 233, 184, 0.2) 0%, transparent 0%)';
              e.currentTarget.style.backgroundSize = '0% 100%';
              e.currentTarget.style.color = 'white';
            }
          }}
          >
            Quizzes
          </Link>
        </li>
        <li>
          <Link to="/about" style={{
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '500',
            padding: '8px 14px',
            borderRadius: '6px',
            backgroundColor: location.pathname === '/about' ? '#f2e9b8' : 'transparent',
            color: location.pathname === '/about' ? '#141a2a' : 'white',
            transition: 'all 0.4s ease',
            border: location.pathname === '/about' ? '2px solid #f2e9b8' : '2px solid transparent',
            backgroundImage: 'linear-gradient(90deg, rgba(242, 233, 184, 0.2) 0%, rgba(242, 233, 184, 0.2) 0%, transparent 0%)',
            backgroundSize: '0% 100%',
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat'
          }}
          onMouseEnter={(e) => {
            if (location.pathname !== '/about') {
              e.currentTarget.style.backgroundImage = 'linear-gradient(90deg, rgba(242, 233, 184, 0.2) 0%, rgba(242, 233, 184, 0.2) 100%, transparent 100%)';
              e.currentTarget.style.backgroundSize = '100% 100%';
              e.currentTarget.style.color = '#f2e9b8';
            }
          }}
          onMouseLeave={(e) => {
            if (location.pathname !== '/about') {
              e.currentTarget.style.backgroundImage = 'linear-gradient(90deg, rgba(242, 233, 184, 0.2) 0%, rgba(242, 233, 184, 0.2) 0%, transparent 0%)';
              e.currentTarget.style.backgroundSize = '0% 100%';
              e.currentTarget.style.color = 'white';
            }
          }}
          >
            About
          </Link>
        </li>
        <li>
          <Link to="/progress" style={{
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '500',
            padding: '8px 14px',
            borderRadius: '6px',
            backgroundColor: location.pathname === '/progress' ? '#f2e9b8' : 'transparent',
            color: location.pathname === '/progress' ? '#141a2a' : 'white',
            transition: 'all 0.4s ease',
            border: location.pathname === '/progress' ? '2px solid #f2e9b8' : '2px solid transparent',
            backgroundImage: 'linear-gradient(90deg, rgba(242, 233, 184, 0.2) 0%, rgba(242, 233, 184, 0.2) 0%, transparent 0%)',
            backgroundSize: '0% 100%',
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat'
          }}
          onMouseEnter={(e) => {
            if (location.pathname !== '/progress') {
              e.currentTarget.style.backgroundImage = 'linear-gradient(90deg, rgba(242, 233, 184, 0.2) 0%, rgba(242, 233, 184, 0.2) 100%, transparent 100%)';
              e.currentTarget.style.backgroundSize = '100% 100%';
              e.currentTarget.style.color = '#f2e9b8';
            }
          }}
          onMouseLeave={(e) => {
            if (location.pathname !== '/progress') {
              e.currentTarget.style.backgroundImage = 'linear-gradient(90deg, rgba(242, 233, 184, 0.2) 0%, rgba(242, 233, 184, 0.2) 0%, transparent 0%)';
              e.currentTarget.style.backgroundSize = '0% 100%';
              e.currentTarget.style.color = 'white';
            }
          }}
          >
            Progress
          </Link>
        </li>
      </ul>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        {user ? (
          <>
            <div style={{
              color: '#6edbd5',
              fontSize: '14px',
              fontWeight: '500',
              padding: '8px 16px',
              borderRadius: '6px',
              backgroundColor: 'rgba(110, 219, 213, 0.1)',
              border: '1px solid #6edbd5'
            }}>
              Welcome, <span style={{ fontWeight: '600' }}>{user.name}</span>!
            </div>
            <button
              onClick={onLogout}
              style={{
                backgroundColor: '#ff6b6b',
                color: 'white',
                border: 'none',
                fontSize: '14px',
                fontWeight: '600',
                padding: '10px 20px',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#ff5252'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#ff6b6b'}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={onLoginClick}
              style={{
                backgroundColor: '#6edbd5',
                color: '#141a2a',
                border: 'none',
                fontSize: '14px',
                fontWeight: '600',
                padding: '10px 20px',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#5fc5c0'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#6edbd5'}
            >
              Login
            </button>
            <button
              onClick={onSignupClick}
              style={{
                backgroundColor: '#f2e9b8',
                color: '#141a2a',
                border: 'none',
                fontSize: '14px',
                fontWeight: '600',
                padding: '10px 20px',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#e5d699'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#f2e9b8'}
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </nav>
  );
}