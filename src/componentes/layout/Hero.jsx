import { useState } from 'react';
import { FaCheckCircle, FaChartLine, FaShoppingCart, FaAward, FaCogs, FaRegCompass, FaBolt, FaSearch, FaLock, FaRocket } from 'react-icons/fa';
import "./Hero.css";

const Hero = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 1, icon: <FaChartLine />, title: "Más clientes desde Google", desc: "Aparecer cuando mis clientes me buscan" },
    { id: 2, icon: <FaShoppingCart />, title: "Vender productos o servicios online", desc: "Tienda, catálogo o agendamiento" },
    { id: 3, icon: <FaAward />, title: "Profesionalizar mi negocio", desc: "Transmitir confianza y seriedad" },
    { id: 4, icon: <FaCogs />, title: "Automatizar procesos", desc: "Sistema o plataforma SaaS a medida" },
    { id: 5, icon: <FaRegCompass />, title: "Aún estoy explorando", desc: "Quiero asesoría sobre qué me conviene" }
  ];

  return (
    <section className="hero-premium">
      <div className="hero-background-overlay"></div>
      
      <div className="hero-container">
        <div className="hero-grid">
          
          {/* Columna Izquierda: Copywriting */}
          <div className="hero-copy">
            <div className="badge-profesional">
              <span className="badge-dot"></span> DESARROLLO WEB Y SOFTWARE - CHILE
            </div>
            
            <h1 className="hero-titulo">
              Más que un sitio web,<br/> un <span className="highlight-text">embudo de ventas</span>.
            </h1>
            
            <p className="hero-subtitulo">
              No te vendemos un folleto digital. Construimos un sistema activo que atrae visitas, las convierte en leads y los convierte en clientes. Eso es desarrollo de software hecho con resultados en mente.
            </p>
            
            <div className="hero-botones">
              <a href="#contacto" className="boton boton-primario">
                Cotiza tu proyecto
                <div className="icono">
                  <FaRocket />
                </div>
              </a>
              <a href="#trabajos" className="boton-fantasma">
                Ver casos de éxito
              </a>
            </div>
          </div>

          {/* Columna Derecha: Wizard Interactivo */}
          <div className="hero-wizard-wrapper">
            <div className="hero-wizard">
              <div className="wizard-header">
                <div>
                  <h3>Cotiza tu sitio</h3>
                  <p>Propuesta cerrada en menos de 24 h.</p>
                </div>
                <div className="wizard-steps">
                  <span className="step active">01</span>
                  <span className="step-line"></span>
                  <span className="step">02</span>
                  <span className="step-line"></span>
                  <span className="step">03</span>
                </div>
              </div>
              
              <div className="wizard-progress-bar">
                <div className="progress-fill" style={{ width: '33%' }}></div>
              </div>

              <h4 className="wizard-question">¿QUÉ QUIERES LOGRAR?</h4>

              <div className="wizard-options">
                {options.map((opt) => (
                  <div 
                    key={opt.id} 
                    className={`wizard-option ${selectedOption === opt.id ? 'selected' : ''}`}
                    onClick={() => setSelectedOption(opt.id)}
                  >
                    <div className="option-icon">{opt.icon}</div>
                    <div className="option-text">
                      <h5>{opt.title}</h5>
                      <p>{opt.desc}</p>
                    </div>
                    <div className="option-radio">
                      <div className="radio-inner"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Trust Bar (Barra de Confianza) */}
        <div className="hero-trust-bar">
          <div className="trust-item tech-stack">
            <div className="trust-icon"><FaRocket /></div>
            <div>
              <strong>React + Node.js</strong>
              <span>Stack moderno listo para escalar</span>
            </div>
          </div>
          <div className="trust-item">
            <FaBolt className="trust-icon-simple" /> 95+ PageSpeed
          </div>
          <div className="trust-item">
            <FaSearch className="trust-icon-simple" /> SEO técnico
          </div>
          <div className="trust-item">
            <FaLock className="trust-icon-simple" /> Seguridad
          </div>
          <div className="trust-item highlight">
            <FaChartLine className="trust-icon-simple" /> Optimizado para Conversión
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
