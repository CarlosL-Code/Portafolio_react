import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../componentes/layout/Hero';
import AcercaDe from '../componentes/layout/AcercaDe';
import ExperienciaProfesional from '../componentes/layout/ExperienciaProfesional';
import Trabajos from '../componentes/layout/Trabajos';
import MensajeImpacto from '../componentes/layout/MensajeImpacto';
import Planes from '../componentes/layout/Planes';
import Clientes from '../componentes/layout/Clientes';
import DiagnosticoGratuito from '../componentes/layout/DiagnosticoGratuito';
import FAQ from '../componentes/layout/FAQ';
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
        <Trabajos />
      </div>

      <MensajeImpacto />
      <Planes currency={currency} />
      <DiagnosticoGratuito />

      <Clientes />
      <FAQ />
      <Contacto />
    </>
  );
};

export default Inicio;
