import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaCode, FaServer, FaCogs, FaCheckCircle, FaWhatsapp, FaShieldAlt, FaRocket, FaDatabase, FaMobileAlt, FaChartLine } from 'react-icons/fa';
import MockDashboard from '../componentes/ui/MockDashboard';

const SoftwareAMedida = () => {
  const wsMessage = "Hola Carlos, necesito desarrollar un software a medida para mi empresa. ¿Podemos agendar una reunión?";
  const wsUrl = `https://wa.me/56937540250?text=${encodeURIComponent(wsMessage)}`;

  return (
    <>
      <Helmet>
        <title>Software a Medida | Carlos Lozano</title>
        <meta name="description" content="Desarrollo de software a medida para automatizar y optimizar los procesos de tu empresa." />
        <link rel="canonical" href="https://carloslozanodev.com/software-a-medida" />
      </Helmet>

      <section className="contenedor" style={{ paddingTop: '110px', paddingBottom: '50px' }}>
        <div className="seo-header anim-scroll">
          <h1 className="seo-title">Desarrollo de Software a Medida</h1>
          <p className="seo-subtitle">
            Automatizamos tus procesos más complejos con herramientas digitales creadas exclusivamente para las reglas de tu negocio.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
          
          {/* Introducción + Imagen Hero */}
          <article className="anim-scroll" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <h2 className="titulo" style={{ marginBottom: '20px', textAlign: 'left' }}>Tecnología que se adapta a ti</h2>
              <p className="seo-text-block">
                No adaptes tu empresa a un software empaquetado. Nosotros desarrollamos plataformas que se moldean exactamente a cómo funciona tu equipo.
              </p>
              <p className="seo-text-block">
                Desde sistemas de inventario, CRMs personalizados, hasta plataformas de gestión de recursos humanos. Si tu negocio lo necesita, lo podemos construir con las tecnologías más modernas y seguras.
              </p>
            </div>
            <div>
              <MockDashboard />
            </div>
          </article>

          {/* Qué podemos construir */}
          <article className="anim-scroll">
            <h2 className="titulo" style={{ marginBottom: '30px', textAlign: 'center' }}>¿Qué podemos construir?</h2>
            <div className="glowing-grid">
              {[
                { icon: <FaCode />, title: 'Plataformas Web (SaaS)', desc: 'Convierte tu idea de negocio en un producto digital real y escalable.' },
                { icon: <FaServer />, title: 'APIs e Integraciones', desc: 'Conectamos tus sistemas actuales (Facturación, ERP, CRM) para que hablen entre sí.' },
                { icon: <FaCogs />, title: 'Automatización Interna', desc: 'Sistemas para eliminar el trabajo manual, reducir errores y ahorrar cientos de horas.' }
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
            <h2 className="titulo" style={{ marginBottom: '40px', textAlign: 'center' }}>Beneficios Clave</h2>
            <div className="bento-grid">
              {[
                { text: 'Escalabilidad sin límites ni licencias por usuario', icon: <FaRocket style={{color: '#ef5350'}}/> },
                { text: 'Propiedad total del código fuente', icon: <FaCode style={{color: '#42a5f5'}}/> },
                { text: 'Integración con tus sistemas actuales (API)', icon: <FaCogs style={{color: '#ab47bc'}}/> },
                { text: 'Alta seguridad y control de accesos', icon: <FaShieldAlt style={{color: '#26a69a'}}/> },
                { text: 'Bases de datos optimizadas', icon: <FaDatabase style={{color: '#ffa726'}}/> },
                { text: 'Métricas y reportes en tiempo real', icon: <FaChartLine style={{color: '#25D366'}}/> }
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
              <FaWhatsapp size={26} style={{ marginRight: '10px' }} /> Agendar reunión técnica
            </a>
          </article>

        </div>
      </section>
    </>
  );
};

export default SoftwareAMedida;
