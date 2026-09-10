import { Icon } from '@iconify/react';
import Folder from '../ui/Folder';
import './TechStack.css';

const stackCategorias = [
  {
    titulo: "Frontend",
    color: "#3b82f6",
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
    titulo: "Backend & BD",
    color: "#10b981",
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
    color: "#f59e0b",
    tecnologias: [
      { nombre: "Node-RED", icono: "logos:nodered" },
      { nombre: "MQTT", icono: "logos:mqtt" },
      { nombre: "Arduino", icono: "skill-icons:arduino" },
      { nombre: "Orange", icono: "logos:orange" }
    ]
  },
  {
    titulo: "DevOps",
    color: "#8b5cf6",
    tecnologias: [
      { nombre: "Git", icono: "skill-icons:git" },
      { nombre: "GitHub", icono: "skill-icons:github-dark" },
      { nombre: "Docker", icono: "skill-icons:docker" }
    ]
  },
  {
    titulo: "Herramientas",
    color: "#ec4899",
    tecnologias: [
      { nombre: "Figma", icono: "skill-icons:figma-dark" },
      { nombre: "Claude AI", icono: "logos:anthropic-icon" },
      { nombre: "DaVinci Resolve", icono: "logos:davinci-resolve" },
      { nombre: "WordPress", icono: "skill-icons:wordpress" }
    ]
  }
];

const renderTechPaper = (techList) => {
  return (
    <div className="tech-paper-content">
      {techList.map((tech, idx) => (
        <div key={idx} className="tech-paper-item" title={tech.nombre}>
          <Icon icon={tech.icono} width="24" height="24" />
        </div>
      ))}
    </div>
  );
};

// Divide las tecnologías en 3 grupos (papers) para el Folder
const chunkArray = (arr, numChunks) => {
  const result = Array.from({ length: numChunks }, () => []);
  arr.forEach((item, index) => {
    result[index % numChunks].push(item);
  });
  return result;
};

const TechStack = () => {
  return (
    <section className="tech-stack" id="tech-stack">
      <div className="contenedor">
        
        <div className="encabezado anim-scroll">
          <h2 className="titulo">Stack Tecnológico</h2>
          <p className="subtitulo">
            Haz clic en las carpetas para descubrir las tecnologías que utilizo en cada área de desarrollo.
          </p>
        </div>

        <div className="folders-grid">
          {stackCategorias.map((cat, i) => {
            const chunks = chunkArray(cat.tecnologias, 3);
            const paperItems = chunks.map(chunk => renderTechPaper(chunk));
            
            return (
              <div key={i} className="folder-wrapper anim-scroll">
                <Folder color={cat.color} size={1.2} items={paperItems} />
                <h3 className="folder-title">{cat.titulo}</h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
