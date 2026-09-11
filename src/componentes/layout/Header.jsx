import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import './Header.css';
import DarkModeSwitch from '../DarkModeSwitch';
import SpecularButton from '../ui/SpecularButton';
import useOverHero from '../../hooks/useOverHero';

const Header = ({ currency, setCurrency }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const currencyRef = useRef(null);
  const overHero = useOverHero();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (currencyRef.current && !currencyRef.current.contains(e.target)) {
        setIsCurrencyOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
      <header className={`header ${scrolled ? 'scrolled' : ''} ${overHero ? 'on-dark' : ''}`}>
        <div className="header-top">
          <Link to="/" className="logo" onClick={() => window.scrollTo(0,0)} style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', cursor: 'pointer' }}>
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
            <h2 className="titulo">Carlos Lozano</h2>
          </Link>
          
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

          <div className="nav-links">
            <Link to="/" onClick={() => { closeMenu(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>Inicio</Link>
            <a href="/#trabajos" onClick={(e) => {
              e.preventDefault();
              closeMenu();
              if (window.location.pathname !== '/') {
                window.location.href = '/#trabajos';
              } else {
                const el = document.getElementById('trabajos');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}>Proyectos</a>
            <a href="/#contacto" onClick={(e) => {
              e.preventDefault();
              closeMenu();
              if (window.location.pathname !== '/') {
                window.location.href = '/#contacto';
              } else {
                const el = document.getElementById('contacto');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}>Contacto</a>
          </div>

          {/* Acciones extra en el nav */}
          <div className="header-actions-container">
            <SpecularButton href="/carlos-lozano-silva-cv.pdf" target="_blank" size="md" onClick={closeMenu} className="btn-cv">Descargar CV</SpecularButton>
            <div className="dark-mode-container">
              <DarkModeSwitch />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
