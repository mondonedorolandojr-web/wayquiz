import { useState, useEffect } from 'react';

export default function QuizUploader({ onQuizGenerated, onClose }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  // Cleanup timeout on unmount to prevent memory leak
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'text/plain') {
      if (file.size > 5 * 1024 * 1024) {
        setError('File size must be less than 5MB');
        setSelectedFile(null);
      } else {
        setSelectedFile(file);
        setError(null);
      }
    } else {
      setError('Please select a valid .txt file');
      setSelectedFile(null);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError('Please select a file first');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await fetch('/api/generate-questions', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        const errorText = await response.text().catch(() => 'Unknown error');
        const message = errorText || 'Failed to generate questions';
        throw new Error(`Server error (${response.status}): ${message}`);
      }

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        throw new Error(`Invalid response format from server: ${jsonError.message}`);
      }
      
      if (!data.questions || !Array.isArray(data.questions)) {
        throw new Error('Server returned invalid question data');
      }
      
      setSuccess(true);

      // Call parent callback with generated quiz
      onQuizGenerated({
        id: 'uploaded_' + Date.now(),
        title: selectedFile.name.replace('.txt', ''),
        description: 'Custom quiz from uploaded text',
        icon: '📄',
        questions: data.questions
      });

      // Close modal after 1.5 seconds
      const id = setTimeout(() => onClose(), 1500);
      setTimeoutId(id);
    } catch (err) {
      const networkHint = err.message.includes('Failed to fetch') || err.message.includes('502')
        ? 'Make sure the server is running on port 5000 and your app is started from wayquiz-app.'
        : '';
      setError('Error: ' + err.message + (networkHint ? ' ' + networkHint : ''));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      backdropFilter: 'blur(4px)',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '45px',
        maxWidth: '500px',
        width: '100%',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        textAlign: 'center',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '10px', color: '#141a2a' }}>
          Create Custom Quiz
        </h2>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '30px' }}>
          Upload a .txt file and we'll generate quiz questions automatically!
        </p>

        {!success ? (
          <>
            <div style={{
              border: '2px dashed #63b7b6',
              borderRadius: '12px',
              padding: '40px 30px',
              marginBottom: '25px',
              backgroundColor: '#f0f9f8',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onDragOver={(e) => {
              e.preventDefault();
              e.currentTarget.style.borderColor = '#4a9595';
              e.currentTarget.style.backgroundColor = 'rgba(99, 183, 182, 0.15)';
            }}
            onDragLeave={(e) => {
              e.currentTarget.style.borderColor = '#63b7b6';
              e.currentTarget.style.backgroundColor = '#f0f9f8';
            }}
            onDrop={(e) => {
              e.preventDefault();
              const files = e.dataTransfer.files;
              if (files.length > 0) {
                handleFileChange({ target: { files } });
              }
            }}
            >
              <input
                type="file"
                accept=".txt"
                onChange={handleFileChange}
                style={{
                  display: 'none',
                  width: '100%'
                }}
                id="file-input"
              />
              <label htmlFor="file-input" style={{ cursor: 'pointer', display: 'block' }}>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>📄</div>
                <p style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '600', color: '#141a2a' }}>
                  Click to upload or drag and drop
                </p>
                <p style={{ margin: '0', fontSize: '13px', color: '#999' }}>
                  TXT files up to 5MB
                </p>
              </label>
              {selectedFile && (
                <p style={{ color: '#63b7b6', fontWeight: '700', marginBottom: '0', marginTop: '12px' }}>
                  ✓ Selected: {selectedFile.name}
                </p>
              )}
            </div>

            {error && (
              <div style={{
                backgroundColor: '#fee2e2',
                color: '#991b1b',
                padding: '14px',
                borderRadius: '8px',
                marginBottom: '25px',
                fontSize: '14px',
                border: '1px solid #fecaca',
                fontWeight: '500'
              }}>
                ⚠️ {error}
              </div>
            )}

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button
                onClick={handleUpload}
                disabled={!selectedFile || loading}
                style={{
                  backgroundColor: '#63b7b6',
                  color: 'white',
                  padding: '13px 32px',
                  fontSize: '16px',
                  fontWeight: '600',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: selectedFile && !loading ? 'pointer' : 'not-allowed',
                  opacity: !selectedFile ? 0.6 : 1,
                  transition: 'all 0.3s ease',
                  boxShadow: selectedFile && !loading ? '0 4px 12px rgba(99, 183, 182, 0.3)' : 'none',
                  transform: selectedFile && !loading ? 'scale(1)' : 'scale(0.98)',
                  minWidth: '180px'
                }}
                onMouseEnter={(e) => {
                  if (selectedFile && !loading) {
                    e.currentTarget.style.backgroundColor = '#4a9595';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(99, 183, 182, 0.4)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedFile && !loading) {
                    e.currentTarget.style.backgroundColor = '#63b7b6';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(99, 183, 182, 0.3)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                {loading ? (
                  <span>Generating... ⏳</span>
                ) : (
                  <span>Generate Questions</span>
                )}
              </button>
              <button
                onClick={onClose}
                style={{
                  backgroundColor: 'transparent',
                  color: '#666',
                  padding: '13px 32px',
                  fontSize: '16px',
                  fontWeight: '600',
                  border: '2px solid #ddd',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  minWidth: '120px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#999';
                  e.currentTarget.style.color = '#333';
                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#ddd';
                  e.currentTarget.style.color = '#666';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '30px 0' }}>
            <div style={{ fontSize: '64px', marginBottom: '20px', animation: 'pulse 1s ease-in-out infinite' }}>✅</div>
            <p style={{ fontSize: '18px', fontWeight: '700', color: '#10b981', marginBottom: '10px' }}>
              Quiz generated successfully!
            </p>
            <p style={{ fontSize: '14px', color: '#666', margin: '0' }}>
              Redirecting to your new quiz...
            </p>
          </div>
        )}
      </div>
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}
