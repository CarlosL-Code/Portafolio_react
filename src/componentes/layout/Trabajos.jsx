import "./Trabajos.css";
import { useState } from "react";
import trabajos from "../data/trabajos";
import CircularGallery from "../ui/CircularGallery";

const mockInstagram = [
  {
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    link: 'https://www.instagram.com/carloslozano.dev/',
    text: 'Aprende React'
  },
  {
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop',
    link: 'https://www.instagram.com/carloslozano.dev/',
    text: 'Tips de Desarrollo'
  },
  {
    image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=800&auto=format&fit=crop',
    link: 'https://www.instagram.com/carloslozano.dev/',
    text: 'Servicios Web'
  }
];

const Trabajos = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");
  const [trabajosFiltrados, setTrabajosFiltrados] = useState(trabajos);
  const [visibleCount, setVisibleCount] = useState(6);
  const [instagramPosts, setInstagramPosts] = useState([]);
  const [isLoadingInsta, setIsLoadingInsta] = useState(false);

  const handleChange = (e) => {
    const categoria = e.target.id;
    setCategoriaSeleccionada(categoria);
    setVisibleCount(6); 

    if (categoria === "instagram") {
      setTrabajosFiltrados([]);
      if (instagramPosts.length === 0 && !isLoadingInsta) {
        setIsLoadingInsta(true);
        // Conectamos directo al Feed de Behold con tus posts de Instagram
        fetch('https://feeds.behold.so/PRgVp5gmR44u9PcPQA87')
          .then(res => {
            if (!res.ok) throw new Error('Network response was not ok');
            return res.json();
          })
          .then(data => {
            // Behold devuelve un objeto con un arreglo "posts"
            if (data && data.posts && Array.isArray(data.posts)) {
              const formatted = data.posts.map(post => ({
                // Usamos la imagen procesada por Behold para evitar errores de CORS
                image: post.sizes?.large?.mediaUrl || post.mediaUrl,
                link: post.permalink,
                text: post.prunedCaption ? post.prunedCaption.substring(0, 30) + '...' : 'Instagram Post'
              }));
              setInstagramPosts(formatted);
            } else {
              setInstagramPosts(mockInstagram); // Fallback
            }
          })
          .catch(err => {
            console.error("Error al obtener Instagram, usando datos simulados:", err);
            setInstagramPosts(mockInstagram); // Fallback si el server está apagado
          })
          .finally(() => setIsLoadingInsta(false));
      }
    } else if (categoria === "todos") {
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
  
  // Decidir qué mostrar en la galería 3D
  const galleryItems = categoriaSeleccionada === "instagram" 
    ? (instagramPosts.length > 0 ? instagramPosts : mockInstagram)
    : trabajosFiltrados.map(t => ({ 
        image: t.thumb.url.replace('./assets', '/assets'), 
        text: t.info.nombre, 
        link: t.info.link 
      }));

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

        <div style={{ height: '500px', position: 'relative', width: '100%', marginBottom: '40px' }} className="anim-scroll">
          <CircularGallery
            bend={1}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.05}
            font="bold 30px Orbitron, sans-serif"
            scrollSpeed={2}
            items={galleryItems}
          />
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
          <label htmlFor="instagram" className={categoriaSeleccionada === "instagram" ? "activo" : ""}>
            <input type="radio" name="filtro" id="instagram" checked={categoriaSeleccionada === "instagram"} onChange={handleChange} />
            Instagram Feed
          </label>
          <label htmlFor="desarrollo-mobile" className={categoriaSeleccionada === "desarrollo-mobile" ? "activo" : ""}>
            <input type="radio" name="categoria" id="desarrollo-mobile" onChange={handleChange} checked={categoriaSeleccionada === "desarrollo-mobile"} />
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
