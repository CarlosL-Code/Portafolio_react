import { useState } from "react";
import "./FAQ.css";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    pregunta: "¿Qué incluye el desarrollo web?",
    respuesta: "Incluye todo lo necesario para vender: Diseño UX/UI orientado a conversión, desarrollo a medida en React, optimización SEO técnica, velocidad de carga extrema (PageSpeed 95+), integración con WhatsApp y formularios, y adaptación perfecta a dispositivos móviles."
  },
  {
    pregunta: "¿Cuánto cuesta una página web profesional en Chile?",
    respuesta: "Cada proyecto es único y depende de los requerimientos específicos (ej. una landing page es diferente a un sistema de agendamiento o un catálogo). Contáctanos para cotizar tu proyecto; te entregaremos una propuesta cerrada y transparente en menos de 24 horas."
  },
  {
    pregunta: "¿Trabajas con WordPress?",
    respuesta: "No. Para garantizar velocidad extrema, máxima seguridad y el mejor posicionamiento SEO, desarrollamos tu sitio web con código a medida utilizando tecnologías modernas (React y Node.js). WordPress suele ser lento y vulnerable si no se mantiene constantemente."
  },
  {
    pregunta: "¿Cuánto demora un proyecto de desarrollo web?",
    respuesta: "Nuestro compromiso es agilidad sin sacrificar calidad. Dependiendo de la complejidad, tendrás tu Producto Mínimo Viable (MVP) 100% funcional y listo para recibir clientes en un plazo de 3 a 5 semanas."
  },
  {
    pregunta: "¿Puedes migrar mi sitio actual de WordPress/Wix a React?",
    respuesta: "Sí. Evaluamos tu sitio actual, rescatamos el contenido de valor y lo reconstruimos desde cero en React para que disfrutes de tiempos de carga de menos de un segundo y mejor posicionamiento en Google."
  },
  {
    pregunta: "¿Qué pasa después de entregado el sitio?",
    respuesta: "Te entregamos el sitio funcionando y te enseñamos a usarlo. Además, incluimos un mes de soporte técnico gratuito. Si lo deseas, puedes optar por nuestros planes de mantención para despreocuparte por completo de los aspectos técnicos."
  },
  {
    pregunta: "¿Cómo influye la velocidad del sitio en el SEO?",
    respuesta: "Es vital. Google penaliza los sitios que demoran más de 3 segundos en cargar, y el 53% de los usuarios abandona una página si es lenta. Al programar a medida, logramos tiempos de carga menores a 1 segundo, dándote una ventaja injusta sobre tu competencia."
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
