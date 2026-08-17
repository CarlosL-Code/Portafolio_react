import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../componentes/layout/Hero';
import Industrias from '../componentes/layout/Industrias';
import Proceso from '../componentes/layout/Proceso';
import Comparativa from '../componentes/layout/Comparativa';
import Clientes from '../componentes/layout/Clientes';
import Planes from '../componentes/layout/Planes';
import FAQ from '../componentes/layout/FAQ';
import CallToAction from '../componentes/layout/CallToAction';
import Contacto from '../componentes/layout/Contacto';

const Inicio = ({ currency }) => {
  return (
    <>
      <Helmet>
        <title>Carlos Lozano | Desarrollo Web y Software a Medida</title>
        <meta name="description" content="Desarrollo páginas web, sistemas empresariales y software a medida para negocios y empresas. Conoce proyectos, planes y solicita una cotización en Chile o remoto." />
        <link rel="canonical" href="https://carloslozanodev.com/" />
      </Helmet>

      <Hero />
      
      <Industrias />
      <Proceso />
      <Comparativa />

      <div className="contenedor">
        <Clientes />
        <Planes currency={currency} />
        <FAQ />
        <CallToAction />
        <Contacto />
      </div>
    </>
  );
};

export default Inicio;
