import React from 'react';

const MockWindow = () => {
  return (
    <div style={{
      background: 'linear-gradient(145deg, #111116 0%, #1a1a24 100%)',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
      overflow: 'hidden',
      width: '100%',
      maxWidth: '500px',
      margin: '0 auto'
    }}>
      {/* Title Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '12px 16px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        background: 'rgba(0, 0, 0, 0.2)'
      }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
        </div>
        <div style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '4px 20px',
          borderRadius: '4px',
          fontSize: '0.75rem',
          color: '#8892b0',
          letterSpacing: '1px'
        }}>
          carloslozanodev.com
        </div>
      </div>

      {/* Content Area */}
      <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          padding: '20px',
          borderRadius: '12px',
          display: 'flex',
          gap: '15px',
          alignItems: 'center'
        }}>
          <div style={{ background: 'var(--primario)', padding: '12px', borderRadius: '8px', color: 'white', fontSize: '1.2rem' }}>
            🎨
          </div>
          <div>
            <h4 style={{ margin: '0 0 5px 0', color: '#fff', fontSize: '1rem' }}>Diseño Premium</h4>
            <p style={{ margin: 0, color: '#8892b0', fontSize: '0.85rem' }}>Interfaces modernas y veloces.</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '15px' }}>
          <div style={{
            flex: 1,
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.04)',
            padding: '15px',
            borderRadius: '12px'
          }}>
            <h4 style={{ margin: '0 0 5px 0', color: '#fff', fontSize: '0.9rem' }}>Full Stack</h4>
            <p style={{ margin: 0, color: '#8892b0', fontSize: '0.75rem' }}>React, Node, SQL.</p>
          </div>
          <div style={{
            flex: 1,
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.04)',
            padding: '15px',
            borderRadius: '12px'
          }}>
            <h4 style={{ margin: '0 0 5px 0', color: '#fff', fontSize: '0.9rem' }}>Optimizadas</h4>
            <p style={{ margin: 0, color: '#8892b0', fontSize: '0.75rem' }}>SEO y conversiones.</p>
          </div>
        </div>

        <div style={{
          background: '#0d1117',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '15px',
          borderRadius: '8px',
          fontFamily: 'monospace',
          fontSize: '0.8rem',
          color: '#c9d1d9',
          marginTop: '10px'
        }}>
          <span style={{ color: '#7ee787' }}>$</span> deploy project<br/>
          <span style={{ color: '#8b949e' }}>→ publishing online...</span><br/>
          <span style={{ color: '#ff7b72' }}>✓</span> ready in 0.8s
        </div>
      </div>
    </div>
  );
};

export default MockWindow;
