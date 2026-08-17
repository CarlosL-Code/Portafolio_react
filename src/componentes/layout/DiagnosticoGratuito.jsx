import './DiagnosticoGratuito.css';
import { FaCheck, FaSearch } from 'react-icons/fa';

const DiagnosticoGratuito = () => {
  return (
    <section className="diagnostico-section">
      <div className="contenedor">
        <div className="diagnostico-container text-center">
          
          <div className="diagnostico-content">
            <div className="pre-titulo">SIN COMPROMISO</div>
            <h2 className="titulo">
              ¿No sabes por dónde empezar? <br />
              <span className="highlight-text">Pide un Diagnóstico Gratuito</span>
            </h2>
            <p className="subtitulo">
              Analizaremos tu sitio web actual (o tu idea de negocio) y te diremos exactamente qué está fallando y cómo estructurarlo para empezar a conseguir clientes por internet de verdad.
            </p>

            <ul className="diagnostico-beneficios">
              <li><FaCheck className="diag-check" /> Análisis de velocidad y usabilidad.</li>
              <li><FaCheck className="diag-check" /> Revisión de tu propuesta de valor y botones CTA.</li>
              <li><FaCheck className="diag-check" /> Propuesta de embudo de ventas adaptado a tu industria.</li>
            </ul>

            <a href="#contacto" className="btn-diagnostico">
              <FaSearch /> Solicitar Diagnóstico Ahora
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DiagnosticoGratuito;
