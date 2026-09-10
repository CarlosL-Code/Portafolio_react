import { Icon } from '@iconify/react';
import './TechStack.css';

const categorias = [
  {
    nombre: "Frontend",
    tecnologias: [
      { nombre: "HTML", icono: "logos:html-5" },
      { nombre: "CSS", icono: "logos:css-3" },
      { nombre: "JavaScript", icono: "logos:javascript" },
      { nombre: "TypeScript", icono: "logos:typescript-icon" },
      { nombre: "React", icono: "logos:react" },
      { nombre: "Next.js", icono: "logos:nextjs-icon" },
      { nombre: "Angular", icono: "logos:angular-icon" }
    ]
  },
  {
    nombre: "Backend",
    tecnologias: [
      { nombre: "PHP", icono: "logos:php" },
      { nombre: "Laravel", icono: "logos:laravel" },
      { nombre: "Node.js", icono: "logos:nodejs-icon" },
      { nombre: "Prisma", icono: "logos:prisma" },
      { nombre: "MySQL", icono: "logos:mysql-icon" },
      { nombre: "PostgreSQL", icono: "logos:postgresql" }
    ]
  },
  {
    nombre: "Herramientas",
    tecnologias: [
      { nombre: "Git", icono: "logos:git-icon" },
      { nombre: "GitHub", icono: "logos:github-icon" },
      { nombre: "Docker", icono: "logos:docker-icon" },
      { nombre: "Postman", icono: "logos:postman-icon" },
      { nombre: "Figma", icono: "logos:figma" }
    ]
  }
];

const TechStack = () => {
  return (
    <section className="tech-stack" id="tech-stack">
      <div className="contenedor-full">

        <div className="encabezado anim-scroll">
          <h2 className="titulo">Tecnologías y Herramientas</h2>
          <p className="subtitulo">
            El stack que uso día a día para construir y mantener aplicaciones reales.
          </p>
        </div>

        <div className="tech-categorias">
          {categorias.map((cat, i) => (
            <div key={i} className="tech-categoria anim-scroll">
              <h3 className="tech-categoria-titulo">{cat.nombre}</h3>
              <div className="tech-grid">
                {cat.tecnologias.map((tech, j) => (
                  <div key={j} className="tech-card">
                    <div className="tech-card-icon-wrap">
                      <Icon icon={tech.icono} className="tech-card-icon" />
                    </div>
                    <span className="tech-card-nombre">{tech.nombre}</span>
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
