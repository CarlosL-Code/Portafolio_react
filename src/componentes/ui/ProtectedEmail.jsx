import { useState } from 'react';
import './ProtectedEmail.css';

const ProtectedEmail = ({ className = '' }) => {
  const [revealed, setRevealed] = useState(false);
  
  // Dividimos el correo para que los bots no lo lean en el código fuente
  const part1 = "carlos.lozano.silva1";
  const part2 = "gmail.com";

  const handleReveal = (e) => {
    e.preventDefault();
    setRevealed(true);
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${part1}@${part2}`;
  };

  if (!revealed) {
    return (
      <span className={`protected-email-hidden ${className}`} onClick={handleReveal} title="Haz clic para ver el correo">
        carlos.lozano... <strong>(Ver Correo)</strong>
      </span>
    );
  }

  return (
    <a 
      href="#" 
      onClick={handleEmailClick} 
      className={`protected-email-revealed ${className}`}
      title="Enviar correo"
    >
      {part1}<span>@</span>{part2}
    </a>
  );
};

export default ProtectedEmail;
