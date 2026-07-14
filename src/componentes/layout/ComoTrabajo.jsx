import "./ComoTrabajo.css";

import { FaSearch, FaCode, FaRocket } from "react-icons/fa";

const ComoTrabajo = () => {
  

  return (
    <section className="como-trabajo" id="como-trabajo">
      <div className="contenedor">

        {/* Encabezado */}
        <div className="encabezado anim-scroll">
          <h3 className="titulo">Cómo trabajo</h3>
          <p className="subtitulo">
            Un proceso claro, profesional y enfocado en resultados.
          </p>
        </div>

        {/* Grid */}
        <div className="grid">

          {/* Paso 1 */}
          <div className="card anim-scroll anim-left">
            <div className="icono">
              <FaSearch />
            </div>
            <h4>Análisis y planificación</h4>
            <p>
              Analizo las necesidades del proyecto, los objetivos del cliente
              y el contexto del negocio para proponer una solución clara,
              realista y bien definida.
            </p>
          </div>

          {/* Paso 2 */}
          <div className="card anim-scroll">
            <div className="icono">
              <FaCode />
            </div>
            <h4>Desarrollo y validación</h4>
            <p>
              Desarrollo soluciones funcionales aplicando buenas prácticas,
              código limpio y tecnologías adecuadas, manteniendo comunicación
              constante durante el proceso.
            </p>
          </div>

          {/* Paso 3 */}
          <div className="card anim-scroll anim-right">
            <div className="icono">
              <FaRocket />
            </div>
            <h4>Entrega y soporte</h4>
            <p>
              Realizo la puesta en producción, configuración técnica y
              acompañamiento inicial para asegurar que el proyecto funcione
              correctamente.
            </p>
          </div>

        </div>

        {/* Frase final */}
        <p className="frase-final anim-scroll">
          Cada proyecto es distinto, pero el compromiso con la calidad es siempre el mismo.
        </p>

      </div>
    </section>
  );
};

export default ComoTrabajo;
