import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaCogs, FaChartLine, FaDatabase, FaUsers, FaCheckCircle, FaWhatsapp } from 'react-icons/fa';

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
        <div className="encabezado" style={{ marginBottom: '60px' }}>
          <h1 className="titulo">Desarrollo de software a medida para empresas</h1>
          <p className="subtitulo">
            Construyo plataformas y aplicaciones web personalizadas que se adaptan exactamente a los flujos y necesidades únicas de tu negocio.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {/* Introducción */}
          <article>
            <h2 style={{ marginBottom: '20px', fontSize: '1.8rem' }}>¿Qué es un software a medida?</h2>
            <p style={{ lineHeight: '1.8', color: 'var(--shade-7)', fontSize: '1.1rem' }}>
              A diferencia de una página web tradicional (que busca informar o vender) o un programa genérico de suscripción, un software a medida es una solución digital diseñada y construida exclusivamente para resolver los problemas específicos de tu empresa. Es un traje a la medida que crece y evoluciona junto con tu negocio, sin obligarte a adaptar tus procesos a herramientas rígidas.
            </p>
          </article>

          {/* Cuándo tiene sentido */}
          <article>
            <h2 style={{ marginBottom: '30px', fontSize: '1.8rem', textAlign: 'center' }}>¿Cuándo tiene sentido desarrollar uno?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              {[
                'Realizas demasiados procesos manuales',
                'Dependes de hojas de Excel difíciles de mantener',
                'La información vital está dispersa en varios lugares',
                'Pierdes tiempo en tareas repetitivas',
                'Necesitas centralizar datos en tiempo real',
                'Sientes falta de control en tus operaciones'
              ].map((item, index) => (
                <div key={index} style={{ background: 'var(--shade-2)', padding: '20px', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                  <FaCheckCircle color="var(--primario)" style={{ marginTop: '5px' }} />
                  <p style={{ margin: 0, color: 'var(--shade-8)', fontWeight: '500' }}>{item}</p>
                </div>
              ))}
            </div>
          </article>

          {/* Soluciones posibles */}
          <article>
            <h2 style={{ marginBottom: '30px', fontSize: '1.8rem' }}>Soluciones que puedo construir</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
              {[
                { icon: <FaDatabase />, title: 'Plataformas Internas', desc: 'Sistemas para que tu equipo trabaje de forma unificada.' },
                { icon: <FaChartLine />, title: 'Paneles Administrativos', desc: 'Dashboards con métricas y control de datos.' },
                { icon: <FaUsers />, title: 'Gestión de Clientes (CRM)', desc: 'Control de seguimientos, ventas y atención al cliente.' },
                { icon: <FaCogs />, title: 'Automatizaciones', desc: 'Procesamiento automático de documentos y reportes.' }
              ].map((item, index) => (
                <div key={index} style={{ background: 'var(--shade-1)', border: '1px solid var(--shade-3)', padding: '30px', borderRadius: '15px', textAlign: 'center' }}>
                  <div style={{ fontSize: '30px', color: 'var(--primario)', marginBottom: '15px' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ color: 'var(--shade-6)', fontSize: '0.95rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </article>

          {/* Precios */}
          <article style={{ background: 'var(--shade-2)', padding: '40px', borderRadius: '20px', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '20px', fontSize: '1.8rem' }}>Precios y Mantención</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--shade-8)', marginBottom: '15px' }}>
              Los sistemas a medida comienzan <strong>desde $300.000 CLP</strong>.
            </p>
            <p style={{ color: 'var(--shade-6)', maxWidth: '600px', margin: '0 auto 25px auto' }}>
              El valor final depende directamente de la cantidad de módulos, roles de usuario, integraciones, complejidad de la base de datos y automatizaciones requeridas.
            </p>
            <p style={{ color: 'var(--shade-6)', fontSize: '0.95rem' }}>
              Mantención técnica (cuando corresponda después del periodo incluido): <strong>Desde $25.000 CLP / mes</strong>.
            </p>
          </article>

          {/* Cómo trabajo */}
          <article>
            <h2 style={{ marginBottom: '30px', fontSize: '1.8rem' }}>Metodología de Trabajo</h2>
            <ul style={{ paddingLeft: '20px', color: 'var(--shade-7)', fontSize: '1.1rem', lineHeight: '2' }}>
              <li><strong>Análisis y Requerimientos:</strong> Comprendo tu negocio y definimos el alcance.</li>
              <li><strong>Diseño:</strong> Estructuramos la base de datos y la interfaz gráfica.</li>
              <li><strong>Desarrollo:</strong> Programación del código y lógica de negocio.</li>
              <li><strong>Pruebas:</strong> Validación exhaustiva de cada módulo.</li>
              <li><strong>Implementación y Soporte:</strong> Despliegue en el servidor y acompañamiento.</li>
            </ul>
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
              <FaWhatsapp size={24} /> Cotizar software a medida
            </a>
          </article>

        </div>
      </section>
    </>
  );
};

export default SoftwareAMedida;
