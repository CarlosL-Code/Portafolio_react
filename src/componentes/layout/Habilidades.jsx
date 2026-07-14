import "./Habilidades.css";

import { FaCode, FaServer, FaShoppingCart, FaVideo, FaRobot, FaTools, FaNetworkWired } from "react-icons/fa";

const categoriasTecnologias = [
  {
    id: "web",
    titulo: "Desarrollo Web",
    icono: <FaCode />,
    habilidades: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"]
  },
  {
    id: "backend",
    titulo: "Backend & Auto.",
    icono: <FaServer />,
    habilidades: ["Python", "Java", "PHP", "Spring Boot", "REST API", "Make/Zapier"]
  },
  {
    id: "ecommerce",
    titulo: "E-commerce",
    icono: <FaShoppingCart />,
    habilidades: ["Shopify", "Liquid", "SEO Técnico", "Google Analytics", "Search Console"]
  },
  {
    id: "contenido-ia",
    titulo: "Contenido & IA",
    icono: <FaRobot />,
    habilidades: ["Prompt Engineering", "CapCut / Canva", "Generación Audiovisual", "Instagram SEO"]
  },
  {
    id: "redes",
    titulo: "Redes & Soporte",
    icono: <FaNetworkWired />,
    habilidades: ["Topologías de Red", "Cámaras IP", "Soporte Técnico", "DNS / SSL"]
  },
  {
    id: "herramientas",
    titulo: "Herramientas",
    icono: <FaTools />,
    habilidades: ["Git & GitHub", "WordPress", "Docker", "Figma"]
  }
];

const Habilidades = () => {
  

  return (
    <section className="habilidades" id="tecnologias">
      <div className="contenedor">
        {/* Encabezado */}
        <div className="encabezado anim-scroll">
          <h2 className="titulo">Tecnologías y Enfoques</h2>
          <p className="subtitulo">
            Las herramientas y áreas de conocimiento que respaldan mis proyectos.
          </p>
        </div>

        {/* Grid Minimalista */}
        <div className="habilidades-minimal-grid">
          {categoriasTecnologias.map((cat) => (
            <div key={cat.id} className="habilidad-minimal-card anim-scroll">
              <div className="cat-header">
                <span className="cat-icon">{cat.icono}</span>
                <h3>{cat.titulo}</h3>
              </div>
              <div className="cat-tags">
                {cat.habilidades.map((hab, index) => (
                  <span key={index} className="cat-tag">
                    {hab}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
