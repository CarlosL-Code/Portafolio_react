import "./Trabajos.css";
import { useState } from "react";
import trabajos from "../data/trabajos";

const Trabajos = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");
  const [trabajosFiltrados, setTrabajosFiltrados] = useState(trabajos);
  const [visibleCount, setVisibleCount] = useState(6);

  const handleChange = (e) => {
    const categoria = e.target.id;
    setCategoriaSeleccionada(categoria);
    setVisibleCount(6); 

    if (categoria === "todos") {
      setTrabajosFiltrados(trabajos);
    } else {
      const nuevosTrabajos = trabajos.filter(
        (trabajo) => trabajo.categoria === categoria
      );
      setTrabajosFiltrados(nuevosTrabajos);
    }
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const openProjectLink = (e, link) => {
    e.preventDefault();
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const trabajosVisibles = trabajosFiltrados.slice(0, visibleCount);

  return (
    <>
      <section className="trabajos seccion-alt" id="trabajos">
        {/* Encabezado Premium */}
        <div className="encabezado anim-scroll">
          <h1 className="seo-title" style={{ fontSize: '3rem' }}>Proyectos Destacados</h1>
          <p className="subtitulo-premium">
            Cada proyecto representa una solución arquitectónica para necesidades concretas de negocio. Explorar estos casos de estudio revela el enfoque estratégico detrás del código.
          </p>
        </div>

        {/* Filtros tipo "Pill" */}
        <div className="filtros-premium anim-scroll">
          <label htmlFor="todos" className={categoriaSeleccionada === "todos" ? "activo" : ""}>
            <input type="radio" name="filtro" id="todos" checked={categoriaSeleccionada === "todos"} onChange={handleChange} />
            Todos
          </label>
          <label htmlFor="desarrollo-software" className={categoriaSeleccionada === "desarrollo-software" ? "activo" : ""}>
            <input type="radio" name="filtro" id="desarrollo-software" checked={categoriaSeleccionada === "desarrollo-software"} onChange={handleChange} />
            Software
          </label>
          <label htmlFor="desarrollo-web" className={categoriaSeleccionada === "desarrollo-web" ? "activo" : ""}>
            <input type="radio" name="filtro" id="desarrollo-web" checked={categoriaSeleccionada === "desarrollo-web"} onChange={handleChange} />
            Desarrollo Web
          </label>
          <label htmlFor="desarrollo-mobile" className={categoriaSeleccionada === "desarrollo-mobile" ? "activo" : ""}>
            <input type="radio" name="filtro" id="desarrollo-mobile" onChange={handleChange} checked={categoriaSeleccionada === "desarrollo-mobile"} />
            Mobile Apps
          </label>
        </div>

        {/* Grid Premium */}
        <div className="grid-premium">
          {trabajosVisibles.map((trabajo, index) => (
            <div
              className="tarjeta-proyecto anim-scroll visible"
              key={trabajo.id}
              style={{ transitionDelay: `${(index % 6) * 50}ms` }}
            >
              <div className="imagen-proyecto" onClick={(e) => openProjectLink(e, trabajo.info.link)}>
                <img loading="lazy" decoding="async" src={trabajo.thumb.url} alt={trabajo.thumb.alt} />
              </div>

              <div className="info-proyecto">
                <h3 className="titulo-proyecto">{trabajo.info.nombre}</h3>
                <p className="desc-proyecto">{trabajo.info.descripcion_corta}</p>
                
                <div className="tags-proyecto">
                  {trabajo.info.tags && trabajo.info.tags.map((tag, i) => (
                    <span key={i} className="tag-pildora">{tag}</span>
                  ))}
                </div>

                <button className="btn-proyecto" onClick={(e) => openProjectLink(e, trabajo.info.link)}>
                  Ver Proyecto &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Cargar Más */}
        {visibleCount < trabajosFiltrados.length && (
          <div className="load-more-container anim-scroll visible">
            <button className="btn-load-more" onClick={handleLoadMore}>
              Cargar más proyectos
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Trabajos;
