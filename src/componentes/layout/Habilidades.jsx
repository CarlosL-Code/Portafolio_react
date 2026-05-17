import "./Habilidades.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaJava,
  FaGitAlt,
  FaDocker,
  FaCode,
} from "react-icons/fa";

import { SiMysql, SiPython, SiWordpress } from "react-icons/si";
import { MdSmartToy } from "react-icons/md";

const Habilidades = () => {
  useScrollAnimation();

  return (
    <section
      className="habilidades anim-scroll anim-fade"
      id="habilidades"
    >
      <div className="contenedor">

        <div className="encabezado anim-scroll anim-fade">
          <h2 className="titulo">Habilidades Técnicas</h2>

          <p className="subtitulo">
            Tecnologías y herramientas con las que trabajo actualmente
          </p>
        </div>

        <div className="habilidades-grid">

          {/* Frontend */}
          <div className="habilidad-card anim-scroll">
            <h3>Frontend</h3>

            <ul className="habilidad-lista">
              <li className="habilidad-item">
                <span className="habilidad-icono">
                  <FaHtml5 />
                </span>
                HTML5
              </li>

              <li className="habilidad-item">
                <span className="habilidad-icono">
                  <FaCss3Alt />
                </span>
                CSS3
              </li>

              <li className="habilidad-item">
                <span className="habilidad-icono">
                  <FaJs />
                </span>
                JavaScript
              </li>

              <li className="habilidad-item">
                <span className="habilidad-icono">
                  <FaReact />
                </span>
                React
              </li>

              <li className="habilidad-item">
                <span className="habilidad-icono">
                  <FaCode />
                </span>
                Vite
              </li>
            </ul>
          </div>

          {/* Backend */}
          <div className="habilidad-card anim-scroll">
            <h3>Backend</h3>

            <ul className="habilidad-lista">
              <li className="habilidad-item">
                <span className="habilidad-icono">
                  <FaPhp />
                </span>
                PHP
              </li>

              <li className="habilidad-item">
                <span className="habilidad-icono">
                  <FaCode />
                </span>
                .NET
              </li>

              <li className="habilidad-item">
                <span className="habilidad-icono">
                  <FaJava />
                </span>
                Java
              </li>

              <li className="habilidad-item">
                <span className="habilidad-icono">
                  <SiPython />
                </span>
                Python
              </li>

              <li className="habilidad-item">
                <span className="habilidad-icono">
                  <SiMysql />
                </span>
                MySQL
              </li>
            </ul>
          </div>

          {/* Herramientas */}
          <div className="habilidad-card anim-scroll">
            <h3>Herramientas</h3>

            <ul className="habilidad-lista">
              <li className="habilidad-item">
                <span className="habilidad-icono">
                  <FaGitAlt />
                </span>
                Git / GitHub
              </li>

              <li className="habilidad-item">
                <span className="habilidad-icono">
                  <SiWordpress />
                </span>
                WordPress
              </li>

              <li className="habilidad-item">
                <span className="habilidad-icono">
                  <MdSmartToy />
                </span>
                IA
              </li>

              <li className="habilidad-item">
                <span className="habilidad-icono">
                  <FaDocker />
                </span>
                Docker
              </li>

              <li className="habilidad-item">
                <span className="habilidad-icono">
                  <FaCode />
                </span>
                Azure
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Habilidades;