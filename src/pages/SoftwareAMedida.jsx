import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaCode, FaServer, FaCogs, FaShieldAlt, FaWhatsapp } from 'react-icons/fa';

const SoftwareAMedida = () => {
  const wsMessage = "Hola Carlos, necesito desarrollar un software a medida para mi empresa. ¿Podemos agendar una reunión?";
  const wsUrl = `https://wa.me/56937540250?text=${encodeURIComponent(wsMessage)}`;

  return (
    <>
      <Helmet>
        <title>Software a Medida | Carlos Lozano</title>
        <meta name="description" content="Desarrollo de software personalizado, automatización de procesos y plataformas escalables para tu negocio." />
        <link rel="canonical" href="https://carloslozanodev.com/software-a-medida" />
      </Helmet>

      <section className="contenedor" style={{ paddingTop: '150px', paddingBottom: '50px' }}>
        <div className="seo-header anim-scroll">
          <h1 className="seo-title">Software a Medida</h1>
          <p className="seo-subtitle">
            Sistemas diseñados exclusivamente para resolver los problemas únicos de tu empresa, automatizar tareas y escalar sin límites técnicos.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          
          {/* Introducción */}
          <article className="anim-scroll">
            <h2 className="titulo" style={{ marginBottom: '20px' }}>No te adaptes al software, que el software se adapte a ti</h2>
            <p className="seo-text-block">
              Cuando los sistemas genéricos o planillas de Excel ya no son suficientes para manejar la operación de tu negocio, es momento de dar el salto al desarrollo a medida. Construyo aplicaciones web (SaaS), intranets y sistemas internos robustos usando las tecnologías más modernas del mercado (React, Node.js, Bases de datos SQL/NoSQL).
            </p>
          </article>

          {/* Soluciones */}
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

          {/* Beneficios */}
          <article className="anim-scroll">
            <h2 className="titulo" style={{ marginBottom: '30px', textAlign: 'center' }}>Ventajas del desarrollo personalizado</h2>
            <div className="bento-grid">
              {[
                'Propiedad intelectual 100% tuya',
                'Escalabilidad sin costos ocultos por usuario',
                'Seguridad y privacidad de datos (AWS / Google Cloud)',
                'Interfaz adaptada a tus procesos exactos',
                'Integración con herramientas que ya usas'
              ].map((item, index) => (
                <div key={index} className="bento-item">
                  <FaShieldAlt className="bento-icon" /> 
                  <span className="bento-text">{item}</span>
                </div>
              ))}
            </div>
          </article>

          {/* Modalidad y Precio */}
          <article className="anim-scroll">
            <div className="seo-highlight-box">
              <h2 className="titulo" style={{ marginBottom: '20px', color: 'var(--shade-9)' }}>Inversión y Modalidad</h2>
              <p className="seo-text-block" style={{ marginBottom: '30px', color: 'var(--shade-8)' }}>
                Los proyectos a medida se evalúan según su complejidad técnica, horas estimadas de desarrollo y requerimientos de infraestructura. Trabajamos bajo metodologías ágiles, entregando avances funcionales cada pocas semanas.
              </p>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--primario)', marginBottom: '10px' }}>
                Desde $800.000 CLP / $900 USD
              </div>
              <p style={{ fontSize: '1rem', color: 'var(--shade-6)' }}>Pago estructurado por hitos de entrega.</p>
            </div>
          </article>

          {/* FAQ */}
          <article className="anim-scroll">
            <h2 className="titulo" style={{ marginBottom: '40px', textAlign: 'center' }}>Preguntas Frecuentes</h2>
            <div className="faq-grid">
              <div className="faq-card">
                <h3 className="faq-title">🔒 ¿Quién es dueño del código?</h3>
                <p className="faq-answer">Una vez finalizado el proyecto y realizado el pago total, se te entrega el repositorio completo. El código y la propiedad intelectual son 100% tuyos.</p>
              </div>
              <div className="faq-card">
                <h3 className="faq-title">🛠️ ¿Ofreces mantenimiento post-lanzamiento?</h3>
                <p className="faq-answer">Sí. Todo desarrollo incluye un periodo de garantía por bugs. Posteriormente, ofrezco planes de mantenimiento mensual para agregar nuevas funcionalidades y mantener servidores.</p>
              </div>
            </div>
          </article>

          {/* CTA */}
          <article className="anim-scroll" style={{ textAlign: 'center', marginTop: '40px', paddingBottom: '40px' }}>
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
