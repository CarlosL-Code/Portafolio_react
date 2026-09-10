import { Icon } from '@iconify/react';
import './TechStack.css';

const especialidad = {
  titulo: "Especialidad: Full Stack Empresarial & IoT",
  descripcion: "Mi núcleo tecnológico principal. Una combinación robusta para construir sistemas transaccionales escalables (ERP/CMMS) y conectar infraestructuras de hardware (IoT) con interfaces modernas.",
  categorias: [
    {
      nombre: "Backend & Arquitectura",
      tecnologias: [
        { nombre: "Java", icono: "skill-icons:java-dark", iconColor: "" },
        { nombre: "Spring Boot", icono: "skill-icons:spring-dark", iconColor: "" },
        { nombre: "PostgreSQL", icono: "skill-icons:postgresql-dark", iconColor: "" },
        { nombre: "MySQL", icono: "skill-icons:mysql-dark", iconColor: "" }
      ]
    },
    {
      nombre: "Frontend & Clientes",
      tecnologias: [
        { nombre: "React", icono: "skill-icons:react-dark", iconColor: "" },
        { nombre: "Next.js", icono: "skill-icons:nextjs-dark", iconColor: "" },
        { nombre: "TypeScript", icono: "skill-icons:typescript", iconColor: "" },
        { nombre: "JavaScript", icono: "skill-icons:javascript", iconColor: "" }
      ]
    },
    {
      nombre: "Ecosistema IoT",
      tecnologias: [
        { nombre: "Node-RED", icono: "simple-icons:nodered", iconColor: "#8f0000" },
        { nombre: "MQTT", icono: "carbon:iot-connect", iconColor: "#660066" },
        { nombre: "Arduino", icono: "skill-icons:arduino", iconColor: "" }
      ]
    }
  ]
};

const complementos = [
  {
    titulo: "Otros Lenguajes & Scripting",
    tecnologias: [
      { nombre: "Python", icono: "skill-icons:python-dark", iconColor: "" },
      { nombre: "PHP", icono: "skill-icons:php-dark", iconColor: "" }
    ]
  },
  {
    titulo: "Infraestructura & DevOps",
    tecnologias: [
      { nombre: "Docker", icono: "skill-icons:docker", iconColor: "" },
      { nombre: "Git", icono: "skill-icons:git", iconColor: "" }
    ]
  },
  {
    titulo: "Diseño & Web",
    tecnologias: [
      { nombre: "Tailwind CSS", icono: "skill-icons:tailwindcss-dark", iconColor: "" },
      { nombre: "Figma", icono: "skill-icons:figma-dark", iconColor: "" },
      { nombre: "WordPress", icono: "skill-icons:wordpress", iconColor: "" }
    ]
  }
];

const TechStack = () => {
  return (
    <section className="tech-stack" id="tech-stack">
      <div className="contenedor-full">
        
        <div className="encabezado anim-scroll">
          <h2 className="titulo">Arsenal Tecnológico</h2>
          <p className="subtitulo">
            Enfocado en resolver problemáticas reales mediante herramientas conectadas y de nivel empresarial.
          </p>
        </div>

        {/* ESPECIALIDAD PRINCIPAL */}
        <div className="especialidad-container anim-scroll">
          <div className="especialidad-header">
            <h3 className="especialidad-titulo">{especialidad.titulo}</h3>
            <p className="especialidad-desc">{especialidad.descripcion}</p>
          </div>
          
          <div className="especialidad-grid">
            {especialidad.categorias.map((cat, i) => (
              <div key={i} className="especialidad-bloque">
                <h4 className="bloque-titulo">{cat.nombre}</h4>
                <div className="bloque-items">
                  {cat.tecnologias.map((tech, j) => (
                    <div key={j} className="pill-item core-pill">
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

        {/* HERRAMIENTAS COMPLEMENTARIAS */}
        <div className="complementos-container anim-scroll">
          <h3 className="complementos-titulo">Herramientas Complementarias</h3>
          
          <div className="complementos-grid">
            {complementos.map((cat, i) => (
              <div key={i} className="complemento-bloque">
                <h4 className="bloque-titulo-mini">{cat.titulo}</h4>
                <div className="bloque-items-mini">
                  {cat.tecnologias.map((tech, j) => (
                    <div key={j} className="pill-item-mini" title={tech.nombre}>
                      <Icon 
                        icon={tech.icono} 
                        className="pill-icon-mini" 
                        style={tech.iconColor ? { color: tech.iconColor } : {}}
                      />
                      <span className="pill-name-mini">{tech.nombre}</span>
                    </div>
                  ))}
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
