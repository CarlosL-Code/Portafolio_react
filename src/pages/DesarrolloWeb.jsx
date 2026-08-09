import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaLaptopCode, FaMobileAlt, FaSearchDollar, FaRocket, FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
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
        <div className="encabezado" style={{ marginBottom: '60px' }}>
          <h1 className="titulo">Desarrollo de páginas web profesionales para empresas y negocios</h1>
          <p className="subtitulo">
            Diseñamos y desarrollamos sitios web rápidos, adaptables y orientados a generar confianza en tus clientes.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {/* Introducción */}
          <article>
            <h2 style={{ marginBottom: '20px', fontSize: '1.8rem' }}>Presencia digital que vende</h2>
            <p style={{ lineHeight: '1.8', color: 'var(--shade-7)', fontSize: '1.1rem' }}>
              En la actualidad, una página web no es solo un folleto digital, es tu sucursal principal en internet. Me especializo en desarrollar sitios web corporativos y landing pages que resuelven problemas reales: generar confianza, captar leads y verse impecables en cualquier dispositivo (celulares, tablets y computadoras).
            </p>
            <p style={{ lineHeight: '1.8', color: 'var(--shade-7)', fontSize: '1.1rem', marginTop: '15px' }}>
              Todas las páginas que construyo incluyen integración directa con WhatsApp para que tus clientes puedan contactarte con un solo clic, formularios funcionales, enlaces a tus redes sociales y configuración básica de SEO on-page desde el primer día.
            </p>
          </article>

          {/* Qué tipo de sitios */}
          <article>
            <h2 style={{ marginBottom: '30px', fontSize: '1.8rem', textAlign: 'center' }}>¿Qué tipo de sitios desarrollo?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
              {[
                { icon: <FaLaptopCode />, title: 'Sitios Corporativos', desc: 'Presencia formal e institucional para empresas.' },
                { icon: <FaRocket />, title: 'Landing Pages', desc: 'Páginas enfocadas en conversión y venta de un servicio específico.' },
                { icon: <FaMobileAlt />, title: 'Negocios Locales', desc: 'Restaurantes, gimnasios, clínicas y comercios.' },
                { icon: <FaSearchDollar />, title: 'Portafolios', desc: 'Para profesionales independientes que buscan destacar.' }
              ].map((item, index) => (
                <div key={index} style={{ background: 'var(--shade-2)', padding: '30px', borderRadius: '15px', textAlign: 'center' }} className="dark:bg-shade-9">
                  <div style={{ fontSize: '30px', color: 'var(--primario)', marginBottom: '15px' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ color: 'var(--shade-6)', fontSize: '0.95rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </article>

          {/* Qué incluye */}
          <article>
            <h2 style={{ marginBottom: '30px', fontSize: '1.8rem' }}>¿Qué incluye tu página web?</h2>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', listStyle: 'none', padding: 0 }}>
              {[
                'Diseño Responsive (Adaptable a celulares)',
                'Botón flotante de WhatsApp',
                'Formulario de contacto funcional',
                'SEO On-page básico (Estructura y Metadata)',
                'Enlaces a redes sociales',
                'Optimización de velocidad (Performance)',
                'Despliegue y publicación web'
              ].map((item, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.05rem', color: 'var(--shade-7)' }}>
                  <FaCheckCircle color="var(--primario)" /> {item}
                </li>
              ))}
            </ul>
          </article>

          {/* Proceso */}
          <article>
            <h2 style={{ marginBottom: '30px', fontSize: '1.8rem' }}>Proceso de Trabajo</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
              {['1. Conversación y Requerimientos', '2. Propuesta', '3. Desarrollo', '4. Revisión', '5. Publicación y Soporte'].map((step, index) => (
                <div key={index} style={{ background: 'var(--shade-2)', padding: '15px 25px', borderRadius: '30px', fontWeight: '500' }}>
                  {step}
                </div>
              ))}
            </div>
          </article>

          {/* Planes (Reutilizado) */}
          <article>
            <h2 style={{ marginBottom: '10px', fontSize: '1.8rem', textAlign: 'center' }}>Modalidades y Precios</h2>
            <p style={{ textAlign: 'center', color: 'var(--shade-6)', marginBottom: '40px' }}>
              Puedes elegir un pago único o una cómoda modalidad de arriendo mensual.
            </p>
            <Planes currency={currency} />
          </article>

          {/* FAQ */}
          <article>
            <h2 style={{ marginBottom: '30px', fontSize: '1.8rem' }}>Preguntas Frecuentes</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>¿Cuánto demora el desarrollo?</h3>
                <p style={{ color: 'var(--shade-6)' }}>Dependiendo de la complejidad, una página corporativa o landing page puede estar lista entre 1 a 3 semanas una vez entregada la información.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>¿La página funciona en celulares?</h3>
                <p style={{ color: 'var(--shade-6)' }}>Sí, absolutamente todas las páginas que desarrollo están optimizadas primero para dispositivos móviles (Responsive Web Design).</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>¿Puedo usar mi propio dominio?</h3>
                <p style={{ color: 'var(--shade-6)' }}>Sí, te ayudo a conectar tu dominio personalizado (ej. tuempresa.com) al servidor de tu página web.</p>
              </div>
            </div>
          </article>

          {/* CTA */}
          <article style={{ textAlign: 'center', marginTop: '40px' }}>
            <a 
              href={wsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="boton" 
              style={{ display: 'inline-flex', fontSize: '1.2rem', padding: '15px 30px' }}
            >
              <FaWhatsapp size={24} /> Cotizar mi página web
            </a>
          </article>

        </div>
      </section>
    </>
  );
};

export default DesarrolloWeb;
