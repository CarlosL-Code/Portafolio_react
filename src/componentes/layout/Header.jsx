import './Header.css';
import DarkModeSwitch from '../DarkModeSwitch';
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <h2 className="titulo">Carlos Lozano</h2>
          <p className="subtitulo">Desarrollador de Software en formación</p>
        </div>
        <nav className="navbar">
          <a href="#acerca-de">Acerca de</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#trabajos">Trabajos</a>
          <a href="#contacto">Contacto</a>
          <a
          href="/carlos-lozano-silva-cv.pdf"
          className="btn-cv"
          download
        >
          Descargar CV
        </a>
        </nav>
        <DarkModeSwitch />
      </header>
    </>
  );
};

export default Header;
