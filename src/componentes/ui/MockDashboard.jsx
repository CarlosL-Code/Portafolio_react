import React from 'react';
import { FaChartBar, FaUsers, FaServer, FaCogs } from 'react-icons/fa';

const MockDashboard = () => {
  return (
    <div style={{
      background: 'linear-gradient(145deg, #0f172a 0%, #1e293b 100%)',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
      overflow: 'hidden',
      width: '100%',
      maxWidth: '500px',
      margin: '0 auto',
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Sidebar + Main Content Layout */}
      <div style={{ display: 'flex', height: '300px' }}>
        
        {/* Sidebar */}
        <div style={{ 
          width: '70px', 
          background: 'rgba(0,0,0,0.2)', 
          borderRight: '1px solid rgba(255,255,255,0.05)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px 0',
          gap: '25px'
        }}>
          <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'var(--primario)' }}></div>
          <FaChartBar style={{ color: '#E4E4E7', fontSize: '20px', opacity: 0.8 }} />
          <FaUsers style={{ color: '#E4E4E7', fontSize: '20px', opacity: 0.4 }} />
          <FaServer style={{ color: '#E4E4E7', fontSize: '20px', opacity: 0.4 }} />
          <FaCogs style={{ color: '#E4E4E7', fontSize: '20px', opacity: 0.4, marginTop: 'auto' }} />
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ margin: 0, color: '#F8FAFC', fontSize: '1.1rem' }}>Panel Administrativo</h4>
            <div style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600 }}>
              SISTEMA ONLINE
            </div>
          </div>

          {/* Stats Row */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ flex: 1, background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.02)' }}>
              <span style={{ color: '#94A3B8', fontSize: '0.75rem' }}>Usuarios Activos</span>
              <div style={{ color: '#F8FAFC', fontSize: '1.4rem', fontWeight: 700, marginTop: '5px' }}>1,248</div>
            </div>
            <div style={{ flex: 1, background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.02)' }}>
              <span style={{ color: '#94A3B8', fontSize: '0.75rem' }}>Procesos</span>
              <div style={{ color: '#F8FAFC', fontSize: '1.4rem', fontWeight: 700, marginTop: '5px' }}>Automático</div>
            </div>
          </div>

          {/* Chart Mock */}
          <div style={{ flex: 1, background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.02)', padding: '15px', display: 'flex', alignItems: 'flex-end', gap: '8px', justifyContent: 'space-between' }}>
            <div style={{ width: '15%', height: '40%', background: 'linear-gradient(to top, rgba(216,58,58,0.2), rgba(216,58,58,0.8))', borderRadius: '4px 4px 0 0' }}></div>
            <div style={{ width: '15%', height: '60%', background: 'linear-gradient(to top, rgba(216,58,58,0.2), rgba(216,58,58,0.8))', borderRadius: '4px 4px 0 0' }}></div>
            <div style={{ width: '15%', height: '30%', background: 'linear-gradient(to top, rgba(216,58,58,0.2), rgba(216,58,58,0.8))', borderRadius: '4px 4px 0 0' }}></div>
            <div style={{ width: '15%', height: '80%', background: 'linear-gradient(to top, rgba(216,58,58,0.2), rgba(216,58,58,0.8))', borderRadius: '4px 4px 0 0' }}></div>
            <div style={{ width: '15%', height: '100%', background: 'linear-gradient(to top, rgba(216,58,58,0.2), var(--primario))', borderRadius: '4px 4px 0 0', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', background: '#fff', color: '#000', fontSize: '0.6rem', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>+24%</div>
            </div>
            <div style={{ width: '15%', height: '70%', background: 'linear-gradient(to top, rgba(216,58,58,0.2), rgba(216,58,58,0.8))', borderRadius: '4px 4px 0 0' }}></div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MockDashboard;
