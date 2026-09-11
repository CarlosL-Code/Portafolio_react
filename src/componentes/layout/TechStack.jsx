import { Icon } from '@iconify/react';
import './TechStack.css';

const categorias = [
  {
    id: "frontend",
    nombre: "Frontend",
    simbolo: "01",
    descripcion: "Interfaces claras, dinámicas y adaptables a cualquier pantalla.",
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
    simbolo: "02",
    descripcion: "La lógica, los datos y las conexiones que hacen funcionar cada proyecto.",
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
    simbolo: "03",
    descripcion: "Del diseño al despliegue, un flujo de trabajo organizado y colaborativo.",
    tecnologias: [
      { nombre: "Git", icono: "logos:git-icon" },
      { nombre: "GitHub", icono: "logos:github-icon" },
      { nombre: "Docker", icono: "logos:docker-icon" },
      { nombre: "Postman", icono: "logos:postman-icon" },
      { nombre: "Figma", icono: "logos:figma" }
    ]
  }
];

const TechStack = () => (
  <section className="tech-stack" id="tech-stack" aria-labelledby="tech-stack-title">
    <div className="contenedor-full">
      <div className="encabezado anim-scroll">
        <span className="tech-eyebrow">MI STACK DE DESARROLLO</span>
        <h2 className="titulo" id="tech-stack-title">Tecnologías y herramientas</h2>
        <p className="subtitulo">
          De la interfaz a los datos. El stack que uso para construir y mantener aplicaciones reales.
        </p>
      </div>

      <div className="tech-categorias">
        {categorias.map((categoria) => (
          <article
            className={`tech-categoria tech-categoria--${categoria.id} anim-scroll`}
            key={categoria.id}
            aria-labelledby={`tech-heading-${categoria.id}`}
          >
            <div className="tech-categoria-top">
              <span className="tech-category-symbol" aria-hidden="true">
                {categoria.id === 'frontend' ? '</>' : categoria.id === 'backend' ? '{ }' : '+ /'}
              </span>
              <span className="tech-category-number" aria-hidden="true">{categoria.simbolo}</span>
            </div>
            <h3 id={`tech-heading-${categoria.id}`}>{categoria.nombre}</h3>
            <p className="tech-descripcion">{categoria.descripcion}</p>
            <ul className="tech-lista" aria-label={`Tecnologías de ${categoria.nombre}`}>
              {categoria.tecnologias.map((tech) => (
                <li key={tech.nombre} className="tech-item">
                  <span className="tech-icon-wrap" aria-hidden="true">
                    <Icon icon={tech.icono} className="tech-icon" />
                  </span>
                  <span>{tech.nombre}</span>
                </li>
              ))}
            </ul>
            <div className="tech-categoria-footer">
              <span className="tech-footer-dot" aria-hidden="true" />
              {categoria.tecnologias.length} tecnologías
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
