import { useState } from "react";
import "./FAQ.css";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    pregunta: "¿Cuánto tiempo toma desarrollar una página web o sistema?",
    respuesta: "Depende de la complejidad. Una web corporativa o landing page puede estar lista en 1 a 2 semanas. Sistemas a medida o tiendas online más complejas suelen tomar entre 3 a 6 semanas."
  },
  {
    pregunta: "¿Tengo que pagar una mensualidad obligatoria?",
    respuesta: "No necesariamente. Ofrezco planes de pago único donde la web es 100% tuya, y también planes mensuales si prefieres que yo me encargue del hosting y la mantención continua."
  },
  {
    pregunta: "¿Mi sitio web estará adaptado para celulares?",
    respuesta: "Sí, absolutamente. Todos los proyectos que desarrollo son 'Responsive', lo que significa que se verán y funcionarán perfectamente en celulares, tablets y computadoras."
  },
  {
    pregunta: "¿Qué pasa si necesito ayuda después de entregado el proyecto?",
    respuesta: "Todos mis proyectos incluyen un periodo de soporte técnico gratuito (generalmente de 1 a 3 meses) para resolver dudas o problemas. Luego de eso, puedes contratar un plan de mantención si lo deseas."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="contenedor">
        <div className="encabezado anim-scroll">
          <h2 className="titulo">Preguntas Frecuentes</h2>
          <p className="subtitulo">
            Resuelvo tus dudas más comunes antes de empezar a trabajar juntos.
          </p>
        </div>

        <div className="faq-lista anim-scroll">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? "activo" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-pregunta">
                <h3>{faq.pregunta}</h3>
                <span className="faq-icono">
                  <FaChevronDown />
                </span>
              </div>
              <div 
                className="faq-respuesta" 
                style={{ 
                  maxHeight: activeIndex === index ? "200px" : "0",
                  opacity: activeIndex === index ? "1" : "0"
                }}
              >
                <p>{faq.respuesta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
