import './DiagnosticoGratuito.css';
import { FaCheck, FaSearch } from 'react-icons/fa';

const DiagnosticoGratuito = () => {
  return (
    <section className="diagnostico-section">
      <div className="contenedor">
        <div className="diagnostico-container">
          
          {/* Columna Izquierda: Texto y CTA */}
          <div className="diagnostico-content">
            <div className="pre-titulo">SIN COMPROMISO</div>
            <h2 className="titulo">
              ¿No sabes por dónde empezar? <br />
              <span className="highlight-text">Pide un Diagnóstico Gratuito</span>
            </h2>
            <p className="subtitulo">
              Analizaremos tu sitio web actual o idea de negocio, revelándote los puntos ciegos y la estructura exacta para conseguir clientes por internet.
            </p>

            <a href="#contacto" className="btn-diagnostico">
              <FaSearch /> Solicitar Diagnóstico Ahora
            </a>
          </div>

          {/* Columna Derecha: Reporte Visual */}
          <div className="diagnostico-reporte">
            <h4 className="reporte-titulo">¿Qué incluye el diagnóstico?</h4>
            <ul className="reporte-lista">
              <li>
                <div className="reporte-score green">98</div>
                <div className="reporte-texto">
                  <strong>Rendimiento & UX</strong>
                  <span>Auditoría de velocidad y usabilidad.</span>
                </div>
              </li>
              <li>
                <div className="reporte-score green">100</div>
                <div className="reporte-texto">
                  <strong>SEO Técnico</strong>
                  <span>Revisión de palabras clave y posicionamiento.</span>
                </div>
              </li>
              <li>
                <div className="reporte-score">CTA</div>
                <div className="reporte-texto">
                  <strong>Conversión</strong>
                  <span>Estrategia y embudo de ventas a tu medida.</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DiagnosticoGratuito;
