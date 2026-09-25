import "./Clientes.css";

const clientes = [
  { id: "paveleads", nombre: "Paveleads", src: "/assets/logos/paveleads.png", href: "https://paveleads.com/", escala: 1.45 },
  { id: "carserv", nombre: "Carserv", src: "/assets/logos/carserv.png", href: "https://carserv.cl", escala: 2 },
  { id: "hmc", nombre: "HMC Motors", src: "/assets/logos/hmc_motors.png", href: "https://hmcautomotora.cl", escala: 1.35 },
  { id: "primeros-resultados", nombre: "Primeros Resultados", src: "/assets/logos/primeros_resultados.png", escala: 1.35 },
  { id: "san-julian", nombre: "San Julián", src: "/assets/logos/logo-SanJulian.png", href: "https://confitessanjulian.cl", escala: 0.85 },
  { id: "elixir", nombre: "Elixir Gym", src: "/assets/logos/logo-elixir.png", href: "https://web-gym-elixir.vercel.app/", escala: 1 },
  { id: "rolando-sepulveda", nombre: "Rolando Sepúlveda", src: "/assets/logos/rolando-sepulveda-logo.png", href: "https://rolando-sepulveda.vercel.app/", escala: 1.2 }
];

const Clientes = () => (
  <section className="clientes" id="clientes" aria-labelledby="clientes-title">
    <div className="clientes-contenido">
      <div className="clientes-encabezado anim-scroll">
        <span className="clientes-eyebrow">CONFIANZA QUE SE CONSTRUYE</span>
        <h2 id="clientes-title">Marcas que confían en mi trabajo</h2>
        <p>Proyectos reales, colaboración cercana y soluciones a medida.</p>
      </div>
      
      <div className="clientes-marquee-container anim-scroll">
        <div className="clientes-marquee-track">
          {/* Renderizamos la lista dos veces para el efecto de scroll infinito */}
          {[...clientes, ...clientes].map((cliente, index) => {
            const Elemento = cliente.href ? 'a' : 'div';
            return (
              <div className="cliente-marca-wrapper" key={`${cliente.id}-${index}`}>
                <Elemento
                  className="cliente-marca"
                  {...(cliente.href ? {
                    href: cliente.href,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    'aria-label': `Visitar el sitio de ${cliente.nombre} (abre en una pestaña nueva)`
                  } : {})}
                >
                  <div className={`cliente-logo cliente-logo--${cliente.id}`}>
                    <img src={cliente.src} alt={cliente.nombre} loading="lazy" decoding="async" style={{ '--logo-scale': cliente.escala }} />
                  </div>
                </Elemento>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Clientes;
