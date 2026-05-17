import "./Clientes.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const Clientes = () => {

  useScrollAnimation();

  return (
    <section className="clientes" id="clientes">

      {/* Encabezado */}
      <div className="encabezado">
        <h3 className="titulo">Mis clientes</h3>

        <p className="subtitulos">
          Estas marcas han confiado en mis servicios.
        </p>
      </div>

      {/* Logos */}
      <div className="logos">

        <img
          src="./assets/logos/paveleads.jpeg"
          alt="Logo de Paveleads"
          className="logo anim-scroll"
        />

        <img
          src="./assets/logos/carserv.png"
          alt="Logo de Carserv"
          className="logo anim-scroll"
        />

        <img
          src="./assets/logos/concesionaria.png"
          alt="Logo de Concesionaria"
          className="logo anim-scroll"
        />

        <img
          src="./assets/logos/primeros_resultados.png"
          alt="Logo de Primeros Resultados"
          className="logo anim-scroll"
        />

      </div>

    </section>
  );
};

export default Clientes;