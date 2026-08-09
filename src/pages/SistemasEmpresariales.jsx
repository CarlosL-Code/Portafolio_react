import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaBoxes, FaIndustry, FaUserTie, FaFileInvoice, FaCheckCircle, FaWhatsapp } from 'react-icons/fa';

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
        <div className="seo-header anim-scroll">
          <h1 className="seo-title">Sistemas de gestión para digitalizar procesos empresariales</h1>
          <p className="seo-subtitle">
            Desarrollo plataformas administrativas que optimizan tu tiempo, reducen errores humanos y te dan el control total de tu negocio desde cualquier lugar.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          {/* Soluciones Posibles */}
          <article className="anim-scroll">
            <h2 className="titulo" style={{ marginBottom: '40px', textAlign: 'center' }}>¿Qué procesos puedes digitalizar?</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
              
              {/* Inventario */}
              <div className="seo-card">
                <div className="seo-card-icon"><FaBoxes /></div>
                <h3 className="seo-card-title">Sistema de Inventario</h3>
                <ul className="seo-list" style={{ gridTemplateColumns: '1fr', gap: '15px' }}>
                  <li className="seo-list-item" style={{ padding: '15px' }}>
                    <FaCheckCircle className="seo-list-icon" style={{ fontSize: '1.2rem' }} /> Control exacto de entradas y salidas de mercadería.
                  </li>
                  <li className="seo-list-item" style={{ padding: '15px' }}>
                    <FaCheckCircle className="seo-list-icon" style={{ fontSize: '1.2rem' }} /> Alertas automáticas de stock mínimo.
                  </li>
                  <li className="seo-list-item" style={{ padding: '15px' }}>
                    <FaCheckCircle className="seo-list-icon" style={{ fontSize: '1.2rem' }} /> Historial de movimientos y reportes de pérdidas.
                  </li>
                </ul>
              </div>

              {/* Producción */}
              <div className="seo-card">
                <div className="seo-card-icon"><FaIndustry /></div>
                <h3 className="seo-card-title">Sistema de Producción</h3>
                <ul className="seo-list" style={{ gridTemplateColumns: '1fr', gap: '15px' }}>
                  <li className="seo-list-item" style={{ padding: '15px' }}>
                    <FaCheckCircle className="seo-list-icon" style={{ fontSize: '1.2rem' }} /> Control de materias primas y recetas.
                  </li>
                  <li className="seo-list-item" style={{ padding: '15px' }}>
                    <FaCheckCircle className="seo-list-icon" style={{ fontSize: '1.2rem' }} /> Registro del consumo por cada lote.
                  </li>
                  <li className="seo-list-item" style={{ padding: '15px' }}>
                    <FaCheckCircle className="seo-list-icon" style={{ fontSize: '1.2rem' }} /> Medición de mermas y control de calidad.
                  </li>
                </ul>
              </div>

              {/* Personal */}
              <div className="seo-card">
                <div className="seo-card-icon"><FaUserTie /></div>
                <h3 className="seo-card-title">Gestión de Personal</h3>
                <ul className="seo-list" style={{ gridTemplateColumns: '1fr', gap: '15px' }}>
                  <li className="seo-list-item" style={{ padding: '15px' }}>
                    <FaCheckCircle className="seo-list-icon" style={{ fontSize: '1.2rem' }} /> Base de datos de empleados y documentos legales.
                  </li>
                  <li className="seo-list-item" style={{ padding: '15px' }}>
                    <FaCheckCircle className="seo-list-icon" style={{ fontSize: '1.2rem' }} /> Gestión y aprobación de vacaciones o permisos.
                  </li>
                  <li className="seo-list-item" style={{ padding: '15px' }}>
                    <FaCheckCircle className="seo-list-icon" style={{ fontSize: '1.2rem' }} /> Panel de avisos o información corporativa.
                  </li>
                </ul>
              </div>

              {/* Administrativo */}
              <div className="seo-card">
                <div className="seo-card-icon"><FaFileInvoice /></div>
                <h3 className="seo-card-title">Sistemas Administrativos</h3>
                <ul className="seo-list" style={{ gridTemplateColumns: '1fr', gap: '15px' }}>
                  <li className="seo-list-item" style={{ padding: '15px' }}>
                    <FaCheckCircle className="seo-list-icon" style={{ fontSize: '1.2rem' }} /> Registro detallado de clientes y ventas.
                  </li>
                  <li className="seo-list-item" style={{ padding: '15px' }}>
                    <FaCheckCircle className="seo-list-icon" style={{ fontSize: '1.2rem' }} /> Repositorio de documentos en la nube.
                  </li>
                  <li className="seo-list-item" style={{ padding: '15px' }}>
                    <FaCheckCircle className="seo-list-icon" style={{ fontSize: '1.2rem' }} /> Reportes financieros y operacionales a un clic.
                  </li>
                </ul>
              </div>

            </div>
          </article>

          {/* Aclaración */}
          <article className="anim-scroll">
            <div className="seo-highlight-box" style={{ padding: '30px' }}>
              <p style={{ fontSize: '1.05rem', margin: 0, fontWeight: '500' }}>
                <em>* Nota: Estos son ejemplos de módulos que pueden desarrollarse a medida. El valor de inversión (desde $300.000 CLP) incluye una base estructural, y el costo final se evalúa según los módulos exactos que tu empresa requiera digitalizar.</em>
              </p>
            </div>
          </article>

          {/* CTA */}
          <article className="anim-scroll" style={{ textAlign: 'center', marginTop: '10px', paddingBottom: '40px' }}>
            <a 
              href={wsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="boton" 
              style={{ display: 'inline-flex', fontSize: '1.2rem', padding: '16px 36px', borderRadius: '100px' }}
            >
              <FaWhatsapp size={26} style={{ marginRight: '10px' }} /> Cuéntame qué proceso necesitas digitalizar
            </a>
          </article>

        </div>
      </section>
    </>
  );
};

export default SistemasEmpresariales;
