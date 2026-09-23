import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp, FaArrowUp, FaArrowRight } from 'react-icons/fa';
import ProtectedEmail from '../ui/ProtectedEmail';
import './Footer.css';
import { servicios } from '../../data/servicios';

const scrollToSection = (event, id, preventNavigation = true) => {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
  if (window.location.pathname !== '/') return;
  const section = document.getElementById(id);
  if (section) {
    if (preventNavigation) event.preventDefault();
    section.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }
};

const Footer = () => (
  <footer className="footer-premium">
    <div className="footer-container">
      <div className="footer-col-brand">
        <Link to="/" className="footer-logo" onClick={() => window.scrollTo(0, 0)} aria-label="Carlos Lozano, ir al inicio">
          <span className="footer-monogram" aria-hidden="true">CL</span>
          <span>Carlos Lozano</span>
        </Link>
        <p className="footer-role">Software Engineer · Full Stack</p>
        <p className="footer-tagline">De una idea a una solución que funciona. Desarrollo aplicaciones web con atención al detalle, rendimiento y mantenibilidad.</p>
        <div className="footer-socials-icons" aria-label="Redes sociales">
          <a href="https://github.com/CarlosL-Code" target="_blank" rel="noopener noreferrer" aria-label="GitHub (nueva pestaña)"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/carlos-jos%C3%A9-lozano-silva-a56577307/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (nueva pestaña)"><FaLinkedin /></a>
          <a href="https://www.instagram.com/carlithos_lozano13/" target="_blank" rel="noopener noreferrer" aria-label="Instagram (nueva pestaña)"><FaInstagram /></a>
          <a href="https://wa.me/56937540250" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp (nueva pestaña)"><FaWhatsapp /></a>
        </div>
      </div>

      <nav className="footer-col-links" aria-label="Servicios y proyectos">
        <h2>Cómo puedo ayudarte</h2>
        <ul className="footer-services">
          {servicios.map((servicio) => (
            <li key={servicio.id}>
              <Link
                to={`/?servicio=${servicio.id}#contacto`}
                onClick={(event) => scrollToSection(event, 'contacto', false)}
                className="footer-service"
              >
                <span className="footer-service-title">{servicio.nombre}<FaArrowRight aria-hidden="true" /></span>
                <span className="footer-service-description">{servicio.descripcion}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link className="footer-projects" to="/#trabajos" onClick={(event) => scrollToSection(event, 'trabajos')}>Ver proyectos <FaArrowRight aria-hidden="true" /></Link>
      </nav>

      <div className="footer-contact">
        <span className="footer-eyebrow">CONSTRUYAMOS ALGO JUNTOS</span>
        <h2>¿Tienes un proyecto en mente?</h2>
        <p>Cuéntame qué necesitas y conversemos sobre cómo hacerlo realidad.</p>
        <Link className="footer-cta" to="/#contacto" onClick={(event) => scrollToSection(event, 'contacto')}>Hablemos de tu proyecto <FaArrowRight aria-hidden="true" /></Link>
        <div className="footer-email"><ProtectedEmail /></div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} Carlos Lozano</p>
      <span className="footer-location">Desde Chile · Conectado con el mundo</span>
      <button type="button" className="footer-back-top" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })}>Volver arriba <FaArrowUp aria-hidden="true" /></button>
    </div>
  </footer>
);

export default Footer;
