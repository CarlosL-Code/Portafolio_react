import './Comparativa.css';

const Comparativa = () => {
  return (
    <section className="comparativa-section seccion-alt">
      <div className="contenedor">
        
        <div className="encabezado">
          <h2 className="titulo">
            Por qué <span className="highlight-text">React a medida</span> es mejor que WordPress para SEO
          </h2>
        </div>

        <div className="comparativa-tabla-wrapper">
          <table className="comparativa-tabla">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th className="nuestro-lado">React a medida (lo que hacemos)</th>
                <th>WordPress típico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Velocidad de carga</td>
                <td className="texto-verde">~0.8s LCP</td>
                <td className="texto-rojo">3-6s LCP</td>
              </tr>
              <tr>
                <td>Puntaje PageSpeed</td>
                <td className="texto-verde">95-100</td>
                <td className="texto-rojo">40-70</td>
              </tr>
              <tr>
                <td>Vulnerabilidades</td>
                <td className="texto-verde">Mínimas (Código seguro)</td>
                <td className="texto-rojo">Plugins comprometidos frecuentes</td>
              </tr>
              <tr>
                <td>Mantenimiento mensual</td>
                <td className="texto-verde">Casi nulo</td>
                <td className="texto-rojo">Actualizaciones constantes</td>
              </tr>
              <tr>
                <td>SEO out-of-the-box</td>
                <td className="texto-verde">Excelente (Optimizado de raíz)</td>
                <td className="texto-naranja">Requiere múltiples plugins pesados</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default Comparativa;
