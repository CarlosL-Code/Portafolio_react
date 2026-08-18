import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import './Header.css';
import DarkModeSwitch from '../DarkModeSwitch';

const Header = ({ currency, setCurrency }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const currencyRef = useRef(null);

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
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
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
            <h2 className="titulo" style={{ color: 'inherit' }}>Carlos Lozano</h2>
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
            <Link to="/" onClick={() => { closeMenu(); window.scrollTo(0,0); }}>Inicio</Link>
            <div className="nav-item-dropdown">
              <span className="nav-link-dropdown">Servicios <FaChevronDown className="dropdown-icon" /></span>
              <div className="dropdown-menu">
                <Link to="/desarrollo-web" onClick={() => { closeMenu(); window.scrollTo(0,0); }}>Desarrollo Web</Link>
                <Link to="/software-a-medida" onClick={() => { closeMenu(); window.scrollTo(0,0); }}>Software a Medida</Link>
                <Link to="/sistemas-empresariales" onClick={() => { closeMenu(); window.scrollTo(0,0); }}>Sistemas Empresariales</Link>
              </div>
            </div>
            <Link to="/proyectos" onClick={() => { closeMenu(); window.scrollTo(0,0); }}>Proyectos</Link>
            <Link to="/contacto" onClick={() => { closeMenu(); window.scrollTo(0,0); }}>Contacto</Link>
          </div>

          {/* Acciones extra en el nav */}
          <div className="header-actions-container">
            <a
              href="/carlos-lozano-silva-cv.pdf"
              className="btn-cv"
              download
              onClick={closeMenu}
            >
              Descargar CV
            </a>
            <div className="currency-dropdown" ref={currencyRef}>
              <button 
                className="currency-btn" 
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                aria-label="Seleccionar Moneda"
              >
                <span className="currency-flag" style={{ display: 'flex', alignItems: 'center' }}>
                  <img 
                    src={`https://flagcdn.com/w20/${currency === 'CLP' ? 'cl' : currency === 'USD' ? 'us' : 'ar'}.png`} 
                    srcSet={`https://flagcdn.com/w40/${currency === 'CLP' ? 'cl' : currency === 'USD' ? 'us' : 'ar'}.png 2x`} 
                    width="18" 
                    alt={currency} 
                    style={{ borderRadius: '2px' }}
                  />
                </span>
                <span className="currency-code">{currency}</span>
                <FaChevronDown className={`currency-chevron ${isCurrencyOpen ? 'open' : ''}`} />
              </button>
              {isCurrencyOpen && (
                <div className="currency-menu">
                  {[{code: 'CLP', img: 'cl', name: 'Peso Chileno'}, {code: 'USD', img: 'us', name: 'Dólar US'}, {code: 'ARS', img: 'ar', name: 'Peso Argentino'}].map(opt => (
                    <button
                      key={opt.code}
                      className={`currency-option ${currency === opt.code ? 'active' : ''}`}
                      onClick={() => {
                        if(setCurrency) setCurrency(opt.code);
                        setIsCurrencyOpen(false);
                        closeMenu();
                      }}
                    >
                      <span className="currency-flag" style={{ display: 'flex', alignItems: 'center' }}>
                        <img 
                          src={`https://flagcdn.com/w20/${opt.img}.png`} 
                          srcSet={`https://flagcdn.com/w40/${opt.img}.png 2x`} 
                          width="20" 
                          alt={opt.name} 
                          style={{ borderRadius: '2px' }}
                        />
                      </span>
                      <div className="currency-option-text">
                        <span className="currency-option-code">{opt.code}</span>
                        <span className="currency-option-name">{opt.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
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
