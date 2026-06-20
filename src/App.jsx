import Header from "./componentes/layout/Header";
import Hero from "./componentes/layout/Hero";
import AcercaDe from "./componentes/layout/AcercaDe";
import Habilidades from "./componentes/layout/Habilidades";
import Trabajos from "./componentes/layout/Trabajos";
import Clientes from "./componentes/layout/Clientes";
import Contacto from "./componentes/layout/Contacto";
import Footer from "./componentes/layout/Footer";
import ComoTrabajo from "./componentes/layout/ComoTrabajo";
import CallToAction from "./componentes/layout/CallToAction";

import { FaWhatsapp } from "react-icons/fa";

function App() {

  return (
    <>
      <div className="contenedor">
        <Header />
        <Hero />
        <AcercaDe />
        <ComoTrabajo />
        <Habilidades />
        <Clientes />
        <Trabajos />
        <CallToAction />
        <Contacto />
        <Footer />
      </div>

      {/* Botón flotante WhatsApp */}
      <a
        href="https://wa.me/56937540250"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-flotante"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </>
  );
}

export default App;