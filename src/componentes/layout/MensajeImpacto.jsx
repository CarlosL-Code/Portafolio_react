import './MensajeImpacto.css';
import { FaRocket } from 'react-icons/fa';

const MensajeImpacto = () => {
  return (
    <section className="mensaje-impacto-section">
      <div className="contenedor">
        <div className="impacto-card anim-scroll">
          <div className="impacto-decoracion"></div>
          
          <div className="impacto-contenido">
            <div className="impacto-icono">
              <FaRocket />
            </div>
            
            <h2 className="impacto-texto">
              "No vendemos folletos digitales. Construimos sistemas activos que atraen visitas, las convierten en prospectos y <span className="highlight">los transforman en clientes</span>."
            </h2>
            
            <p className="impacto-subtexto">
              Esa es la diferencia entre un gasto y una inversión con retorno real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MensajeImpacto;
