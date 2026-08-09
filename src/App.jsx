import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentes/layout/Header";
import Footer from "./componentes/layout/Footer";
import Inicio from "./pages/Inicio";
import DesarrolloWeb from "./pages/DesarrolloWeb";
import SoftwareAMedida from "./pages/SoftwareAMedida";
import SistemasEmpresariales from "./pages/SistemasEmpresariales";
import Proyectos from "./pages/Proyectos";
import ContactoPage from "./pages/Contacto";
import NotFound from "./pages/NotFound";

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
    <Router>
      <div className="mouse-glow"></div>
      
      <Header currency={currency} setCurrency={setCurrency} />

      <Routes>
        <Route path="/" element={<Inicio currency={currency} />} />
        <Route path="/desarrollo-web" element={<DesarrolloWeb currency={currency} />} />
        <Route path="/software-a-medida" element={<SoftwareAMedida />} />
        <Route path="/sistemas-empresariales" element={<SistemasEmpresariales />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <div className="contenedor">
        <Footer />
      </div>

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
    </Router>
  );
}

export default App;