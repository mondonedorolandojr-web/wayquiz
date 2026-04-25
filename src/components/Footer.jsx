export default function Footer() {
  return (
    <footer className="app-footer" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div>
        <h3 style={{ marginBottom: '12px', borderBottom: '3px solid #111', paddingBottom: '6px', fontWeight: '700', fontSize: '18px' }}>Footer</h3>
        <p style={{ margin: '8px 0', fontSize: '14px', fontWeight: '500' }}>🌐 wayquizz.com</p>
        <p style={{ margin: '8px 0', fontSize: '14px', fontWeight: '500' }}>🌐 wayquizzofficial.com</p>
      </div>

      <div>
        <h3 style={{ marginBottom: '12px', borderBottom: '3px solid #111', paddingBottom: '6px', fontWeight: '700', fontSize: '18px' }}>Contact</h3>
        <p style={{ margin: '8px 0', fontSize: '14px', fontWeight: '500' }}>📧 contactwayquizz@gmail.com</p>
        <p style={{ margin: '8px 0', fontSize: '14px', fontWeight: '500' }}>📞 +1 (555) 123-4567</p>
      </div>

      <div>
        <h3 style={{ marginBottom: '12px', borderBottom: '3px solid #111', paddingBottom: '6px', fontWeight: '700', fontSize: '18px' }}>Follow Us</h3>
        <p style={{ margin: '8px 0', fontSize: '14px', fontWeight: '500', cursor: 'pointer', transition: 'all 0.3s ease' }}>👍 Facebook</p>
        <p style={{ margin: '8px 0', fontSize: '14px', fontWeight: '500', cursor: 'pointer', transition: 'all 0.3s ease' }}>📸 Instagram</p>
        <p style={{ margin: '8px 0', fontSize: '14px', fontWeight: '500', cursor: 'pointer', transition: 'all 0.3s ease' }}> 𝕏 Twitter</p>
      </div>
    </footer>
  );
}
