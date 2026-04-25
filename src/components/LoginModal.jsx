import { useState } from 'react';
import { X, Mail, Lock, User } from 'lucide-react';

export default function LoginModal({ isOpen, onClose, isLogin, onSwitch, onLoginSuccess, loginError, setLoginError }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors = {};
    
    if (!isLogin && !name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!isLogin && password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/signup';
      const payload = isLogin
        ? { email, password }
        : { name, email, password };

      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        setLoginError(data.error || 'Authentication failed');
        return;
      }

      // Store token in localStorage
      localStorage.setItem('authToken', data.token);

      // Call success callback with user data
      onLoginSuccess({
        ...data.user,
        token: data.token
      });

      resetForm();
    } catch (error) {
      setLoginError(error.message || 'Network error');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setName('');
    setErrors({});
  };

  const handleSwitch = () => {
    resetForm();
    onSwitch();
  };

  return (
    <div style={{ 
      position: 'fixed', 
      inset: 0, 
      backgroundColor: 'rgba(0,0,0,0.5)', 
      backdropFilter: 'blur(4px)', 
      zIndex: 50, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '16px', 
        maxWidth: '420px', 
        width: '100%', 
        padding: '40px', 
        position: 'relative',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        <button 
          onClick={onClose} 
          style={{ 
            position: 'absolute', 
            top: '16px', 
            right: '16px', 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer', 
            color: '#999', 
            fontSize: '24px',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px',
            height: '32px',
            borderRadius: '6px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f3f4f6';
            e.currentTarget.style.color = '#141a2a';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#999';
          }}
        >
          ✕
        </button>
        
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 'bold', 
          textAlign: 'center', 
          marginBottom: '8px', 
          color: '#141a2a' 
        }}>
          {isLogin ? '👋 Welcome Back!' : '✨ Create Account'}
        </h2>
        
        <p style={{
          textAlign: 'center',
          color: '#999',
          fontSize: '14px',
          margin: '8px 0 28px 0'
        }}>
          {isLogin ? 'Login to your account' : 'Create a new account'}
        </p>
        
        {loginError && (
          <div style={{
            backgroundColor: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: '8px',
            padding: '12px',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '14px', color: '#dc2626', margin: 0 }}>
              {loginError}
            </p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {!isLogin && (
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#555', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Full Name</label>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                border: errors.name ? '2px solid #ef4444' : '1px solid #ddd', 
                borderRadius: '8px', 
                padding: '10px 12px',
                backgroundColor: errors.name ? '#fef2f2' : '#f9fafb',
                transition: 'all 0.3s ease'
              }}>
                <User size={18} color="#999" />
                <input
                  type="text"
                  style={{ 
                    flex: 1, 
                    outline: 'none', 
                    marginLeft: '10px', 
                    border: 'none', 
                    fontSize: '14px',
                    backgroundColor: 'transparent',
                    fontWeight: '500'
                  }}
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  required
                />
              </div>
              {errors.name && <p style={{ fontSize: '12px', color: '#ef4444', margin: '6px 0 0 0' }}>{errors.name}</p>}
            </div>
          )}
          
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#555', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email</label>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              border: errors.email ? '2px solid #ef4444' : '1px solid #ddd', 
              borderRadius: '8px', 
              padding: '10px 12px',
              backgroundColor: errors.email ? '#fef2f2' : '#f9fafb',
              transition: 'all 0.3s ease'
            }}>
              <Mail size={18} color="#999" />
              <input
                type="email"
                style={{ 
                  flex: 1, 
                  outline: 'none', 
                  marginLeft: '10px', 
                  border: 'none', 
                  fontSize: '14px',
                  backgroundColor: 'transparent',
                  fontweight: '500'
                }}
                placeholder="you@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors({ ...errors, email: '' });
                }}
                required
              />
            </div>
            {errors.email && <p style={{ fontSize: '12px', color: '#ef4444', margin: '6px 0 0 0' }}>{errors.email}</p>}
          </div>
          
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#555', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Password</label>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              border: errors.password ? '2px solid #ef4444' : '1px solid #ddd', 
              borderRadius: '8px', 
              padding: '10px 12px',
              backgroundColor: errors.password ? '#fef2f2' : '#f9fafb',
              transition: 'all 0.3s ease'
            }}>
              <Lock size={18} color="#999" />
              <input
                type="password"
                style={{ 
                  flex: 1, 
                  outline: 'none', 
                  marginLeft: '10px', 
                  border: 'none', 
                  fontSize: '14px',
                  backgroundColor: 'transparent',
                  fontWeight: '500'
                }}
                placeholder="••••••••"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors({ ...errors, password: '' });
                }}
                required
              />
            </div>
            {errors.password && <p style={{ fontSize: '12px', color: '#ef4444', margin: '6px 0 0 0' }}>{errors.password}</p>}
          </div>
          
          {!isLogin && (
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#555', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Confirm Password</label>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                border: errors.confirmPassword ? '2px solid #ef4444' : '1px solid #ddd', 
                borderRadius: '8px', 
                padding: '10px 12px',
                backgroundColor: errors.confirmPassword ? '#fef2f2' : '#f9fafb',
                transition: 'all 0.3s ease'
              }}>
                <Lock size={18} color="#999" />
                <input
                  type="password"
                  style={{ 
                    flex: 1, 
                    outline: 'none', 
                    marginLeft: '10px', 
                    border: 'none', 
                    fontSize: '14px',
                    backgroundColor: 'transparent',
                    fontWeight: '500'
                  }}
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: '' });
                  }}
                  required
                />
              </div>
              {errors.confirmPassword && <p style={{ fontSize: '12px', color: '#ef4444', margin: '6px 0 0 0' }}>{errors.confirmPassword}</p>}
            </div>
          )}
          
          <button 
            type="submit" 
            disabled={isLoading}
            style={{ 
              backgroundColor: isLoading ? '#a8c0bf' : '#63b7b6', 
              color: 'white', 
              width: '100%', 
              padding: '12px', 
              borderRadius: '8px', 
              fontWeight: '600', 
              border: 'none', 
              cursor: isLoading ? 'not-allowed' : 'pointer', 
              fontSize: '16px',
              transition: 'all 0.3s ease',
              marginTop: '8px',
              boxShadow: '0 4px 12px rgba(99, 183, 182, 0.3)',
              opacity: isLoading ? 0.7 : 1
            }}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.currentTarget.style.backgroundColor = '#4a9595';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(99, 183, 182, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isLoading) {
                e.currentTarget.style.backgroundColor = '#63b7b6';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(99, 183, 182, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }
            }}
          >
            {isLoading ? 'Loading...' : (isLogin ? 'Login' : 'Sign Up')}
          </button>
        </form>
        
        <p style={{ textAlign: 'center', marginTop: '20px', color: '#666', fontSize: '14px' }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            onClick={handleSwitch} 
            style={{ 
              color: '#63b7b6', 
              fontWeight: '600', 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              textDecoration: 'underline',
              fontSize: '14px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#4a9595'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#63b7b6'}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}