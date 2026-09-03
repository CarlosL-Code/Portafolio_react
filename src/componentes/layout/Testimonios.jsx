import { useState } from 'react';
import './Testimonios.css';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonios = [
  {
    id: 1,
    nombre: "HMC Motors",
    cargo: "Automotora",
    logo: "/assets/logos/hmc_motors.png",
    servicio: "Sitio Web Corporativo + Catálogo",
    texto: "Carlos desarrolló nuestro sitio web desde cero, incluyendo el catálogo de vehículos y un sistema de carga de inventario que nos facilita mantener actualizada nuestra oferta. El resultado fue un sitio profesional que refleja la calidad de nuestra automotora y que nuestros clientes pueden navegar fácilmente.",
    estrellas: 5
  },
  {
    id: 2,
    nombre: "Gimnasio Elixir",
    cargo: "Centro Deportivo",
    logo: "/assets/logos/logo-elixir.png",
    servicio: "Sitio Web + Contenido Audiovisual",
    texto: "Necesitábamos un sitio web que mostrara nuestras instalaciones y planes de membresía de forma atractiva. Carlos no solo nos creó la página web, sino que también se encargó de todo el contenido audiovisual. El sitio transmite exactamente la energía que queríamos proyectar.",
    estrellas: 5
  },
  {
    id: 3,
    nombre: "Confitería San Julián",
    cargo: "E-commerce & Manufactura",
    logo: "/assets/logos/logo-SanJulian.png",
    logoStyle: { transform: 'scale(0.7)' },
    servicio: "E-commerce + Gestor de Inventario + Sistema de Gestión",
    texto: "Carlos nos construyó toda la infraestructura digital: desde la tienda online en Shopify hasta un sistema de gestión de inventario de materia prima con alertas automatizadas. Pasamos de gestionar todo manualmente a tener control total de nuestro stock y ventas en una sola plataforma.",
    estrellas: 5
  },
  {
    id: 4,
    nombre: "Paveleads",
    cargo: "Agencia de Marketing",
    logo: "/assets/logos/paveleads.png",
    servicio: "Soporte y Estabilidad Web",
    texto: "Carlos se hizo cargo del soporte técnico y la estabilización de sitios web en producción. Resolvió problemas complejos de DNS, SSL y hosting que tenían fuera de línea los sitios de nuestros clientes. Ahora funcionan de manera estable y nuestros clientes pueden encontrarnos sin problemas.",
    estrellas: 5
  }
];

const Testimonios = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonios.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonios.length - 1 ? 0 : prev + 1));
  };

  const current = testimonios[currentIndex];

  return (
    <section className="testimonios-section">
      <div className="contenedor">
        <div className="testimonios-encabezado anim-scroll">
          <h4 className="testimonios-pre">Lo que dicen mis clientes</h4>
          <h2 className="testimonios-titulo">Resultados que hablan por sí solos</h2>
        </div>

        <div className="testimonios-carousel anim-scroll">
          <button className="testimonios-nav testimonios-prev" onClick={goToPrev} aria-label="Testimonio anterior">
            <FaChevronLeft />
          </button>

          <div className="testimonio-card" key={current.id}>
            <div className="testimonio-quote-icon">
              <FaQuoteLeft />
            </div>
            
            <p className="testimonio-texto">{current.texto}</p>
            
            <div className="testimonio-estrellas">
              {[...Array(current.estrellas)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <div className="testimonio-autor">
              <div className="testimonio-avatar">
                <img src={current.logo} alt={current.nombre} style={current.logoStyle || {}} loading="lazy" />
              </div>
              <div className="testimonio-info">
                <span className="testimonio-nombre">{current.nombre}</span>
                <span className="testimonio-cargo">{current.cargo}</span>
                <span className="testimonio-servicio">{current.servicio}</span>
              </div>
            </div>
          </div>

          <button className="testimonios-nav testimonios-next" onClick={goToNext} aria-label="Siguiente testimonio">
            <FaChevronRight />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="testimonios-dots">
          {testimonios.map((_, i) => (
            <button
              key={i}
              className={`testimonios-dot ${i === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Ir al testimonio ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
