import { useEffect } from "react";
import "./AcercaDe.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const AcercaDe = () => {

  useScrollAnimation();


  return (
    <section className="acerca-de" id="acerca-de">
      <div className="grid">
        
        {/* Columna imágenes */}
        <div className="col-1 anim-scroll anim-left">
          <div className="fotos">
            <img src="/assets/acerca-de-1.jpg" className="foto" alt="Carlos trabajando" loading="lazy" decoding="async" />
            <img src="/assets/acerca-de-2.png" className="foto" alt="Setup de trabajo" loading="lazy" decoding="async" />
          </div>
        </div>

        {/* Columna texto */}
        <div className="col-2 anim-scroll anim-right">
          <h4 className="pre-titulo">Acerca de mi</h4>

          <h3 className="titulo">
            Transformando ideas en arquitecturas escalables y rentables.
          </h3>

          <p className="resumen">
            Soy estudiante de Ingeniería en Informática y Software Engineer apasionado por resolver problemas complejos mediante la tecnología. 
            Aunque sigo mi formación académica, en el mundo real ya me especializo en diseñar arquitecturas robustas, automatizar flujos de trabajo empresariales y crear experiencias digitales de alto impacto. 
            <br /><br />
            Mi trayectoria temprana incluye asumir la transformación digital end-to-end para empresas (desarrollo de e-commerce, integraciones de IA y automatización de sistemas ERP) 
            y gestionar el despliegue técnico de infraestructuras a nivel internacional. Mi enfoque no es solo escribir código limpio, 
            sino alinear cada decisión técnica con los objetivos comerciales para garantizar soluciones mantenibles, seguras y orientadas al ROI.
          </p>

          <a href="#contacto" className="boton">
            Mandame un mensaje
            <span className="icono">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AcercaDe;