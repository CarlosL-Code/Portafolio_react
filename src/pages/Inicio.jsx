import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../componentes/layout/Hero';
import AcercaDe from '../componentes/layout/AcercaDe';
import ExperienciaProfesional from '../componentes/layout/ExperienciaProfesional';
import Trabajos from '../componentes/layout/Trabajos';
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
      
      <div className="contenedor">
        <AcercaDe />
        <ExperienciaProfesional />
        <Clientes />
        <Trabajos />
        <Planes currency={currency} />
        <FAQ />
        <CallToAction />
        <Contacto />
      </div>
    </>
  );
};

export default Inicio;
