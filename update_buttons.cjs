const fs = require('fs');

// Header.jsx
let header = fs.readFileSync('src/componentes/layout/Header.jsx', 'utf-8');
if (!header.includes('SpecularButton')) {
  header = header.replace(/import DarkModeSwitch from '\.\.\/DarkModeSwitch';/, "import DarkModeSwitch from '../DarkModeSwitch';\nimport SpecularButton from '../ui/SpecularButton';");
  header = header.replace(/<a\s+href="\/carlos-lozano-silva-cv\.pdf"\s+className="btn-cv"\s+download\s+onClick=\{closeMenu\}\s*>\s*Descargar CV\s*<\/a>/s, `<SpecularButton href="/carlos-lozano-silva-cv.pdf" target="_blank" size="md" onClick={closeMenu} className="btn-cv">Descargar CV</SpecularButton>`);
  fs.writeFileSync('src/componentes/layout/Header.jsx', header);
}

// Hero.jsx
try {
  let hero = fs.readFileSync('src/componentes/layout/Hero.jsx', 'utf-8');
  if (!hero.includes('SpecularButton')) {
    hero = hero.replace(/import '\.\/Hero\.css';/, "import './Hero.css';\nimport SpecularButton from '../ui/SpecularButton';");
    hero = hero.replace(/<Link to="\/proyectos" className="boton">Ver Proyectos<\/Link>/s, `<SpecularButton href="/proyectos" size="lg" className="boton">Ver Proyectos</SpecularButton>`);
    hero = hero.replace(/<Link to="\/contacto" className="boton boton-secundario">Contáctame<\/Link>/s, `<SpecularButton href="/contacto" size="lg" baseColor="#1E293B" className="boton boton-secundario">Contáctame</SpecularButton>`);
    fs.writeFileSync('src/componentes/layout/Hero.jsx', hero);
  }
} catch (e) {}

// Contacto.jsx (Submit button)
try {
  let contacto = fs.readFileSync('src/componentes/layout/Contacto.jsx', 'utf-8');
  if (!contacto.includes('SpecularButton')) {
    contacto = contacto.replace(/import \{ FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPaperPlane \} from 'react-icons\/fa';/, "import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';\nimport SpecularButton from '../ui/SpecularButton';");
    contacto = contacto.replace(/<button type="submit" className="boton-enviar" disabled=\{isSubmitting\}>\s*\{isSubmitting \? 'Enviando\.\.\.' : 'Enviar Mensaje'\}\s*<FaPaperPlane \/>\s*<\/button>/s, `<SpecularButton type="submit" disabled={isSubmitting} size="lg" className="boton-enviar">\n              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>\n                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'} <FaPaperPlane />\n              </span>\n            </SpecularButton>`);
    fs.writeFileSync('src/componentes/layout/Contacto.jsx', contacto);
  }
} catch (e) {}

