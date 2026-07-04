import { useState, useEffect } from "react";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import "./ExperienciaProfesional.css";

const experiencias = [
  {
    id: 1,
    cargo: "Desarrollador y Gestor de E-commerce",
    periodo: "2024 - Actualidad",
    empresa: "Confites San Julián",
    tipo: "Contrato",
    descripcion: "Responsable del desarrollo y evolución técnica del ecosistema digital de la empresa, abarcando desde la plataforma e-commerce hasta la automatización de procesos.",
    logros: [
      { titulo: "Desarrollo E-commerce (End-to-End)", texto: "Programación y personalización avanzada de la tienda online desde cero mediante Shopify y Liquid." },
      { titulo: "Automatización de Flujos", texto: "Implementación de scripts (Python) para automatizar la facturación de Kame ERP, eliminando tareas manuales." },
      { titulo: "Infraestructura Técnica", texto: "Gestión de redes y configuración segura de cámaras IP (P2P), junto con administración de dominios en Cloudflare." },
      { titulo: "Contenido y Estrategia", texto: "Producción audiovisual y optimización técnica (SEO) para aumentar el ROI y la visibilidad de la marca." }
    ],
    tags: ["Shopify", "Liquid", "Python", "Automatización", "Cloudflare", "Infraestructura", "SEO"]
  },
  {
    id: 2,
    cargo: "Web Developer & IT Support",
    periodo: "2024 - Actualidad",
    empresa: "HMC Automotora",
    tipo: "Freelance",
    descripcion: "Desarrollo completo, mantenimiento en servidor y soporte técnico continuo para la plataforma web corporativa de la concesionaria.",
    logros: [
      { titulo: "Desarrollo Full-Stack", texto: "Creación de la plataforma web corporativa para exhibición del catálogo de vehículos usando Next.js." },
      { titulo: "Mantenimiento en Servidor", texto: "Gestión directa del hosting, dominios y actualización de infraestructura tecnológica." },
      { titulo: "Gestión de Contenido", texto: "Carga constante de información, actualización de inventario y optimización de imágenes." }
    ],
    tags: ["Next.js", "Desarrollo Web", "Servidores", "Mantenimiento", "CMS"]
  },
  {
    id: 3,
    cargo: "Freelance Software Engineer",
    periodo: "2024 - Actualidad",
    empresa: "Independiente",
    tipo: "Freelance",
    descripcion: "Prestación de servicios tecnológicos integrales, entregando soluciones web y digitales a medida para diversos clientes.",
    logros: [
      { titulo: "Sistemas a Medida", texto: "Análisis técnico y levantamiento de requerimientos para el desarrollo de sistemas de ventas." },
      { titulo: "Soluciones Web", texto: "Diseño y desarrollo de sitios web informativos, landing pages y portafolios de alto impacto." },
      { titulo: "Consultoría Técnica", texto: "Asistencia técnica integral en configuración de DNS, ajustes de servidores y resolución de problemas." }
    ],
    tags: ["React", "APIs", "DNS/Hosting", "Consultoría TI", "Frontend", "Resolución de Problemas"]
  }
];

const ExperienciaProfesional = () => {
  useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Si el usuario tiene el mouse o dedo encima, no creamos el intervalo
    if (isPaused) return;

    const timer = setInterval(() => {
      setIsFading(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % experiencias.length);
        setIsFading(false);
      }, 500); 
      
    }, 7000); 

    return () => clearInterval(timer);
  }, [isPaused]); // El efecto depende de isPaused

  const exp = experiencias[currentIndex];

  return (
    <section className="experiencia-profesional" id="experiencia">
      <div className="encabezado anim-scroll">
        <h2 className="titulo">Experiencia Profesional</h2>
        <p className="subtitulo">
          Mi trayectoria laboral desarrollando soluciones digitales reales.
        </p>
      </div>

      <div className="experiencia-contenido">
        <div 
          className={`experiencia-tarjeta anim-scroll ${isFading ? 'fading-out' : 'fading-in'}`}
          onMouseEnter={() => {
            if (window.matchMedia('(hover: hover)').matches) {
              setIsPaused(true);
            }
          }}
          onMouseLeave={() => {
            if (window.matchMedia('(hover: hover)').matches) {
              setIsPaused(false);
            }
          }}
        >
          <div className="experiencia-header">
            <h3 className="experiencia-cargo">{exp.cargo}</h3>
            <span className="experiencia-periodo">{exp.periodo}</span>
          </div>
          
          <div className="experiencia-empresa">
            <h4>{exp.empresa}</h4>
            <span className="experiencia-tipo">{exp.tipo}</span>
          </div>

          <div className="experiencia-descripcion">
            <p>{exp.descripcion}</p>
            
            <ul className="experiencia-lista">
              {exp.logros.map((logro, index) => (
                <li key={index}>
                  <span><strong>{logro.titulo}:</strong> {logro.texto}</span>
                </li>
              ))}
            </ul>

            <div className="experiencia-tags">
              {exp.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Indicadores del carrusel */}
        <div className="experiencia-dots">
          {experiencias.map((_, index) => (
            <button 
              key={index} 
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              aria-label={`Ver experiencia ${index + 1}`}
              onClick={() => {
                if(index === currentIndex) return;
                setIsFading(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsFading(false);
                }, 500);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienciaProfesional;
