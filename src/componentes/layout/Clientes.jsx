import "./Clientes.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const Clientes = () => {

  useScrollAnimation();

  // Puedes cambiar el '#' por la URL real del sitio web de tu cliente
  const clientes = [
    { src: "/assets/logos/paveleads.jpeg", alt: "Logo de Paveleads", href: "#" },
    { src: "/assets/logos/carserv.png", alt: "Logo de Carserv", href: "#" },
    { src: "/assets/logos/concesionaria.png", alt: "Logo de Concesionaria", href: "#" },
    { src: "/assets/logos/primeros_resultados.png", alt: "Logo de Primeros Resultados", href: "#" }
  ];

  // Duplicamos la lista internamente para que haya suficientes logos y no queden espacios gigantes en pantallas grandes
  const logosPorTrack = [...clientes, ...clientes];

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
                <img src={cliente.src} alt={cliente.alt} />
              </div>
            </a>
          ))}
        </div>
        {/* Track 2 (Clon para el loop infinito) */}
        <div className="logos-track" aria-hidden="true">
          {logosPorTrack.map((cliente, index) => (
            <a key={`track2-${index}`} href={cliente.href} target="_blank" rel="noopener noreferrer" className="brand-item">
              <div className="brand-item__media">
                <img src={cliente.src} alt={cliente.alt} />
              </div>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Clientes;