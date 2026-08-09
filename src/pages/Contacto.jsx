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

      <div className="contenedor" style={{ paddingTop: '100px' }}>
        <Contacto />
      </div>
    </>
  );
};

export default ContactoPage;
