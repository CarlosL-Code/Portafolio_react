import { useEffect } from "react";
import "./Clientes.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const Clientes = () => {

  useScrollAnimation();

  return (
    <section className="clientes">
      
      {/* Encabezado */}
      <div className="encabezado anim-scroll">
        <h3 className="titulo">Mis clientes</h3>
        <p className="subtitulos">
          Estas marcas han confiado en mis servicios.
        </p>
      </div>

      {/* Logos */}
      <div className="logos anim-scroll">
        <img
          src="./assets/logos/paveleads.jpeg"
          alt="Logo de Paveleads"
          className="logo"
        />
        <img
          src="./assets/logos/carserv.png"
          alt="Logo de Carserv"
          className="logo"
        />
      </div>

    </section>
  );
};

export default Clientes;
