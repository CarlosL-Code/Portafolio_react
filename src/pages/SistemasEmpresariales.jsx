import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaBuilding, FaProjectDiagram, FaLayerGroup, FaCheckCircle, FaWhatsapp } from 'react-icons/fa';

const SistemasEmpresariales = () => {
  const wsMessage = "Hola Carlos, busco modernizar los sistemas tecnológicos de mi empresa. ¿Me podrías asesorar?";
  const wsUrl = `https://wa.me/56937540250?text=${encodeURIComponent(wsMessage)}`;

  return (
    <>
      <Helmet>
        <title>Sistemas Empresariales | Carlos Lozano</title>
        <meta name="description" content="Desarrollo de sistemas empresariales, ERP, CRM y plataformas robustas para empresas consolidadas." />
        <link rel="canonical" href="https://carloslozanodev.com/sistemas-empresariales" />
      </Helmet>

      <section className="contenedor" style={{ paddingTop: '150px', paddingBottom: '50px' }}>
        <div className="seo-header anim-scroll">
          <h1 className="seo-title">Sistemas Empresariales Integrales</h1>
          <p className="seo-subtitle">
            Arquitectura de software de nivel empresarial (Enterprise). Escalabilidad, seguridad y alto rendimiento garantizado.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          
          <article className="anim-scroll">
            <h2 className="titulo" style={{ marginBottom: '20px' }}>El núcleo tecnológico de tu empresa</h2>
            <p className="seo-text-block">
              Para empresas que procesan altos volúmenes de datos o tienen operaciones complejas, la infraestructura tecnológica debe ser infalible. Me especializo en la construcción de sistemas corporativos escalables, desde CRMs personalizados hasta plataformas ERP que centralizan toda tu operación.
            </p>
          </article>

          <article className="anim-scroll">
            <h2 className="titulo" style={{ marginBottom: '30px', textAlign: 'center' }}>Capacidades Core</h2>
            <div className="glowing-grid">
              {[
                { icon: <FaBuilding />, title: 'Sistemas ERP / CRM', desc: 'Sistemas robustos de gestión interna con paneles administrativos (Dashboards) y control de roles avanzados.' },
                { icon: <FaProjectDiagram />, title: 'Arquitectura Escalable', desc: 'Desarrollo backend utilizando microservicios o arquitecturas sin servidor (Serverless) listas para el tráfico masivo.' },
                { icon: <FaLayerGroup />, title: 'Migración y Modernización', desc: 'Tomo tu software antiguo (legacy) y lo reescribo utilizando tecnologías web modernas (React/Node).' }
              ].map((item, index) => (
                <div key={index} className="glowing-card">
                  <div className="glowing-icon">{item.icon}</div>
                  <h3 className="glowing-title">{item.title}</h3>
                  <p className="glowing-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="anim-scroll">
            <h2 className="titulo" style={{ marginBottom: '30px', textAlign: 'center' }}>Garantías de Nivel Empresarial</h2>
            <div className="bento-grid">
              {[
                'Arquitectura Cloud (AWS / GCP / Azure)',
                'Seguridad y encriptación de datos sensibles',
                'Integración mediante APIs REST y GraphQL',
                'Documentación técnica completa',
                'Mantenimiento continuo y soporte'
              ].map((item, index) => (
                <div key={index} className="bento-item">
                  <FaCheckCircle className="bento-icon" /> 
                  <span className="bento-text">{item}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="anim-scroll" style={{ textAlign: 'center', marginTop: '40px', paddingBottom: '40px' }}>
            <a 
              href={wsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="boton" 
              style={{ display: 'inline-flex', fontSize: '1.2rem', padding: '16px 36px', borderRadius: '100px' }}
            >
              <FaWhatsapp size={26} style={{ marginRight: '10px' }} /> Agendar consultoría empresarial
            </a>
          </article>

        </div>
      </section>
    </>
  );
};

export default SistemasEmpresariales;
