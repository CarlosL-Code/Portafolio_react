import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-premium">
      <div className="footer-container">
        
        {/* Columna Izquierda: Logo y Contacto */}
        <div className="footer-col-brand">
          <div className="footer-logo">
            <span className="logo-icon">🔥</span>
            <h2>Carlos Lozano</h2>
          </div>
          <p className="footer-tagline">
            Ingeniero de Software y Desarrollador Web Full Stack.
          </p>
          
          <div className="footer-contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>carlos.lozano.silva1@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span style={{ lineHeight: '1.4' }}>100% Remoto · Presencial en Temuco, Araucanía</span>
            </div>
          </div>

          <Link
            to="/contacto"
            className="footer-cta-btn"
            onClick={() => window.scrollTo(0, 0)}
          >
            Cotizar mi proyecto →
          </Link>

          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/carlos-jos%C3%A9-lozano-silva-a56577307/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://github.com/CarlosL-Code" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.instagram.com/carlithos_lozano13/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://wa.me/56937540250" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Columna: Servicios */}
        <div className="footer-col-links">
          <h3>SERVICIOS</h3>
          <ul>
            <li><Link to="/desarrollo-web">Desarrollo Web (Landing, Corporativo)</Link></li>
            <li><Link to="/software-a-medida">Software a Medida (SaaS, ERP)</Link></li>
            <li><Link to="/sistemas-empresariales">Sistemas Empresariales</Link></li>
            <li><Link to="/">Sitios E-Commerce</Link></li>
          </ul>
        </div>

        {/* Columna: Enlaces Rápidos */}
        <div className="footer-col-links">
          <h3>NAVEGACIÓN</h3>
          <ul>
            <li><Link to="/">Inicio / Acerca de Mí</Link></li>
            <li><Link to="/proyectos">Portafolio y Casos de Éxito</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><a href="https://wa.me/56937540250" target="_blank" rel="noreferrer">Agendar Reunión</a></li>
          </ul>
        </div>

        {/* Columna: Recursos */}
        <div className="footer-col-links">
          <h3>RECURSOS</h3>
          <ul>
            <li><Link to="/#planes">Planes y Precios</Link></li>
            <li><Link to="/desarrollo-web">Preguntas Frecuentes</Link></li>
            <li><a href="#">Blog (Próximamente)</a></li>
          </ul>
        </div>

      </div>

      {/* Fila Inferior */}
      <div className="footer-bottom">
        <p className="copyright">© {new Date().getFullYear()} Carlos Lozano Dev. Todos los derechos reservados.</p>
        <div className="footer-legal">
          <a href="#">Privacidad</a>
          <a href="#">Términos y Condiciones</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
