import { Icon } from '@iconify/react';
import './TechStack.css';

// Agrupamos todas las tecnologías en un solo arreglo para el panal
const todasLasTecnologias = [
  // Frontend
  { nombre: "React", icono: "skill-icons:react-dark", color: "#61dafb" },
  { nombre: "Next.js", icono: "skill-icons:nextjs-dark", color: "#ffffff" },
  { nombre: "TypeScript", icono: "skill-icons:typescript", color: "#3178c6" },
  { nombre: "JavaScript", icono: "skill-icons:javascript", color: "#f7df1e" },
  { nombre: "Tailwind", icono: "skill-icons:tailwindcss-dark", color: "#38bdf8" },
  { nombre: "HTML5", icono: "skill-icons:html", color: "#e34f26" },
  { nombre: "CSS3", icono: "skill-icons:css", color: "#1572b6" },
  
  // Backend & BD
  { nombre: "Java", icono: "skill-icons:java-dark", color: "#007396" },
  { nombre: "Spring", icono: "skill-icons:spring-dark", color: "#6db33f" },
  { nombre: "Python", icono: "skill-icons:python-dark", color: "#3776ab" },
  { nombre: "PHP", icono: "skill-icons:php-dark", color: "#777bb4" },
  { nombre: "MySQL", icono: "skill-icons:mysql-dark", color: "#4479a1" },
  { nombre: "PostgreSQL", icono: "skill-icons:postgresql-dark", color: "#336791" },

  // IoT & Data
  { nombre: "Node-RED", icono: "logos:nodered", color: "#8f0000" },
  { nombre: "MQTT", icono: "logos:mqtt", color: "#660066" },
  { nombre: "Arduino", icono: "skill-icons:arduino", color: "#00979d" },
  { nombre: "Orange", icono: "logos:orange", color: "#f16e00" },

  // DevOps & Herramientas
  { nombre: "Git", icono: "skill-icons:git", color: "#f05032" },
  { nombre: "Docker", icono: "skill-icons:docker", color: "#2496ed" },
  { nombre: "Figma", icono: "skill-icons:figma-dark", color: "#f24e1e" },
  { nombre: "Claude AI", icono: "logos:anthropic-icon", color: "#cc9b7a" }
];

const TechStack = () => {
  return (
    <section className="tech-stack" id="tech-stack">
      <div className="contenedor">
        
        <div className="encabezado anim-scroll">
          <h2 className="titulo">Stack Tecnológico</h2>
          <p className="subtitulo">
            Ecosistema de tecnologías que domino para diseñar, desarrollar y desplegar soluciones completas.
          </p>
        </div>

        <div className="hive-container anim-scroll">
          <div className="hive-grid">
            {todasLasTecnologias.map((tech, i) => (
              <div 
                key={i} 
                className="hex-wrapper"
                style={{ '--hover-color': tech.color }}
              >
                <div className="hex-content">
                  <Icon icon={tech.icono} className="hex-icon" />
                  <span className="hex-name">{tech.nombre}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechStack;
