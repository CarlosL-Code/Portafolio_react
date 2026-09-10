import { Icon } from '@iconify/react';
import './TechStack.css';

const categoriasHerramientas = [
  {
    titulo: "Lenguajes de Programación",
    color: "#3b82f6",
    tecnologias: [
      { nombre: "JavaScript", icono: "skill-icons:javascript", iconColor: "" },
      { nombre: "TypeScript", icono: "skill-icons:typescript", iconColor: "" },
      { nombre: "Java", icono: "skill-icons:java-dark", iconColor: "" },
      { nombre: "Python", icono: "skill-icons:python-dark", iconColor: "" },
      { nombre: "PHP", icono: "skill-icons:php-dark", iconColor: "" }
    ]
  },
  {
    titulo: "Frameworks & Librerías",
    color: "#10b981",
    tecnologias: [
      { nombre: "React", icono: "skill-icons:react-dark", iconColor: "" },
      { nombre: "Next.js", icono: "skill-icons:nextjs-dark", iconColor: "" },
      { nombre: "Spring Boot", icono: "skill-icons:spring-dark", iconColor: "" },
      { nombre: "Tailwind CSS", icono: "skill-icons:tailwindcss-dark", iconColor: "" }
    ]
  },
  {
    titulo: "Bases de Datos & Infraestructura",
    color: "#f59e0b",
    tecnologias: [
      { nombre: "MySQL", icono: "skill-icons:mysql-dark", iconColor: "" },
      { nombre: "PostgreSQL", icono: "skill-icons:postgresql-dark", iconColor: "" },
      { nombre: "Docker", icono: "skill-icons:docker", iconColor: "" },
      { nombre: "Git", icono: "skill-icons:git", iconColor: "" }
    ]
  },
  {
    titulo: "IoT & Data",
    color: "#8b5cf6",
    tecnologias: [
      { nombre: "Arduino", icono: "skill-icons:arduino", iconColor: "" },
      { nombre: "Node-RED", icono: "simple-icons:nodered", iconColor: "#8f0000" },
      { nombre: "MQTT", icono: "carbon:iot-connect", iconColor: "#660066" },
      { nombre: "Orange (Data)", icono: "mdi:chart-scatter-plot-hexbin", iconColor: "#f16e00" }
    ]
  },
  {
    titulo: "CMS & Diseño",
    color: "#ec4899",
    tecnologias: [
      { nombre: "WordPress", icono: "skill-icons:wordpress", iconColor: "" },
      { nombre: "Figma", icono: "skill-icons:figma-dark", iconColor: "" },
      { nombre: "Claude AI", icono: "logos:anthropic-icon", iconColor: "" }
    ]
  }
];

const TechStack = () => {
  return (
    <section className="tech-stack" id="tech-stack">
      <div className="contenedor-full">
        
        <div className="encabezado anim-scroll">
          <h2 className="titulo">Herramientas y Tecnologías</h2>
          <p className="subtitulo">
            Mi ecosistema de desarrollo, categorizado para abarcar soluciones completas desde la base de datos hasta la experiencia de usuario.
          </p>
        </div>

        <div className="herramientas-container">
          {categoriasHerramientas.map((cat, i) => (
            <div key={i} className="categoria-fila anim-scroll">
              
              <div className="categoria-info">
                <h3 className="categoria-titulo" style={{ '--cat-color': cat.color }}>
                  {cat.titulo}
                </h3>
                <div className="categoria-linea" style={{ background: cat.color }}></div>
              </div>
              
              <div className="categoria-items">
                {cat.tecnologias.map((tech, j) => (
                  <div key={j} className="pill-item">
                    <Icon 
                      icon={tech.icono} 
                      className="pill-icon" 
                      style={tech.iconColor ? { color: tech.iconColor } : {}}
                    />
                    <span className="pill-name">{tech.nombre}</span>
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
