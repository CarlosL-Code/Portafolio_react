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
              <img src="/assets/acerca-de-1.jpg" className="foto" alt="Carlos trabajando" loading="lazy" decoding="async" />
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
                Soy Ingeniero en Informática en formación, con experiencia práctica en proyectos reales.
                Me especializo en construir desde cero: frontends modernos, APIs, sistemas empresariales y automatizaciones.
              </p>
              <p className="resumen extra-text">
                <br />
                Cada proyecto que tomo lo llevo de la idea hasta producción. He asumido el desarrollo 
                end-to-end de sitios corporativos, e-commerce, integraciones de IA, despliegues IoT
                y automatizaciones de procesos internos (ERP). Mi enfoque no es solo escribir código limpio, 
                sino alinear cada decisión técnica con los objetivos del negocio y crear arquitecturas escalables.
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
