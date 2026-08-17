import './Proceso.css';

const Proceso = () => {
  const steps = [
    {
      id: 1,
      title: "Estrategia y Arquitectura",
      subtitle: "PASO 01",
      desc: "Antes de escribir código, analizamos cómo te buscan tus clientes en Google. Definimos la estructura SEO y el flujo de navegación para asegurar que el sitio convierta visitas en ventas."
    },
    {
      id: 2,
      title: "Diseño y Prototipo",
      subtitle: "PASO 02",
      desc: "Creamos un diseño orientado a conversión: jerarquía clara, botones visibles (CTAs), y mensajes persuasivos. Te lo aprobamos antes de programar — sin sorpresas ni tecnicismos."
    },
    {
      id: 3,
      title: "Desarrollo y Lanzamiento Rápido",
      subtitle: "PASO 03",
      desc: "Programamos tu sitio con tecnología moderna (React) para asegurar máxima velocidad (95+ PageSpeed). Tendrás tu MVP (Producto Mínimo Viable) 100% funcional en 3 a 5 semanas."
    }
  ];

  return (
    <section className="proceso-section">
      <div className="contenedor">
        
        <div className="encabezado">
          <div className="pre-titulo">CÓMO TRABAJAMOS</div>
          <h2 className="titulo">
            Un proceso <span className="highlight-text">claro y sin estrés</span>
          </h2>
          <p className="subtitulo">
            De la primera reunión al lanzamiento, sabes exactamente qué viene. Sin sorpresas ni dolores de cabeza.
          </p>
        </div>

        <div className="proceso-grid">
          {steps.map(step => (
            <div key={step.id} className="proceso-paso">
              <div className="proceso-numero">{step.id}</div>
              <div className="proceso-contenido">
                <div className="proceso-contenido-header">
                  <h3>{step.title}</h3>
                  <span className="paso-badge">{step.subtitle}</span>
                </div>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Proceso;
