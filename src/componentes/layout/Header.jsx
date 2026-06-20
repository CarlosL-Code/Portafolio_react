import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';
import DarkModeSwitch from '../DarkModeSwitch';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-top">
          <div className="logo">
            <h2 className="titulo">Carlos Lozano</h2>
            <p className="subtitulo">Desarrollador de Software en formación</p>
          </div>
          
          {/* Botón Hamburguesa solo visible en móvil */}
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Abrir menú">
            <FaBars />
          </button>
        </div>

        <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
          {/* Botón de cerrar dentro del menú lateral en móvil */}
          <button className="close-menu" onClick={closeMenu} aria-label="Cerrar menú">
            <FaTimes />
          </button>

          <a href="#acerca-de" onClick={closeMenu}>Acerca de</a>
          <a href="#habilidades" onClick={closeMenu}>Habilidades</a>
          <a href="#trabajos" onClick={closeMenu}>Trabajos</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
          <a
            href="/carlos-lozano-silva-cv.pdf"
            className="btn-cv"
            download
            onClick={closeMenu}
          >
            Descargar CV
          </a>
          {/* DarkModeSwitch dentro del menú en móvil para que quede alineado */}
          <div className="dark-mode-container">
            <DarkModeSwitch />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
