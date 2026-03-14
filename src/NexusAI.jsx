export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#070b10',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#00f5d4',
      fontSize: '24px',
      fontFamily: 'sans-serif',
      flexDirection: 'column',
      gap: '16px'
    }}>
      <div style={{fontSize:'48px'}}>✦</div>
      <div style={{
        fontSize:'32px',
        fontWeight:'900',
        background:'linear-gradient(135deg,#00f5d4,#4cc9f0,#c77dff)',
        WebkitBackgroundClip:'text',
        WebkitTextFillColor:'transparent'
      }}>NEXUS AI</div>
      <div style={{fontSize:'14px',color:'rgba(255,255,255,0.4)'}}>
        🚀 الموقع يعمل بنجاح!
      </div>
    </div>
  );
}