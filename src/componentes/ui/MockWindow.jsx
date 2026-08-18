import React from 'react';
import './Mocks.css';

const MockWindow = () => {
  return (
    <div className="mock-window">
      {/* Title Bar */}
      <div className="mock-window-header">
        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
        </div>
        <div className="mock-window-url">
          carloslozanodev.com
        </div>
      </div>

      {/* Content Area */}
      <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div className="mock-card">
          <div style={{ background: 'var(--primario)', padding: '12px', borderRadius: '8px', color: 'white', fontSize: '1.2rem' }}>
            🎨
          </div>
          <div>
            <h4 className="mock-text-title">Diseño Premium</h4>
            <p className="mock-text-desc">Interfaces modernas y veloces.</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '15px' }}>
          <div className="mock-card-small">
            <h4 className="mock-text-title-small">Full Stack</h4>
            <p className="mock-text-desc-small">React, Node, SQL.</p>
          </div>
          <div className="mock-card-small">
            <h4 className="mock-text-title-small">Optimizadas</h4>
            <p className="mock-text-desc-small">SEO y conversiones.</p>
          </div>
        </div>

        <div className="mock-terminal">
          <span style={{ color: '#7ee787' }}>$</span> deploy project<br/>
          <span style={{ color: '#8b949e' }}>→ publishing online...</span><br/>
          <span style={{ color: '#ff7b72' }}>✓</span> ready in 0.8s
        </div>
      </div>
    </div>
  );
};

export default MockWindow;
