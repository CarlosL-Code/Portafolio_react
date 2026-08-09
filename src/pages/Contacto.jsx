import React from 'react';
import { Helmet } from 'react-helmet-async';
import Contacto from '../componentes/layout/Contacto';

const ContactoPage = () => {
  return (
    <>
      <Helmet>
        <title>Contacto y Cotizaciones | Carlos Lozano</title>
        <meta name="description" content="Ponte en contacto para solicitar una cotización o evaluar tu próximo proyecto web o de software a medida." />
        <link rel="canonical" href="https://carloslozanodev.com/contacto" />
      </Helmet>

      <div style={{ paddingTop: '80px', paddingBottom: '40px' }}>
        <div className="contenedor seo-header anim-scroll" style={{ paddingTop: '50px', marginBottom: '0' }}>
          <h1 className="seo-title">Hablemos de tu proyecto</h1>
          <p className="seo-subtitle">
            Agenda una reunión, solicita una cotización o cuéntame qué necesitas. Estoy aquí para ayudarte a escalar tu negocio.
          </p>
        </div>
        
        {/* Renderizamos Contacto sin envoltura de padding excesiva */}
        <div style={{ marginTop: '-40px' }}>
          <Contacto />
        </div>
      </div>
    </>
  );
};

export default ContactoPage;
