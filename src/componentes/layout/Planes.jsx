import "./Planes.css";

const Planes = ({ currency = 'CLP' }) => {
  const whatsappNumber = "56937540250";

  const precios = {
    web: { CLP: "120.000", USD: "135", ARS: "150.000" },
    mensual: { CLP: "30.000", USD: "35", ARS: "40.000" },
    sistemas: { CLP: "300.000", USD: "340", ARS: "400.000" },
    mantencion: { CLP: "25.000", USD: "28", ARS: "33.000" }
  };

  const getMonedaSuffix = () => {
    return currency === "USD" ? "USD" : currency;
  };

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
        <div 
          className="plan-wrapper anim-scroll" 
          onClick={() => window.open(generarLinkWhatsApp(`Hola Carlos, vi tu portafolio y me interesa cotizar el plan de desarrollo web desde ${precios.web[currency]} ${currency}. Me gustara contarte sobre mi proyecto.`), '_blank')}
        >
          <div className="plan-tarjeta-inner">
            <div className="plan-header">
              <h3>Desarrollo Web</h3>
              <span className="pago-unico">Pago nico</span>
            </div>
            <div className="plan-precio">
              <span className="desde">Desde</span>
              <span className="monto">${precios.web[currency]}</span>
              <span className="moneda">{getMonedaSuffix()}</span>
            </div>
            <p className="plan-descripcion">
              Para empresas, profesionales o emprendimientos que quieren adquirir su pgina web mediante un pago nico.
            </p>
            <div className="plan-contenido">
              <h4>INCLUYE:</h4>
              <ul className="plan-lista">
                <li><span className="check">✓</span> Desarrollo completo del sitio</li>
                <li><span className="check">✓</span> Diseo responsive (celular, tablet, PC)</li>
                <li><span className="check">✓</span> Integracin con WhatsApp y Redes Sociales</li>
                <li><span className="check">✓</span> Formularios de contacto</li>
                <li><span className="check">✓</span> Optimizacin SEO bsica (On-page)</li>
                <li><span className="check">✓</span> Configuracin inicial</li>
                <li><span className="check">✓</span> Soporte tcnico durante los primeros 3 meses</li>
              </ul>
              
              <h4 className="no-incluye-titulo">NO INCLUYE:</h4>
              <ul className="plan-lista no-incluye">
                <li><span className="cross">✕</span> Dominio personalizado ni hosting</li>
                <li><span className="cross">✕</span> Mantenciones post-soporte</li>
                <li><span className="cross">✕</span> Servicios externos de pago</li>
              </ul>
            </div>
            
            <p className="plan-nota mt-auto pt-6 text-sm italic text-gray-500 dark:text-gray-400">
              El cliente mantiene el control de su dominio, servidor e infraestructura.
            </p>
          </div>
        </div>

        {/* PLAN 2 DESTACADO */}
        <div 
          className="plan-wrapper destacado anim-scroll" 
          onClick={() => window.open(generarLinkWhatsApp(`Hola Carlos, vi tu portafolio y me interesa conocer ms sobre el plan web mensual desde ${precios.mensual[currency]} ${currency}. Podemos conversar?`), '_blank')}
        >
          <div className="plan-tarjeta-inner destacado">
            <div className="plan-header">
              <h3>Sitio Web Mensual</h3>
              <span className="badge-popular">Alternativa flexible</span>
            </div>
            <div className="plan-precio">
              <span className="desde">Desde</span>
              <span className="monto">${precios.mensual[currency]}</span>
              <span className="moneda">{getMonedaSuffix()} / mes</span>
            </div>
            <p className="plan-descripcion">
              Alternativa para quienes quieren tener una pgina web profesional sin realizar un pago inicial alto.
            </p>
            <div className="plan-contenido">
              <h4>INCLUYE:</h4>
              <ul className="plan-lista">
                <li><span className="check">✓</span> Desarrollo completo del sitio</li>
                <li><span className="check">✓</span> Hosting / servidor incluido</li>
                <li><span className="check">✓</span> Soporte tcnico y mantencin continua</li>
                <li><span className="check">✓</span> Actualizaciones menores</li>
                <li><span className="check">✓</span> Integracin con WhatsApp y Redes Sociales</li>
                <li><span className="check">✓</span> Posibilidad de utilizar un subdominio (ej: tunombre.misitio.com)</li>
              </ul>
            </div>
            
            <p className="plan-nota mt-auto pt-6 text-sm italic font-semibold text-gray-700 dark:text-gray-300">
              Importante: <span className="font-normal">Si deseas utilizar un dominio personalizado (.cl, .com), debers adquirirlo por separado.</span>
            </p>
          </div>
        </div>

        {/* PLAN 3 */}
        <div 
          className="plan-wrapper anim-scroll" 
          onClick={() => window.open(generarLinkWhatsApp(`Hola Carlos, necesito desarrollar un sistema a medida o automatizar procesos en mi empresa. Me gustara recibir ms informacin.`), '_blank')}
        >
          <div className="plan-tarjeta-inner">
            <div className="plan-header">
              <h3>Sistemas a Medida</h3>
            </div>
            <div className="plan-precio">
              <span className="desde">Desde</span>
              <span className="monto">${precios.sistemas[currency]}</span>
              <span className="moneda">{getMonedaSuffix()}</span>
            </div>
            <p className="plan-descripcion">
              Desarrollo de sistemas y plataformas para digitalizar procesos y mejorar la gestin de tu empresa.
            </p>
            
            <div className="ejemplos-tags">
              <span className="tag-titulo">EJEMPLOS:</span>
              <div className="tags">
                <span>Inventario</span>
                <span>Produccin</span>
                <span>Personal</span>
                <span>Administracin</span>
              </div>
            </div>

            <div className="plan-contenido">
              <h4>INCLUYE:</h4>
              <ul className="plan-lista">
                <li><span className="check">✓</span> Levantamiento y anlisis de requerimientos</li>
                <li><span className="check">✓</span> Diseo, desarrollo y base de datos</li>
                <li><span className="check">✓</span> Panel de administracin</li>
                <li><span className="check">✓</span> Manual de usuario y documentacin</li>
                <li><span className="check">✓</span> Soporte y mantenimiento (1er ao)</li>
              </ul>
            </div>
            
            <p className="plan-nota text-sm italic text-gray-500 dark:text-gray-400 mt-4 mb-4">
              Infraestructura: El servidor y dominio son contratados por el cliente (tienes el control total).
            </p>

            <div className="caja-mantencion">
              <h4>Mantencin de sistemas</h4>
              <p className="precio-mantencion">Desde ${precios.mantencion[currency]} {getMonedaSuffix()} / mes</p>
              <p className="desc-mantencion">Soporte, correcciones y pequeas mejoras. Nuevos desarrollos se cotizan aparte.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Planes;
