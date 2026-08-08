import "./Clientes.css";


const Clientes = () => {

  

  // Puedes cambiar el '#' por la URL real del sitio web de tu cliente
  const clientes = [
    { src: "/assets/logos/paveleads.png", alt: "Logo de Paveleads", href: "https://paveleads.com/" },
    { src: "/assets/logos/carserv.png", alt: "Logo de Carserv", href: "https://carserv.cl" },
    { src: "/assets/logos/hmc_motors.png", alt: "Logo de HMC Motors", href: "https://hmcautomotora.cl" },
    { src: "/assets/logos/primeros_resultados.png", alt: "Logo de Primeros Resultados", href: "#" },
    { src: "/assets/logos/logo-SanJulian.png", alt: "Logo de San Julián", href: "https://confitessanjulian.cl", customStyle: { transform: 'scale(0.6)' } },
    { src: "/assets/logos/logo-elixir.png", alt: "Logo de Elixir Gym", href: "https://web-gym-elixir.vercel.app/", customStyle: { transform: 'scale(0.8)' } }
  ];

  // Triplicamos la lista internamente para asegurar que la pista exceda el ancho de la pantalla 
  // y así evitar que flexbox los separe demasiado (space-around) en monitores grandes.
  const logosPorTrack = [...clientes, ...clientes, ...clientes];

  return (
    <section className="clientes" id="clientes">

      {/* Encabezado */}
      <div className="encabezado anim-scroll">
        <h3 className="titulo">Mis clientes</h3>

        <p className="subtitulos">
          Estas marcas han confiado en mis servicios.
        </p>
      </div>

      {/* Carrusel de Logos (Estilo Premium Marquesina) */}
      <div className="logos-wrapper anim-scroll">
        {/* Track 1 */}
        <div className="logos-track">
          {logosPorTrack.map((cliente, index) => (
            <a key={`track1-${index}`} href={cliente.href} target="_blank" rel="noopener noreferrer" className="brand-item">
              <div className="brand-item__media">
                <img src={cliente.src} alt={cliente.alt} style={cliente.customStyle ? cliente.customStyle : {}} loading="lazy" decoding="async" />
              </div>
            </a>
          ))}
        </div>
        {/* Track 2 (Clon para el loop infinito) */}
        <div className="logos-track" aria-hidden="true">
          {logosPorTrack.map((cliente, index) => (
            <a key={`track2-${index}`} href={cliente.href} target="_blank" rel="noopener noreferrer" className="brand-item">
              <div className="brand-item__media">
                <img src={cliente.src} alt={cliente.alt} style={cliente.customStyle ? cliente.customStyle : {}} loading="lazy" decoding="async" />
              </div>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Clientes;
