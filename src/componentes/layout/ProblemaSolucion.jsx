import './ProblemaSolucion.css';
import { FaRegSadTear, FaCheckCircle, FaChartLine } from 'react-icons/fa';

const ProblemaSolucion = () => {
  return (
    <section className="problema-solucion seccion-alt" id="problema-solucion">
      <div className="contenedor">
        
        <div className="encabezado">
          <div className="pre-titulo">EL PROBLEMA</div>
          <h2 className="titulo">
            Tener una web <span className="highlight-text">no sirve de nada</span> si no trae clientes
          </h2>
          <p className="subtitulo">
            Muchos negocios invierten en sitios web que terminan siendo folletos digitales estáticos. Nadie los visita, nadie interactúa, y lo peor: nadie compra.
          </p>
        </div>

        <div className="ps-grid">
          
          <div className="ps-card problema">
            <div className="ps-icon problema-icon">
              <FaRegSadTear />
            </div>
            <h3>El enfoque tradicional</h3>
            <ul className="ps-lista">
              <li>Páginas lentas hechas con plantillas pesadas.</li>
              <li>Diseños genéricos que no generan confianza.</li>
              <li>Cero optimización para aparecer en Google.</li>
              <li>Sin estrategia para captar los datos del visitante.</li>
            </ul>
          </div>

          <div className="ps-card solucion">
            <div className="ps-icon solucion-icon">
              <FaChartLine />
            </div>
            <h3>Nuestra solución a medida</h3>
            <ul className="ps-lista">
              <li><FaCheckCircle className="check-icon" /> Velocidad de carga extrema (menos de 1 segundo).</li>
              <li><FaCheckCircle className="check-icon" /> Diseño 100% original enfocado en conversiones.</li>
              <li><FaCheckCircle className="check-icon" /> Estructura SEO técnica para dominar Google.</li>
              <li><FaCheckCircle className="check-icon" /> Embudos de venta, llamadas a la acción y captación activa.</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProblemaSolucion;
