import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaCogs, FaChartLine, FaDatabase, FaUsers, FaCheckCircle, FaWhatsapp, FaChevronRight } from 'react-icons/fa';

const SoftwareAMedida = () => {
  const wsMessage = "Hola Carlos, vi tu servicio de software a medida y me gustaría contarte una idea para mi empresa. ¿Podemos revisar el proyecto?";
  const wsUrl = `https://wa.me/56937540250?text=${encodeURIComponent(wsMessage)}`;

  return (
    <>
      <Helmet>
        <title>Desarrollo de Software a Medida | Carlos Lozano</title>
        <meta name="description" content="Desarrollo software a medida y aplicaciones web para digitalizar procesos empresariales. Solicita una evaluación de tu proyecto." />
        <link rel="canonical" href="https://carloslozanodev.com/software-a-medida" />
      </Helmet>

      <section className="contenedor" style={{ paddingTop: '150px', paddingBottom: '50px' }}>
        <div className="seo-header anim-scroll">
          <h1 className="seo-title">Desarrollo de software a medida para empresas</h1>
          <p className="seo-subtitle">
            Construyo plataformas y aplicaciones web personalizadas que se adaptan exactamente a los flujos y necesidades únicas de tu negocio.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          
          {/* Introducción */}
          <article className="anim-scroll">
            <h2 className="titulo" style={{ marginBottom: '20px' }}>¿Qué es un software a medida?</h2>
            <p className="seo-text-block">
              A diferencia de una página web tradicional (que busca informar o vender) o un programa genérico de suscripción, un software a medida es una solución digital diseñada y construida exclusivamente para resolver los problemas específicos de tu empresa. Es un traje a la medida que crece y evoluciona junto con tu negocio, sin obligarte a adaptar tus procesos a herramientas rígidas.
            </p>
          </article>

          {/* Cuándo tiene sentido */}
          <article className="anim-scroll">
            <h2 className="titulo" style={{ marginBottom: '30px', textAlign: 'center' }}>¿Cuándo tiene sentido desarrollar uno?</h2>
            <ul className="seo-list">
              {[
                'Realizas demasiados procesos manuales',
                'Dependes de hojas de Excel difíciles de mantener',
                'La información vital está dispersa en varios lugares',
                'Pierdes tiempo en tareas repetitivas',
                'Necesitas centralizar datos en tiempo real',
                'Sientes falta de control en tus operaciones'
              ].map((item, index) => (
                <li key={index} className="seo-list-item">
                  <FaCheckCircle className="seo-list-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Soluciones posibles */}
          <article className="anim-scroll">
            <h2 className="titulo" style={{ marginBottom: '30px', textAlign: 'center' }}>Soluciones que puedo construir</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
              {[
                { icon: <FaDatabase />, title: 'Plataformas Internas', desc: 'Sistemas a medida para que tu equipo trabaje de forma unificada y eficiente.' },
                { icon: <FaChartLine />, title: 'Paneles Administrativos', desc: 'Dashboards con métricas en tiempo real y control absoluto de datos.' },
                { icon: <FaUsers />, title: 'Gestión CRM', desc: 'Control avanzado de seguimientos, historiales de ventas y atención al cliente.' },
                { icon: <FaCogs />, title: 'Automatizaciones', desc: 'Procesamiento automático de documentos, alertas y envíos de reportes.' }
              ].map((item, index) => (
                <div key={index} className="seo-card">
                  <div className="seo-card-icon">{item.icon}</div>
                  <h3 className="seo-card-title">{item.title}</h3>
                  <p className="seo-card-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </article>

          {/* Precios */}
          <article className="anim-scroll">
            <div className="seo-highlight-box">
              <h2 className="titulo" style={{ marginBottom: '20px' }}>Precios y Mantención</h2>
              <p style={{ fontSize: '1.4rem', color: 'var(--shade-8)', marginBottom: '15px', fontWeight: '700' }} className="dark:text-white">
                Los sistemas a medida comienzan <span style={{ color: 'var(--primario)' }}>desde $300.000 CLP</span>.
              </p>
              <p className="seo-text-block" style={{ maxWidth: '700px', margin: '0 auto 25px auto' }}>
                El valor final depende directamente de la cantidad de módulos, roles de usuario, integraciones de terceros, complejidad de la base de datos y automatizaciones requeridas por tu modelo de negocio.
              </p>
              <p style={{ color: 'var(--shade-6)', fontSize: '1.05rem' }}>
                Mantención técnica post-garantía: <strong>Desde $25.000 CLP / mes</strong>.
              </p>
            </div>
          </article>

          {/* Cómo trabajo */}
          <article className="anim-scroll">
            <h2 className="titulo" style={{ marginBottom: '40px', textAlign: 'center' }}>Metodología de Trabajo</h2>
            <div className="process-steps">
              {['Análisis y Requerimientos', 'Diseño y Arquitectura', 'Desarrollo Programático', 'Pruebas QA', 'Implementación'].map((step, index) => (
                <React.Fragment key={index}>
                  <div className="process-step">
                    {index + 1}. {step}
                  </div>
                  {index < 4 && <FaChevronRight style={{ color: 'var(--shade-4)', alignSelf: 'center' }} className="d-none d-md-block" />}
                </React.Fragment>
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
              <FaWhatsapp size={26} style={{ marginRight: '10px' }} /> Cotizar software a medida
            </a>
          </article>

        </div>
      </section>
    </>
  );
};

export default SoftwareAMedida;
