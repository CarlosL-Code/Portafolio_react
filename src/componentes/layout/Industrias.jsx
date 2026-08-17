import { FaTooth, FaStethoscope, FaPaw, FaBrain, FaCar, FaHome, FaArrowRight } from 'react-icons/fa';
import './Industrias.css';

const Industrias = () => {
  const industrias = [
    {
      id: 1,
      icon: <FaTooth />,
      title: "Página web para dentistas",
      desc: "Sitios para clínicas y consultas dentales con agendamiento online y SEO local."
    },
    {
      id: 2,
      icon: <FaStethoscope />,
      title: "Página web para clínica médica",
      desc: "Sitios profesionales para clínicas, centros médicos y consultas privadas."
    },
    {
      id: 3,
      icon: <FaPaw />,
      title: "Página web para veterinaria",
      desc: "Agendamiento por servicio, recordatorios de vacunas y emergencia 24/7."
    },
    {
      id: 4,
      icon: <FaBrain />,
      title: "Página web para psicólogos",
      desc: "Agenda online, sesiones presenciales u online y páginas por especialidad."
    },
    {
      id: 5,
      icon: <FaCar />,
      title: "Sistema para automotoras",
      desc: "Catálogo de vehículos, gestión de leads, financiamiento y portal interno."
    },
    {
      id: 6,
      icon: <FaHome />,
      title: "Página web para inmobiliarias",
      desc: "Búsqueda avanzada de propiedades, captación de leads y gestión interna."
    }
  ];

  return (
    <section className="industrias seccion-alt">
      <div className="contenedor">
        
        <div className="encabezado">
          <div className="pre-titulo">ESPECIALIZACIÓN</div>
          <h2 className="titulo">
            Desarrollo web <span className="highlight-text">por industria</span>
          </h2>
          <p className="subtitulo">
            Cada industria tiene sus propios desafíos: agendamiento, catálogos, generación de confianza o captación de leads. Diseñamos sistemas específicos para cada una.
          </p>
        </div>

        <div className="industrias-grid">
          {industrias.map(ind => (
            <div key={ind.id} className="industria-card">
              <div className="industria-icon">
                {ind.icon}
              </div>
              <h3 className="industria-title">{ind.title}</h3>
              <p className="industria-desc">{ind.desc}</p>
              <button className="industria-btn">
                Ver más <FaArrowRight className="btn-arrow" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industrias;
