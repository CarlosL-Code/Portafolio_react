import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../componentes/layout/Hero';
import ProblemaSolucion from '../componentes/layout/ProblemaSolucion';
import MensajeImpacto from '../componentes/layout/MensajeImpacto';
import Industrias from '../componentes/layout/Industrias';
import Planes from '../componentes/layout/Planes';
import Clientes from '../componentes/layout/Clientes';
import DiagnosticoGratuito from '../componentes/layout/DiagnosticoGratuito';
import FAQ from '../componentes/layout/FAQ';
import Contacto from '../componentes/layout/Contacto';

const Inicio = ({ currency }) => {
  return (
    <>
      <Helmet>
        <title>Carlos Lozano | Desarrollo Web y Embudos de Venta</title>
        <meta name="description" content="No necesitas un sitio web estático, necesitas un embudo de ventas activo. Desarrollo de sitios y sistemas a medida para captar clientes." />
        <link rel="canonical" href="https://carloslozanodev.com/" />
      </Helmet>

      <Hero />
      
      <ProblemaSolucion />
      <MensajeImpacto />
      <Industrias />
      <Planes currency={currency} />
      <DiagnosticoGratuito />

      <div className="contenedor">
        <Clientes />
        <FAQ />
        <Contacto />
      </div>
    </>
  );
};

export default Inicio;
