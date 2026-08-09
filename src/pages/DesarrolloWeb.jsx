import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaLaptopCode, FaMobileAlt, FaSearchDollar, FaRocket, FaCheckCircle, FaWhatsapp, FaChevronRight } from 'react-icons/fa';
import Planes from '../componentes/layout/Planes';

const DesarrolloWeb = ({ currency }) => {
  const wsMessage = "Hola Carlos, encontré tu página de desarrollo web y me gustaría cotizar un sitio para mi negocio. ¿Podemos conversar?";
  const wsUrl = `https://wa.me/56937540250?text=${encodeURIComponent(wsMessage)}`;

  return (
    <>
      <Helmet>
        <title>Desarrollo de Páginas Web para Empresas | Carlos Lozano</title>
        <meta name="description" content="Desarrollo páginas web profesionales para empresas y negocios. Conoce modalidades, proyectos y solicita una cotización directamente por WhatsApp." />
        <link rel="canonical" href="https://carloslozanodev.com/desarrollo-web" />
      </Helmet>

      <section className="contenedor" style={{ paddingTop: '150px', paddingBottom: '50px' }}>
        <div className="seo-header anim-scroll">
          <h1 className="seo-title">Desarrollo de páginas web para empresas</h1>
          <p className="seo-subtitle">
            Diseñamos y desarrollamos sitios web rápidos, adaptables y orientados a generar confianza en tus clientes y aumentar tus ventas.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
          
          {/* Introducción + Imagen Hero */}
          <article className="anim-scroll" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <h2 className="titulo" style={{ marginBottom: '20px', textAlign: 'left' }}>Presencia digital que vende</h2>
              <p className="seo-text-block">
                En la actualidad, una página web no es solo un folleto digital, es tu sucursal principal en internet. Me especializo en desarrollar sitios web corporativos y landing pages que resuelven problemas reales: generar confianza, captar leads y verse impecables en cualquier dispositivo.
              </p>
              <p className="seo-text-block">
                Todas las páginas que construyo incluyen integración directa con WhatsApp para que tus clientes puedan contactarte con un solo clic, formularios funcionales, enlaces a tus redes sociales y configuración básica de SEO on-page desde el primer día.
              </p>
            </div>
            <div>
              <img src="/hero_digital_presence.jpg" alt="Presencia Digital y Desarrollo Web" style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)' }} />
            </div>
          </article>

          {/* Qué tipo de sitios */}
          <article className="anim-scroll">
            <h2 className="titulo" style={{ marginBottom: '40px', textAlign: 'center' }}>¿Qué tipo de sitios desarrollo?</h2>
            <div className="glowing-grid">
              {[
                { icon: <FaLaptopCode />, title: 'Sitios Corporativos', desc: 'Presencia formal e institucional para empresas y Pymes. Proyecta confianza total.' },
                { icon: <FaRocket />, title: 'Landing Pages', desc: 'Páginas enfocadas en alta conversión y venta de un servicio específico. Ideales para Ads.' },
                { icon: <FaMobileAlt />, title: 'Negocios Locales', desc: 'Restaurantes, clínicas, gimnasios y comercios de todo tipo con mapas e info clara.' },
                { icon: <FaSearchDollar />, title: 'Portafolios', desc: 'Para profesionales independientes que buscan destacar en su rubro con autoridad.' }
              ].map((item, index) => (
                <div key={index} className="glowing-card">
                  <div className="glowing-icon">{item.icon}</div>
                  <h3 className="glowing-title">{item.title}</h3>
                  <p className="glowing-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </article>

          {/* Qué incluye (Bento Grid) */}
          <article className="anim-scroll">
            <h2 className="titulo" style={{ marginBottom: '40px', textAlign: 'center' }}>¿Qué incluye tu página web?</h2>
            <div className="bento-grid">
              {[
                'Diseño Responsive (Adaptable a celulares)',
                'Botón flotante de WhatsApp',
                'Formulario de contacto funcional',
                'SEO On-page básico (Estructura y Meta)',
                'Enlaces a redes sociales',
                'Optimización de velocidad',
                'Despliegue y publicación web'
              ].map((item, index) => (
                <div key={index} className="bento-item">
                  <FaCheckCircle className="bento-icon" /> 
                  <span className="bento-text">{item}</span>
                </div>
              ))}
            </div>
          </article>

          {/* Proceso */}
          <article className="anim-scroll" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <img src="/process_illustration.jpg" alt="Proceso de Desarrollo" style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)' }} />
            </div>
            <div>
              <h2 className="titulo" style={{ marginBottom: '40px', textAlign: 'left' }}>Nuestro Proceso de Trabajo</h2>
              <div className="timeline-container">
                {[
                  { title: 'Conversación inicial', desc: 'Entendemos tus objetivos, público y necesidades específicas.' },
                  { title: 'Propuesta de diseño', desc: 'Creamos un boceto visual para asegurar que estamos alineados.' },
                  { title: 'Desarrollo web', desc: 'Programamos el sitio con código limpio y optimizado.' },
                  { title: 'Revisión final', desc: 'Validamos juntos que todo funcione perfectamente en celular y PC.' },
                  { title: 'Publicación', desc: 'Lanzamos tu sitio al mundo con soporte técnico continuo.' }
                ].map((step, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h3 className="timeline-title">0{index + 1}. {step.title}</h3>
                      <p className="timeline-desc">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Planes (Reutilizado) */}
          <article className="anim-scroll">
            <Planes currency={currency} />
          </article>

          {/* FAQ */}
          <article className="anim-scroll">
            <h2 className="titulo" style={{ marginBottom: '40px', textAlign: 'center' }}>Preguntas Frecuentes</h2>
            <div className="faq-grid">
              <div className="faq-card">
                <h3 className="faq-title">⏱️ ¿Cuánto demora el desarrollo?</h3>
                <p className="faq-answer">Dependiendo de la complejidad, una página corporativa o landing page estándar suele estar lista entre 1 a 3 semanas una vez entregada y validada toda la información.</p>
              </div>
              <div className="faq-card">
                <h3 className="faq-title">📱 ¿La página funciona en celulares?</h3>
                <p className="faq-answer">Sí, absolutamente. Todas las páginas que desarrollo están optimizadas primero para dispositivos móviles (Responsive Web Design), garantizando una experiencia perfecta.</p>
              </div>
              <div className="faq-card">
                <h3 className="faq-title">🌐 ¿Puedo usar mi propio dominio?</h3>
                <p className="faq-answer">Por supuesto. Si ya tienes un dominio (.cl, .com, etc.), te ayudo a conectarlo al servidor de tu nueva página web sin ningún costo adicional de configuración.</p>
              </div>
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
              <FaWhatsapp size={26} style={{ marginRight: '10px' }} /> Cotizar mi página web
            </a>
          </article>

        </div>
      </section>
    </>
  );
};

export default DesarrolloWeb;
