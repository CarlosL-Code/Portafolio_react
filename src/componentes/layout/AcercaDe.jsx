import { useState } from "react";
import "./AcercaDe.css";
import BlurText from "../ui/BlurText";

const AcercaDe = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="acerca-de" id="acerca-de">
        <div className="acerca-de-card">
          <div className="grid">
          
          {/* Columna imǭgenes */}
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

            <div className={`resumen-container anim-scroll anim-right ${isExpanded ? "expanded" : ""}`}>
              <p className="resumen">
                Soy estudiante de Ingeniera en Informǭtica y Software Engineer apasionado por resolver problemas complejos mediante la tecnologa. 
                Aunque sigo mi formacin acadǸmica, en el mundo real ya me especializo en disear arquitecturas robustas, automatizar flujos de trabajo empresariales y crear experiencias digitales de alto impacto. 
              </p>
              <p className="resumen extra-text">
                <br />
                Mi trayectoria temprana incluye asumir la transformacin digital end-to-end para empresas (desarrollo de e-commerce, integraciones de IA y automatizacin de sistemas ERP) 
                y gestionar el despliegue tǸcnico de infraestructuras a nivel internacional. Mi enfoque no es solo escribir cdigo limpio, 
                sino alinear cada decisin tǸcnica con los objetivos comerciales para garantizar soluciones mantenibles, seguras y orientadas al ROI.
              </p>
            </div>
            
            <button 
              className="anim-scroll anim-right btn-texto" 
              onClick={() => setIsExpanded(!isExpanded)}
              style={{
                background: 'none', border: 'none', padding: 0, margin: 0,
                color: 'var(--primario)', cursor: 'pointer', fontWeight: 600,
                textDecoration: 'underline', fontSize: '16px'
              }}
            >
              {isExpanded ? "Leer menos" : "Leer mǭs..."}
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AcercaDe;
