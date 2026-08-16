import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-premium">
      <div className="footer-container">
        
        {/* Columna Izquierda: Logo y Tagline */}
        <div className="footer-col-brand">
          <div className="footer-logo">
            <div className="logo-cl">CL</div>
            <h2>Carlos Lozano</h2>
          </div>
          <p className="footer-tagline">
            Ingeniero de Software y Desarrollador Web Full Stack. Desarrollamos tu idea y la subimos a la nube — rápido, seguro y pensado para vender.
          </p>
          
          <div className="footer-socials-text">
            <a href="https://www.instagram.com/carlithos_lozano13/" target="_blank" rel="noreferrer" aria-label="Instagram">Instagram</a>
            <a href="https://www.linkedin.com/in/carlos-jos%C3%A9-lozano-silva-a56577307/" target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a>
            <a href="https://github.com/CarlosL-Code" target="_blank" rel="noreferrer" aria-label="GitHub">GitHub</a>
            <a href="https://wa.me/56937540250" target="_blank" rel="noreferrer" aria-label="WhatsApp">WhatsApp</a>
          </div>
        </div>

        {/* Columna Centro: Servicios */}
        <div className="footer-col-links">
          <h3>Servicios</h3>
          <ul>
            <li><Link to="/desarrollo-web" onClick={() => window.scrollTo(0, 0)}>Desarrollo web</Link></li>
            <li><Link to="/software-a-medida" onClick={() => window.scrollTo(0, 0)}>Software a medida</Link></li>
            <li><Link to="/sistemas-empresariales" onClick={() => window.scrollTo(0, 0)}>Sistemas empresariales</Link></li>
            <li><Link to="/proyectos" onClick={() => window.scrollTo(0, 0)}>Portafolio</Link></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Columna Derecha: Contacto */}
        <div className="footer-col-links">
          <h3>Contacto</h3>
          <ul>
            <li><a href="https://wa.me/56937540250" target="_blank" rel="noreferrer">+56 9 3754 0250</a></li>
            <li><a href="mailto:carlos.lozano.silva1@gmail.com">carlos.lozano.silva1@gmail.com</a></li>
            <li><Link to="/contacto" onClick={() => window.scrollTo(0, 0)}>Formulario</Link></li>
            <li><a href="https://wa.me/56937540250" target="_blank" rel="noreferrer">Agendar reunión</a></li>
          </ul>
        </div>

      </div>

      {/* Fila Inferior */}
      <div className="footer-bottom">
        <p className="copyright">© {new Date().getFullYear()} Carlos Lozano. Creado por Carlos Lozano.</p>
        <div className="footer-legal">
          <a href="#">Política de privacidad</a>
          <a href="#">Términos</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
