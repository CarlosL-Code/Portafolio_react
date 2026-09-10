import './MensajeImpacto.css';
import { FaCodeBranch } from 'react-icons/fa';

const MensajeImpacto = () => {
  return (
    <section className="mensaje-impacto-section">
      <div className="contenedor">
        <div className="impacto-card anim-scroll">
          <div className="impacto-decoracion"></div>
          
          <div className="impacto-contenido">
            <div className="impacto-icono">
              <FaCodeBranch />
            </div>
            
            <h2 className="impacto-texto">
              "Busco equipos donde pueda aportar <span className="highlight">creando soluciones técnicas de alto nivel</span>, desde la arquitectura hasta el despliegue."
            </h2>
            
            <p className="impacto-subtexto" style={{ marginBottom: '30px' }}>
              Si buscas un desarrollador comprometido con entregar resultados que impacten.
            </p>
            
            <a href="#contacto" className="boton btn-primario">
              Hablemos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MensajeImpacto;
