import { Icon } from '@iconify/react';
import './TechStack.css';

const stackCategorias = [
  {
    titulo: "Frontend",
    className: "bento-frontend",
    tecnologias: [
      { nombre: "React", icono: "skill-icons:react-dark" },
      { nombre: "Next.js", icono: "skill-icons:nextjs-dark" },
      { nombre: "TypeScript", icono: "skill-icons:typescript" },
      { nombre: "JavaScript", icono: "skill-icons:javascript" },
      { nombre: "Tailwind CSS", icono: "skill-icons:tailwindcss-dark" },
      { nombre: "HTML5", icono: "skill-icons:html" },
      { nombre: "CSS3", icono: "skill-icons:css" }
    ]
  },
  {
    titulo: "Backend & Bases de Datos",
    className: "bento-backend",
    tecnologias: [
      { nombre: "Java", icono: "skill-icons:java-dark" },
      { nombre: "Spring Boot", icono: "skill-icons:spring-dark" },
      { nombre: "Python", icono: "skill-icons:python-dark" },
      { nombre: "PHP", icono: "skill-icons:php-dark" },
      { nombre: "MySQL", icono: "skill-icons:mysql-dark" },
      { nombre: "PostgreSQL", icono: "skill-icons:postgresql-dark" }
    ]
  },
  {
    titulo: "IoT & Data",
    className: "bento-iot",
    tecnologias: [
      { nombre: "Node-RED", icono: "logos:nodered" },
      { nombre: "MQTT", icono: "logos:mqtt" },
      { nombre: "Arduino", icono: "skill-icons:arduino" },
      { nombre: "Orange", icono: "logos:orange" }
    ]
  },
  {
    titulo: "DevOps",
    className: "bento-devops",
    tecnologias: [
      { nombre: "Git", icono: "skill-icons:git" },
      { nombre: "GitHub", icono: "skill-icons:github-dark" },
      { nombre: "Docker", icono: "skill-icons:docker" }
    ]
  },
  {
    titulo: "Diseño & Herramientas",
    className: "bento-tools",
    tecnologias: [
      { nombre: "Figma", icono: "skill-icons:figma-dark" },
      { nombre: "Claude AI", icono: "logos:anthropic-icon" },
      { nombre: "DaVinci Resolve", icono: "logos:davinci-resolve" },
      { nombre: "WordPress", icono: "skill-icons:wordpress" }
    ]
  }
];

const TechStack = () => {
  return (
    <section className="tech-stack" id="tech-stack">
      <div className="contenedor">
        
        <div className="encabezado anim-scroll">
          <h2 className="titulo">Stack Tecnológico</h2>
          <p className="subtitulo">
            Mi ecosistema de desarrollo: las herramientas y tecnologías que utilizo para construir soluciones robustas end-to-end.
          </p>
        </div>

        <div className="bento-grid">
          {stackCategorias.map((cat, i) => (
            <div key={i} className={`bento-card anim-scroll ${cat.className}`}>
              <h3 className="bento-title">{cat.titulo}</h3>
              <div className="bento-items">
                {cat.tecnologias.map((tech, j) => (
                  <div key={j} className="bento-tech-item">
                    <div className="icon-wrapper">
                      <Icon icon={tech.icono} className="tech-icon" />
                    </div>
                    <span className="tech-name">{tech.nombre}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
