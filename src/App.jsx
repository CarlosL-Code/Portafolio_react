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
  return (
    <>
      <div className="contenedor">
        <Header />
        <Hero />
        <AcercaDe/>
        <Habilidades/>
        <ComoTrabajo />
        <Trabajos/>
        <Clientes/>
        <Contacto />
        <Footer/>
      </div>
    </>
  );
}

export default App;
