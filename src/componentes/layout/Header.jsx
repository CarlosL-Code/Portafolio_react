import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';
import DarkModeSwitch from '../DarkModeSwitch';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-top">
          <a href="/" className="logo" onClick={(e) => { e.preventDefault(); window.location.reload(); }} style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', cursor: 'pointer' }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="url(#grad_logo)"/>
              <defs>
                <linearGradient id="grad_logo" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="var(--primario)"/>
                  <stop offset="1" stopColor="#ff6b6b"/>
                </linearGradient>
              </defs>
              <text x="16" y="21" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="16" fill="white" textAnchor="middle" letterSpacing="-0.5">CL</text>
            </svg>
            <h2 className="titulo" style={{ color: 'inherit' }}>Carlos Lozano</h2>
          </a>
          
          {/* Botón Hamburguesa solo visible en móvil */}
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Abrir menú">
            <FaBars />
          </button>
        </div>

        {/* OVELAY OSCURO PARA MÓVIL */}
        <div 
          className={`mobile-overlay ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        ></div>

        <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
          {/* Botón de cerrar dentro del menú lateral en móvil */}
          <button className="close-menu" onClick={closeMenu} aria-label="Cerrar menú">
            <FaTimes />
          </button>

          <a href="#acerca-de" onClick={closeMenu}>Acerca de mí</a>
          <a href="#experiencia" onClick={closeMenu}>Experiencia</a>
          <a href="#trabajos" onClick={closeMenu}>Proyectos</a>
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
