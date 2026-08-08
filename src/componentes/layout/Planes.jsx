import "./Planes.css";

const Planes = () => {
  const whatsappNumber = "56937540250";

  const generarLinkWhatsApp = (mensaje) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
  };

  return (
    <section className="planes" id="planes">
      <div className="encabezado anim-scroll">
        <h2 className="titulo">Planes y formas de trabajo</h2>
        <p className="subtitulo">
          Opciones flexibles adaptadas a las necesidades de tu proyecto o negocio.
        </p>
      </div>

      <div className="planes-grid">
        {/* PLAN 1 */}
        <div className="plan-tarjeta anim-scroll">
          <div className="plan-header">
            <h3>Desarrollo Web</h3>
            <span className="pago-unico">Pago único</span>
          </div>
          <div className="plan-precio">
            <span className="desde">Desde</span>
            <span className="monto">$180.000</span>
            <span className="moneda">CLP</span>
          </div>
          <p className="plan-descripcion">
            Para empresas, profesionales o emprendimientos que quieren adquirir su página web mediante un pago único.
          </p>
          <div className="plan-contenido">
            <h4>Incluye:</h4>
            <ul className="plan-lista">
              <li>Desarrollo completo del sitio</li>
              <li>Diseño responsive (celular, tablet, PC)</li>
              <li>Integración con WhatsApp y Redes Sociales</li>
              <li>Formularios de contacto</li>
              <li>Optimización SEO básica (On-page)</li>
              <li>Configuración inicial</li>
              <li>Soporte técnico durante los primeros 3 meses</li>
            </ul>
            <div className="plan-no-incluye">
              <h4>No incluye:</h4>
              <ul>
                <li>Dominio personalizado ni hosting</li>
                <li>Mantenciones post-soporte</li>
                <li>Servicios externos de pago</li>
              </ul>
            </div>
            <p className="plan-nota-corta mt-auto">
              El cliente mantiene el control de su dominio, servidor e infraestructura.
            </p>
          </div>
          <a
            href={generarLinkWhatsApp(
              "Hola Carlos, vi tu portafolio y me interesa cotizar el plan de desarrollo web desde $180.000. Me gustaría contarte sobre mi proyecto."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="boton btn-plan"
          >
            Cotizar mi sitio web
          </a>
        </div>

        {/* PLAN 2 */}
        <div className="plan-tarjeta destacado anim-scroll">
          <div className="plan-header">
            <h3>Sitio Web Mensual</h3>
            <span className="etiqueta-destacado">Alternativa flexible</span>
          </div>
          <div className="plan-precio">
            <span className="desde">Desde</span>
            <span className="monto">$30.000</span>
            <span className="moneda">CLP / mes</span>
          </div>
          <p className="plan-descripcion">
            Alternativa para quienes quieren tener una página web profesional sin realizar un pago inicial alto.
          </p>
          <div className="plan-contenido">
            <h4>Incluye:</h4>
            <ul className="plan-lista">
              <li>Desarrollo completo del sitio</li>
              <li>Hosting / servidor incluido</li>
              <li>Soporte técnico y mantención continua</li>
              <li>Actualizaciones menores</li>
              <li>Integración con WhatsApp y Redes Sociales</li>
              <li>Posibilidad de utilizar un subdominio (ej: tunombre.misitio.com)</li>
            </ul>
            <p className="plan-nota-corta mt-auto">
              <strong>Importante:</strong> Si deseas utilizar un dominio personalizado (.cl, .com), deberás adquirirlo por separado.
            </p>
          </div>
          <a
            href={generarLinkWhatsApp(
              "Hola Carlos, vi tu portafolio y me interesa conocer más sobre el plan web mensual desde $30.000. ¿Podemos conversar?"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="boton btn-plan btn-destacado"
          >
            Consultar plan mensual
          </a>
        </div>

        {/* PLAN 3 */}
        <div className="plan-tarjeta anim-scroll">
          <div className="plan-header">
            <h3>Sistemas a Medida</h3>
          </div>
          <div className="plan-precio">
            <span className="desde">Desde</span>
            <span className="monto">$300.000</span>
            <span className="moneda">CLP</span>
          </div>
          <p className="plan-descripcion">
            Desarrollo de sistemas y plataformas para digitalizar procesos y mejorar la gestión de tu empresa.
          </p>
          <div className="plan-contenido">
            <h4>Ejemplos:</h4>
            <div className="plan-tags">
              <span>Inventario</span>
              <span>Producción</span>
              <span>Personal</span>
              <span>Administración</span>
            </div>
            <h4 className="mt-3">Incluye:</h4>
            <ul className="plan-lista">
              <li>Levantamiento y análisis de requerimientos</li>
              <li>Diseño, desarrollo y base de datos</li>
              <li>Panel de administración</li>
              <li>Manual de usuario y documentación</li>
              <li>Soporte y mantenimiento (1er año)</li>
            </ul>
            <p className="plan-nota-corta mt-auto">
              <strong>Infraestructura:</strong> El servidor y dominio son contratados por el cliente (tienes el control total).
            </p>
          </div>
          <div className="plan-secundario">
            <h4>Mantención de sistemas</h4>
            <p className="precio-secundario">Desde $25.000 CLP / mes</p>
            <p className="texto-secundario">Soporte, correcciones y pequeñas mejoras. Nuevos desarrollos se cotizan aparte.</p>
          </div>
          <a
            href={generarLinkWhatsApp(
              "Hola Carlos, vi tu portafolio y quiero cotizar un sistema a medida para mi negocio. Me gustaría explicarte lo que necesito."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="boton btn-plan"
          >
            Cotizar sistema
          </a>
        </div>
      </div>

      <div className="planes-nota anim-scroll">
        <p>
          * Los valores publicados son referenciales y pueden variar según la cantidad de secciones, 
          funcionalidades, integraciones, complejidad y requerimientos específicos de cada proyecto.
        </p>
      </div>
    </section>
  );
};

export default Planes;
