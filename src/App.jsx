import React, { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./componentes/layout/Header";
import Footer from "./componentes/layout/Footer";
import DotField from "./componentes/ui/DotField";

const Inicio = lazy(() => import("./pages/Inicio"));
const DesarrolloWeb = lazy(() => import("./pages/DesarrolloWeb"));
const SoftwareAMedida = lazy(() => import("./pages/SoftwareAMedida"));
const SistemasEmpresariales = lazy(() => import("./pages/SistemasEmpresariales"));
const Proyectos = lazy(() => import("./pages/Proyectos"));
const ContactoPage = lazy(() => import("./pages/Contacto"));
const NotFound = lazy(() => import("./pages/NotFound"));

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

  return (
    <>
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none' }}>
        <DotField 
          gradientFrom="rgba(168, 85, 247, 0.6)" 
          gradientTo="rgba(168, 85, 247, 0.15)"
          glowColor="rgba(168, 85, 247, 0.2)"
          dotRadius={1.5}
          dotSpacing={22}
        />
      </div>
      
      <Header currency={currency} setCurrency={setCurrency} />

      <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Inicio currency={currency} />} />
          <Route path="/desarrollo-web" element={<DesarrolloWeb currency={currency} />} />
          <Route path="/software-a-medida" element={<SoftwareAMedida />} />
          <Route path="/sistemas-empresariales" element={<SistemasEmpresariales />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />

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