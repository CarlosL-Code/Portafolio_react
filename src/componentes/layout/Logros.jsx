import "./Logros.css";

import { FaRocket, FaHandshake, FaChartLine, FaShieldAlt } from "react-icons/fa";

const logrosData = [
  {
    id: 1,
    icono: <FaRocket />,
    titulo: "Liderazgo y Ejecución",
    descripcion: "Capacidad para tomar propiedad de proyectos desde la concepción hasta el despliegue, asegurando entregas a tiempo y con altos estándares técnicos."
  },
  {
    id: 2,
    icono: <FaChartLine />,
    titulo: "Optimización de Procesos",
    descripcion: "Enfoque constante en la automatización de flujos de trabajo (como Kame ERP) para reducir tareas manuales, disminuir errores y ahorrar costos operativos."
  },
  {
    id: 3,
    icono: <FaHandshake />,
    titulo: "Visión Comercial y UX",
    descripcion: "No solo escribo código; entiendo los objetivos del negocio y priorizo la experiencia del usuario final para construir productos que realmente conviertan."
  },
  {
    id: 4,
    icono: <FaShieldAlt />,
    titulo: "Calidad y Mantenibilidad",
    descripcion: "Desarrollo con arquitectura escalable, código limpio y prácticas modernas (SEO técnico, rendimiento) para asegurar que el software perdure y crezca."
  }
];

const Logros = () => {
  

  return (
    <section className="logros" id="logros">
      <div className="contenedor">
        
        {/* Encabezado */}
        <div className="encabezado anim-scroll">
          <h2 className="titulo">¿Qué puedo aportar a tu empresa?</h2>
          <p className="subtitulo">
            Más allá de las herramientas, ofrezco resultados tangibles y visión estratégica.
          </p>
        </div>

        {/* Grid de Aportes */}
        <div className="logros-grid">
          {logrosData.map((logro) => (
            <div key={logro.id} className="logro-card anim-scroll">
              <div className="logro-icono">
                {logro.icono}
              </div>
              <div className="logro-contenido">
                <h3>{logro.titulo}</h3>
                <p>{logro.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Logros;
