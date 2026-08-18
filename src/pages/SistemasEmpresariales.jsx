import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaBuilding, FaProjectDiagram, FaLayerGroup, FaCheckCircle, FaWhatsapp, FaShieldAlt, FaServer, FaLock, FaUsersCog, FaNetworkWired, FaChartPie } from 'react-icons/fa';
import MockServer from '../componentes/ui/MockServer';

const SistemasEmpresariales = () => {
  const wsMessage = "Hola Carlos, busco un sistema de nivel empresarial para gestionar la operación de mi compañía. ¿Podemos conversar?";
  const wsUrl = `https://wa.me/56937540250?text=${encodeURIComponent(wsMessage)}`;

  return (
    <>
      <Helmet>
        <title>Sistemas Empresariales | Carlos Lozano</title>
        <meta name="description" content="Arquitectura, desarrollo e implementación de sistemas empresariales escalables y seguros (ERP, CRM)." />
        <link rel="canonical" href="https://carloslozanodev.com/sistemas-empresariales" />
      </Helmet>

      <section className="contenedor" style={{ paddingTop: '110px', paddingBottom: '50px' }}>
        <div className="seo-header anim-scroll">
          <h1 className="seo-title">Sistemas Empresariales</h1>
          <p className="seo-subtitle">
            Arquitectura de software de alto nivel para empresas que manejan grandes volúmenes de datos y necesitan máxima disponibilidad.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          
          {/* Introducción + MockServer */}
          <article className="anim-scroll" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <h2 className="titulo" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.4' }}>Infraestructura Confiable</h2>
              <p className="seo-text-block">
                Cuando tu empresa llega a un punto donde una caída del sistema significa pérdidas económicas reales, la infraestructura tecnológica debe ser robusta, segura y escalable.
              </p>
              <p className="seo-text-block">
                Me especializo en diseñar e implementar sistemas que soportan el núcleo operativo de las empresas modernas: arquitecturas en la nube, microservicios, protección de datos y alta concurrencia.
              </p>
            </div>
            <div style={{ height: '380px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '100%' }}>
                <MockServer />
              </div>
            </div>
          </article>

          {/* Glowing Grid */}
          <article className="anim-scroll">
            <h2 className="titulo" style={{ marginBottom: '40px', textAlign: 'center' }}>Capacidades Empresariales</h2>
            <div className="glowing-grid">
              {[
                { icon: <FaBuilding />, title: 'ERP y CRM', desc: 'Sistemas unificados para conectar ventas, inventario, logística y finanzas.' },
                { icon: <FaProjectDiagram />, title: 'Arquitectura Cloud', desc: 'Despliegues en AWS o Google Cloud para garantizar 99.9% de uptime.' },
                { icon: <FaLayerGroup />, title: 'Microservicios', desc: 'Sistemas modulares que permiten actualizar componentes sin afectar el todo.' }
              ].map((item, index) => (
                <div key={index} className="glowing-card">
                  <div className="glowing-icon">{item.icon}</div>
                  <h3 className="glowing-title">{item.title}</h3>
                  <p className="glowing-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </article>

          {/* Características */}
          <article className="anim-scroll">
            <h2 className="titulo" style={{ marginBottom: '40px', textAlign: 'center' }}>Estándares de Nivel Enterprise</h2>
            <div className="bento-grid">
              {[
                { text: 'Seguridad y Encriptación Avanzada', icon: <FaLock style={{color: '#f59e0b'}}/> },
                { text: 'Backups Automáticos y Recuperación', icon: <FaServer style={{color: '#42a5f5'}}/> },
                { text: 'Roles y Permisos Granulares (RBAC)', icon: <FaUsersCog style={{color: '#ab47bc'}}/> },
                { text: 'Auditoría y Trazabilidad (Logs)', icon: <FaCheckCircle style={{color: '#26a69a'}}/> },
                { text: 'APIs seguras para integraciones', icon: <FaNetworkWired style={{color: '#ef5350'}}/> },
                { text: 'Dashboards Analíticos Avanzados', icon: <FaChartPie style={{color: '#25D366'}}/> }
              ].map((item, index) => (
                <div key={index} className="bento-item">
                  <div className="bento-icon">{item.icon}</div>
                  <span className="bento-text">{item.text}</span>
                </div>
              ))}
            </div>
          </article>

          {/* CTA */}
          <article className="anim-scroll" style={{ textAlign: 'center', marginTop: '20px', paddingBottom: '40px' }}>
            <a 
              href={wsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="boton" 
              style={{ display: 'inline-flex', fontSize: '1.2rem', padding: '16px 36px', borderRadius: '100px' }}
            >
              <FaWhatsapp size={26} style={{ marginRight: '10px' }} /> Consultoría Tecnológica
            </a>
          </article>

        </div>
      </section>
    </>
  );
};

export default SistemasEmpresariales;
