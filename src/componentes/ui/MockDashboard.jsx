import React from 'react';
import { FaChartBar, FaUsers, FaServer, FaCogs } from 'react-icons/fa';
import './Mocks.css';

const MockDashboard = () => {
  return (
    <div className="mock-dashboard">
      {/* Sidebar + Main Content Layout */}
      <div style={{ display: 'flex', height: '300px' }}>
        
        {/* Sidebar */}
        <div className="mock-dash-sidebar">
          <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'var(--primario)' }}></div>
          <FaChartBar className="mock-dash-icon opacity-80" />
          <FaUsers className="mock-dash-icon opacity-40" />
          <FaServer className="mock-dash-icon opacity-40" />
          <FaCogs className="mock-dash-icon opacity-40" style={{ marginTop: 'auto' }} />
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 className="mock-dash-title">Panel Administrativo</h4>
            <div style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600 }}>
              SISTEMA ONLINE
            </div>
          </div>

          {/* Stats Row */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <div className="mock-dash-stat-box">
              <span className="mock-dash-stat-label">Usuarios Activos</span>
              <div className="mock-dash-stat-value">1,248</div>
            </div>
            <div className="mock-dash-stat-box">
              <span className="mock-dash-stat-label">Procesos</span>
              <div className="mock-dash-stat-value">Automático</div>
            </div>
          </div>

          {/* Chart Mock */}
          <div className="mock-dash-chart">
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
