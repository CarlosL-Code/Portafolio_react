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
                Soy estudiante de Ingeniería en Informática y Software Engineer apasionado por
                resolver problemas complejos mediante la tecnología. Aunque sigo mi formación
                académica, en el mundo real ya me especializo en diseñar arquitecturas robustas,
                automatizar flujos de trabajo empresariales y crear experiencias digitales de alto impacto.
              </p>
              <p className="resumen extra-text">
                <br />
                Mi trayectoria temprana incluye asumir la transformación digital end-to-end para
                empresas (desarrollo de e-commerce, integraciones de IA y automatización de sistemas ERP)
                y gestionar el despliegue técnico de infraestructuras a nivel internacional.
                Mi enfoque no es solo escribir código limpio, sino alinear cada decisión técnica
                con los objetivos comerciales para garantizar soluciones mantenibles, seguras y
                orientadas al ROI.
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
