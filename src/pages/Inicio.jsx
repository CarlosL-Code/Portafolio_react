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

      <Suspense fallback={<div style={{ minHeight: '30vh' }}></div>}>
        <Planes currency={currency} />
      </Suspense>

      <Suspense fallback={null}>
        <MensajeImpacto />
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: '20vh' }}></div>}>
        <FAQ />
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: '20vh' }}></div>}>
        <Contacto />
      </Suspense>
    </>
  );
};

export default Inicio;
