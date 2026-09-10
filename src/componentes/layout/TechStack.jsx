import { Icon } from '@iconify/react';
import './TechStack.css';

const stackCategorias = [
  {
    titulo: "Frontend",
    tecnologias: [
      { nombre: "React", icono: "skill-icons:react-dark" },
      { nombre: "Next.js", icono: "skill-icons:nextjs-dark" },
      { nombre: "JavaScript", icono: "skill-icons:javascript" },
      { nombre: "TypeScript", icono: "skill-icons:typescript" },
      { nombre: "HTML5", icono: "skill-icons:html" },
      { nombre: "CSS3", icono: "skill-icons:css" },
      { nombre: "Tailwind CSS", icono: "skill-icons:tailwindcss-dark" }
    ]
  },
  {
    titulo: "Backend & Bases de Datos",
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
    titulo: "Herramientas & DevOps",
    tecnologias: [
      { nombre: "Git", icono: "skill-icons:git" },
      { nombre: "GitHub", icono: "skill-icons:github-dark" },
      { nombre: "Docker", icono: "skill-icons:docker" },
      { nombre: "WordPress", icono: "skill-icons:wordpress" }
    ]
  },
  {
    titulo: "IoT & Data",
    tecnologias: [
      { nombre: "MQTT", icono: "logos:mqtt" },
      { nombre: "Arduino", icono: "skill-icons:arduino" },
      { nombre: "Node-RED", icono: "logos:nodered" },
      { nombre: "Orange", icono: "logos:orange" }
    ]
  },
  {
    titulo: "Otras Herramientas",
    tecnologias: [
      { nombre: "Claude AI", icono: "logos:anthropic-icon" },
      { nombre: "Figma", icono: "skill-icons:figma-dark" },
      { nombre: "Canva", icono: "logos:canva" },
      { nombre: "DaVinci Resolve", icono: "logos:davinci-resolve" }
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
            Tecnologías y herramientas que utilizo en el desarrollo de mis proyectos, abarcando desde el diseño hasta el despliegue.
          </p>
        </div>

        <div className="tech-stack-grid">
          {stackCategorias.map((cat, i) => (
            <div key={i} className="tech-category anim-scroll">
              <h3 className="category-title">{cat.titulo}</h3>
              <div className="tech-items">
                {cat.tecnologias.map((tech, j) => (
                  <div key={j} className="tech-item">
                    <Icon icon={tech.icono} className="tech-icon" width="48" height="48" />
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
