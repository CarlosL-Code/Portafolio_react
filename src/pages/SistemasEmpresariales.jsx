import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaBoxes, FaIndustry, FaUserTie, FaFileInvoice, FaCheck, FaWhatsapp } from 'react-icons/fa';

const SistemasEmpresariales = () => {
  const wsMessage = "Hola Carlos, necesito digitalizar un proceso de mi empresa y quiero consultar por un sistema a medida. ¿Podemos conversar?";
  const wsUrl = `https://wa.me/56937540250?text=${encodeURIComponent(wsMessage)}`;

  return (
    <>
      <Helmet>
        <title>Sistemas de Gestión para Empresas | Carlos Lozano</title>
        <meta name="description" content="Sistemas de gestión personalizados para inventario, producción, personal y procesos internos. Conoce opciones y solicita una cotización." />
        <link rel="canonical" href="https://carloslozanodev.com/sistemas-empresariales" />
      </Helmet>

      <section className="contenedor" style={{ paddingTop: '150px', paddingBottom: '50px' }}>
        <div className="encabezado" style={{ marginBottom: '60px' }}>
          <h1 className="titulo">Sistemas de gestión para digitalizar procesos empresariales</h1>
          <p className="subtitulo">
            Desarrollo plataformas administrativas que optimizan tu tiempo, reducen errores humanos y te dan el control total de tu negocio.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {/* Soluciones Posibles */}
          <article>
            <h2 style={{ marginBottom: '40px', fontSize: '1.8rem', textAlign: 'center' }}>¿Qué procesos puedes digitalizar?</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
              {/* Inventario */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', background: 'var(--shade-2)', padding: '30px', borderRadius: '15px' }}>
                <div style={{ fontSize: '40px', color: 'var(--primario)' }}><FaBoxes /></div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>Sistema de Inventario</h3>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <li><FaCheck color="var(--primario)" style={{ marginRight: '10px' }} /> Control exacto de entradas y salidas de mercadería.</li>
                    <li><FaCheck color="var(--primario)" style={{ marginRight: '10px' }} /> Alertas automáticas de stock mínimo.</li>
                    <li><FaCheck color="var(--primario)" style={{ marginRight: '10px' }} /> Historial de movimientos y reportes de pérdidas.</li>
                  </ul>
                </div>
              </div>

              {/* Producción */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', background: 'var(--shade-2)', padding: '30px', borderRadius: '15px' }}>
                <div style={{ fontSize: '40px', color: 'var(--primario)' }}><FaIndustry /></div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>Sistema de Producción</h3>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <li><FaCheck color="var(--primario)" style={{ marginRight: '10px' }} /> Control de materias primas y recetas.</li>
                    <li><FaCheck color="var(--primario)" style={{ marginRight: '10px' }} /> Registro del consumo por cada lote de producción.</li>
                    <li><FaCheck color="var(--primario)" style={{ marginRight: '10px' }} /> Medición de mermas y control de calidad.</li>
                  </ul>
                </div>
              </div>

              {/* Personal */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', background: 'var(--shade-2)', padding: '30px', borderRadius: '15px' }}>
                <div style={{ fontSize: '40px', color: 'var(--primario)' }}><FaUserTie /></div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>Gestión de Personal</h3>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <li><FaCheck color="var(--primario)" style={{ marginRight: '10px' }} /> Base de datos de empleados y sus documentos legales.</li>
                    <li><FaCheck color="var(--primario)" style={{ marginRight: '10px' }} /> Gestión y aprobación de vacaciones o permisos.</li>
                    <li><FaCheck color="var(--primario)" style={{ marginRight: '10px' }} /> Panel de avisos o información interna corporativa.</li>
                  </ul>
                </div>
              </div>

              {/* Administrativo */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', background: 'var(--shade-2)', padding: '30px', borderRadius: '15px' }}>
                <div style={{ fontSize: '40px', color: 'var(--primario)' }}><FaFileInvoice /></div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>Sistemas Administrativos</h3>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <li><FaCheck color="var(--primario)" style={{ marginRight: '10px' }} /> Registro detallado de clientes y ventas.</li>
                    <li><FaCheck color="var(--primario)" style={{ marginRight: '10px' }} /> Repositorio de documentos importantes en la nube.</li>
                    <li><FaCheck color="var(--primario)" style={{ marginRight: '10px' }} /> Reportes financieros y operacionales a un clic.</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          {/* Aclaración */}
          <article style={{ background: 'var(--shade-1)', border: '1px solid var(--shade-3)', padding: '25px', borderRadius: '10px' }}>
            <p style={{ color: 'var(--shade-7)', fontSize: '0.95rem', margin: 0 }}>
              <em>* Nota: Estos son ejemplos de módulos que pueden desarrollarse a medida. El valor de inversión (desde $300.000 CLP) incluye una base estructural, y el costo final se evalúa según los módulos exactos que tu empresa requiera digitalizar.</em>
            </p>
          </article>

          {/* CTA */}
          <article style={{ textAlign: 'center', marginTop: '10px' }}>
            <a 
              href={wsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="boton" 
              style={{ display: 'inline-flex', fontSize: '1.2rem', padding: '15px 30px' }}
            >
              <FaWhatsapp size={24} /> Cuéntame qué proceso necesitas digitalizar
            </a>
          </article>

        </div>
      </section>
    </>
  );
};

export default SistemasEmpresariales;
