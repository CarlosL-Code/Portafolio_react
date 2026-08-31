import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../componentes/layout/Hero';

const AcercaDe = lazy(() => import('../componentes/layout/AcercaDe'));
const ExperienciaProfesional = lazy(() => import('../componentes/layout/ExperienciaProfesional'));
const Trabajos = lazy(() => import('../componentes/layout/Trabajos'));
const InstagramFeed = lazy(() => import('../componentes/layout/InstagramFeed'));
const Testimonios = lazy(() => import('../componentes/layout/Testimonios'));
const Planes = lazy(() => import('../componentes/layout/Planes'));
const Clientes = lazy(() => import('../componentes/layout/Clientes'));
const MensajeImpacto = lazy(() => import('../componentes/layout/MensajeImpacto'));
const FAQ = lazy(() => import('../componentes/layout/FAQ'));
const Contacto = lazy(() => import('../componentes/layout/Contacto'));

const Inicio = ({ currency }) => {
  return (
    <>
      <Helmet>
        <title>Carlos Lozano | Desarrollo Web y Software a Medida</title>
        <meta name="description" content="Desarrollo páginas web, sistemas empresariales y software a medida para negocios y empresas. Conoce proyectos, planes y solicita una cotización en Chile o remoto." />
        <link rel="canonical" href="https://carloslozanodev.com/" />
      </Helmet>

      <Hero />
      
      <Suspense fallback={<div style={{ minHeight: '50vh' }}></div>}>
        <div className="contenedor">
          <AcercaDe />
        </div>

        <Clientes />

        <div className="contenedor">
          <ExperienciaProfesional />
        </div>

        <InstagramFeed />

        <div className="contenedor">
          <Trabajos />
        </div>

        <Testimonios />
        <Planes currency={currency} />
        <MensajeImpacto />

        <FAQ />
        <Contacto />
      </Suspense>
    </>
  );
};

export default Inicio;
