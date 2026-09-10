import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../componentes/layout/Hero';

const AcercaDe = lazy(() => import('../componentes/layout/AcercaDe'));
const ExperienciaProfesional = lazy(() => import('../componentes/layout/ExperienciaProfesional'));
const Trabajos = lazy(() => import('../componentes/layout/Trabajos'));
const InstagramFeed = lazy(() => import('../componentes/layout/InstagramFeed'));
const Testimonios = lazy(() => import('../componentes/layout/Testimonios'));
const Clientes = lazy(() => import('../componentes/layout/Clientes'));
const MensajeImpacto = lazy(() => import('../componentes/layout/MensajeImpacto'));
const Contacto = lazy(() => import('../componentes/layout/Contacto'));
const TechStack = lazy(() => import('../componentes/layout/TechStack'));

const Inicio = ({ currency }) => {
  return (
    <>
      <Helmet>
        <title>Carlos Lozano | Software Engineer & Desarrollador Full Stack</title>
        <meta name="description" content="Portfolio de Carlos Lozano, ingeniero en informática con proyectos en React, Spring Boot, IoT, e-commerce y automatizaciones. Disponible para proyectos y oportunidades laborales." />
        <link rel="canonical" href="https://carloslozanodev.com/" />
      </Helmet>

      <Hero />

      {/*
        Cada sección tiene su propio Suspense a propósito: si compartieran uno
        solo, React descubriría (y por lo tanto empezaría a descargar) cada
        chunk lazy recién cuando el anterior termina de resolver, convirtiendo
        10 descargas paralelas en una fila secuencial. Con límites separados,
        todas se piden a la vez y cada sección aparece apenas la suya llega.
      */}
      <Suspense fallback={<div style={{ minHeight: '30vh' }}></div>}>
        <div className="contenedor">
          <AcercaDe />
        </div>
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: '30vh' }}></div>}>
        <TechStack />
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: '20vh' }}></div>}>
        <Clientes />
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: '30vh' }}></div>}>
        <div className="contenedor">
          <ExperienciaProfesional />
        </div>
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: '30vh' }}></div>}>
        <InstagramFeed />
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: '30vh' }}></div>}>
        <div className="contenedor">
          <Trabajos />
        </div>
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: '20vh' }}></div>}>
        <Testimonios />
      </Suspense>

      <Suspense fallback={null}>
        <MensajeImpacto />
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: '20vh' }}></div>}>
        <Contacto />
      </Suspense>
    </>
  );
};

export default Inicio;
