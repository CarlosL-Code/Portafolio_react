import { useState } from 'react';
import { Icon } from '@iconify/react';
import './TechStack.css';

const categorias = [
  {
    id: "frontend",
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
    id: "backend",
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
    id: "herramientas",
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
  const [activa, setActiva] = useState(categorias[0].id);
  const categoriaActiva = categorias.find((cat) => cat.id === activa);

  return (
    <section className="tech-stack" id="tech-stack">
      <div className="contenedor-full">

        <div className="encabezado anim-scroll">
          <h2 className="titulo">Tecnologías y Herramientas</h2>
          <p className="subtitulo">
            El stack que uso día a día para construir y mantener aplicaciones reales.
          </p>
        </div>

        <div className="tech-tabs anim-scroll" role="tablist" aria-label="Categorías de tecnologías">
          {categorias.map((cat) => (
            <button
              key={cat.id}
              type="button"
              id={`tech-tab-${cat.id}`}
              role="tab"
              aria-selected={activa === cat.id}
              aria-controls="tech-panel"
              className={`tech-tab ${activa === cat.id ? "activo" : ""}`}
              onClick={() => setActiva(cat.id)}
            >
              {cat.nombre}
            </button>
          ))}
        </div>

        <div
          className="tech-lista anim-scroll"
          id="tech-panel"
          role="tabpanel"
          aria-labelledby={`tech-tab-${activa}`}
          key={activa}
        >
          {categoriaActiva.tecnologias.map((tech, i) => (
            <div key={i} className="tech-pill">
              <div className="tech-pill-icon-wrap">
                <Icon icon={tech.icono} className="tech-pill-icon" />
              </div>
              <span className="tech-pill-nombre">{tech.nombre}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
