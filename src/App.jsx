import Header from "./componentes/layout/Header";
import Hero from "./componentes/layout/Hero";
import AcercaDe from "./componentes/layout/AcercaDe";
import ExperienciaProfesional from "./componentes/layout/ExperienciaProfesional";
import Trabajos from "./componentes/layout/Trabajos";
import Habilidades from "./componentes/layout/Habilidades"; // kept for future use if needed
import Logros from "./componentes/layout/Logros"; // kept for future use if needed
import Contacto from "./componentes/layout/Contacto";
import Footer from "./componentes/layout/Footer";
import ComoTrabajo from "./componentes/layout/ComoTrabajo"; // kept for future use if needed
import FAQ from "./componentes/layout/FAQ";
import Clientes from "./componentes/layout/Clientes";
import CallToAction from "./componentes/layout/CallToAction";
import Planes from "./componentes/layout/Planes";

import { FaWhatsapp } from "react-icons/fa";
import useScrollAnimation from "./hooks/useScrollAnimation";

function App() {
  useScrollAnimation();

  return (
    <>
      <main className="contenedor">
        <Header />
        <Hero />
        <AcercaDe />
        <ExperienciaProfesional />
        <Clientes />
        <Trabajos />
        <Planes />
        <FAQ />
        <CallToAction />
        <Contacto />
        <Footer />
      </main>

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