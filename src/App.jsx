import { useEffect } from "react";
import Header from "./componentes/layout/Header";
import Hero from "./componentes/layout/Hero";
import AcercaDe from "./componentes/layout/AcercaDe";
import Habilidades from "./componentes/layout/Habilidades";
import Trabajos from "./componentes/layout/Trabajos";
import Clientes from "./componentes/layout/Clientes";
import Contacto from "./componentes/layout/Contacto";
import Footer from "./componentes/layout/Footer";
import ComoTrabajo from "./componentes/layout/ComoTrabajo";

function App() {

  useEffect(() => {
    const navbar = document.querySelector("header"); // tu Header
    const botonCV = document.getElementById("botonCV");

    if (!navbar || !botonCV) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Navbar visible → ocultar botón
            botonCV.classList.remove("visible");
          } else {
            // Navbar invisible → mostrar botón
            botonCV.classList.add("visible");
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(navbar);

    return () => observer.disconnect();
  }, []);

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
        <Contacto />
        <Footer />
      </div>

      {/* Botón flotante para descargar CV */}
      <a
        href="/carlos-lozano-silva-cv.pdf"
        download
        className="boton-flotante"
        id="botonCV"
      >
       
        CV
      </a>
    </>
  );
}

export default App;
