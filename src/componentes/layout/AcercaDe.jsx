import { useState } from "react";
import "./AcercaDe.css";
import BlurText from "../ui/BlurText";

const AcercaDe = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="acerca-de" id="acerca-de">
      <div className="acerca-de-card">
        <div className="grid">

          {/* Columna imágenes */}
          <div className="col-1">
            <div className="fotos">
              <img src="/assets/yo.png" className="foto" alt="Carlos trabajando" loading="lazy" decoding="async" />
              <img src="/assets/acerca-de-2.png" className="foto" alt="Setup de trabajo" loading="lazy" decoding="async" />
            </div>
          </div>

          {/* Columna texto */}
          <div className="col-2">
            <h4 className="pre-titulo anim-scroll anim-right">Acerca de mi</h4>

            <BlurText
              text="Transformando ideas en arquitecturas escalables y rentables."
              delay={50}
              animateBy="words"
              direction="bottom"
              className="titulo blur-titulo"
              threshold={0.1}
            />

            {/* SIN anim-scroll para que el texto SIEMPRE sea visible */}
            <div className={`resumen-container ${isExpanded ? "expanded" : ""}`}>
              <p className="resumen">
                Soy Ingeniero en Informática en formación, enfocado en Frontend con React y Next.js:
                interfaces rápidas y mantenibles, con atención real al rendimiento medible (Core Web Vitals).
                Complemento ese trabajo con bases sólidas en Backend: Node.js, Laravel, Prisma y bases de
                datos relacionales (MySQL, PostgreSQL).
              </p>
              <p className="resumen extra-text">
                <br />
                Llevo cada proyecto de la idea a producción. He desarrollado tiendas online completas en
                Shopify, un sitio corporativo con Next.js, un sistema de gestión de inventario (MRP) en
                Laravel y automatización de procesos de facturación con Python. Mi enfoque no es solo
                escribir código limpio, sino alinear cada decisión técnica con los objetivos del negocio.
              </p>
            </div>

            {/* SIN anim-scroll para que el botón SIEMPRE sea visible */}
            <button
              className="btn-leer-mas"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Leer menos" : "Leer más..."}
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AcercaDe;
