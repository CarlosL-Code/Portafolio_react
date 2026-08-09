import { useState, useEffect } from "react";
import Header from "./componentes/layout/Header";
import Hero from "./componentes/layout/Hero";
import AcercaDe from "./componentes/layout/AcercaDe";
import ExperienciaProfesional from "./componentes/layout/ExperienciaProfesional";
import Trabajos from "./componentes/layout/Trabajos";
import Habilidades from "./componentes/layout/Habilidades"; // kept for future use if needed
import Logros from "./componentes/layout/Logros"; // kept for future use if needed
import Contacto from "./componentes/layout/Contacto";
import Footer from "./componentes/layout/Footer";
import ComoTrabajo from "./componentes/layout/ComoTrabajo"; // kept for future use if needed
import FAQ from "./componentes/layout/FAQ";
import Clientes from "./componentes/layout/Clientes";
import CallToAction from "./componentes/layout/CallToAction";
import Planes from "./componentes/layout/Planes";

import { FaWhatsapp, FaTimes } from "react-icons/fa";
import useScrollAnimation from "./hooks/useScrollAnimation";

function App() {
  useScrollAnimation();
  const [currency, setCurrency] = useState("CLP");
  const [showWsChat, setShowWsChat] = useState(false);
  const [wsMessage, setWsMessage] = useState("");

  const wsNumber = "56937540250";
  const wsUrl = wsMessage.trim() 
    ? `https://wa.me/${wsNumber}?text=${encodeURIComponent(wsMessage)}` 
    : `https://wa.me/${wsNumber}`;

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="mouse-glow"></div>
      
      <Hero />
      
      <main className="contenedor">
        <Header currency={currency} setCurrency={setCurrency} />
        <AcercaDe />
        <ExperienciaProfesional />
        <Clientes />
        <Trabajos />
        <Planes currency={currency} />
        <FAQ />
        <CallToAction />
        <Contacto />
        <Footer />
      </main>

      {/* Chat de WhatsApp (Flotante) */}
      {showWsChat && (
        <div className="whatsapp-chat-popup">
          <button className="ws-close-btn" onClick={() => setShowWsChat(false)} aria-label="Cerrar chat">
            <FaTimes />
          </button>
          <div className="ws-chat-header">
            <FaWhatsapp size={20} />
            <span>Chat con nosotros</span>
          </div>
          <div className="ws-chat-body">
            <p>¡Hola! 👋 ¿En qué te puedo ayudar hoy con tu proyecto?</p>
            <div className="ws-input-container">
              <input 
                type="text" 
                placeholder="Escribe tu mensaje aquí..." 
                value={wsMessage}
                onChange={(e) => setWsMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    window.open(wsUrl, '_blank');
                    setShowWsChat(false);
                  }
                }}
              />
            </div>
          </div>
          <a
            href={wsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ws-chat-btn"
            onClick={() => setShowWsChat(false)}
          >
            Abrir chat en WhatsApp
          </a>
        </div>
      )}

      {/* Botón flotante WhatsApp (Oculto si el chat está abierto) */}
      {!showWsChat && (
        <button
          className="whatsapp-flotante"
          aria-label="Abrir chat de WhatsApp"
          onClick={() => setShowWsChat(true)}
        >
          <FaWhatsapp />
        </button>
      )}
    </>
  );
}

export default App;