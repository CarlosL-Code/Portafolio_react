import React, { useState, useEffect } from 'react';
import { FaDatabase, FaServer, FaLock, FaNetworkWired } from 'react-icons/fa';

const MockServer = () => {
  const [logs, setLogs] = useState([
    "[10:24:01] System boot sequence initiated...",
    "[10:24:03] Establishing secure connection..."
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      const messages = [
        "[INFO] Database synced successfully.",
        "[SEC] Firewall rules updated.",
        "[NET] Ping latency: 12ms",
        "[SYS] Allocated 2048MB RAM for worker pool.",
        "[OK] All services running optimally."
      ];
      setLogs(prev => {
        const newLogs = [...prev, messages[Math.floor(Math.random() * messages.length)]];
        if (newLogs.length > 5) newLogs.shift();
        return newLogs;
      });
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      background: 'linear-gradient(145deg, #020617 0%, #0f172a 100%)',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
      overflow: 'hidden',
      width: '100%',
      maxWidth: '500px',
      margin: '0 auto',
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '12px 16px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        background: 'rgba(0, 0, 0, 0.4)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FaServer style={{ color: '#E4E4E7' }} />
          <span style={{ color: '#E4E4E7', fontSize: '0.8rem', fontWeight: 600 }}>ENTERPRISE_NODE_01</span>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '5px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34d399', boxShadow: '0 0 10px #34d399' }}></div>
        </div>
      </div>

      {/* Grid Content */}
      <div style={{ padding: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        
        {/* Node Status */}
        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.03)', padding: '15px', borderRadius: '8px', gridColumn: '1 / -1' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ color: '#94A3B8', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px' }}><FaDatabase /> Database Cluster</span>
            <span style={{ color: '#34d399', fontSize: '0.75rem' }}>99.99% Uptime</span>
          </div>
          <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: '78%', height: '100%', background: 'linear-gradient(90deg, #34d399, #10b981)' }}></div>
          </div>
        </div>

        {/* Security */}
        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.03)', padding: '15px', borderRadius: '8px' }}>
           <FaLock style={{ color: '#f59e0b', fontSize: '1.2rem', marginBottom: '8px' }} />
           <div style={{ color: '#F8FAFC', fontSize: '0.9rem', fontWeight: 600 }}>Encriptación</div>
           <div style={{ color: '#94A3B8', fontSize: '0.7rem' }}>AES-256 Activo</div>
        </div>

        {/* Network */}
        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.03)', padding: '15px', borderRadius: '8px' }}>
           <FaNetworkWired style={{ color: '#3b82f6', fontSize: '1.2rem', marginBottom: '8px' }} />
           <div style={{ color: '#F8FAFC', fontSize: '0.9rem', fontWeight: 600 }}>API Gateway</div>
           <div style={{ color: '#94A3B8', fontSize: '0.7rem' }}>2.4k req/sec</div>
        </div>

        {/* Terminal Logs */}
        <div style={{ 
            gridColumn: '1 / -1', 
            background: '#0B141A', 
            borderRadius: '6px', 
            padding: '12px', 
            fontFamily: 'monospace', 
            fontSize: '0.7rem', 
            color: '#10b981',
            minHeight: '90px',
            border: '1px solid rgba(0,0,0,0.5)',
            boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.5)'
        }}>
          {logs.map((log, i) => (
             <div key={i} style={{ marginBottom: '4px' }}>{log}</div>
          ))}
          <div style={{ display: 'inline-block', width: '6px', height: '12px', background: '#10b981', animation: 'blink 1s step-end infinite' }}></div>
        </div>

      </div>
      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </div>
  );
};

export default MockServer;
