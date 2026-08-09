import React from 'react';
import { Helmet } from 'react-helmet-async';
import Trabajos from '../componentes/layout/Trabajos';

const Proyectos = () => {
  return (
    <>
      <Helmet>
        <title>Proyectos de Desarrollo Web y Software | Carlos Lozano</title>
        <meta name="description" content="Explora los proyectos reales de desarrollo web, sistemas a medida y soluciones digitales implementados para empresas y negocios." />
        <link rel="canonical" href="https://carloslozanodev.com/proyectos" />
      </Helmet>

      {/* Trabajos component already has its own padding and id="trabajos". We just render it directly so it doesn't get double padded, but we might want a bit of top margin so it doesn't stick to the navbar since the navbar is fixed. Actually, Trabajos has padding: 100px 20px, so it's fine natively, but the fixed header might cover it slightly, so a small wrapper or just letting it breathe is fine. Let's add a wrapper with only top padding to clear the header. */}
      <div style={{ paddingTop: '80px' }}>
        <div className="contenedor seo-header anim-scroll" style={{ paddingTop: '50px', marginBottom: '0' }}>
          <h1 className="seo-title">Casos de Éxito y Proyectos Reales</h1>
          <p className="seo-subtitle">
            Explora una selección de mis trabajos recientes, donde la estrategia se une con el código para crear soluciones digitales que impactan.
          </p>
        </div>
        {/* Render Trabajos without additional padding, it handles its own grid and filters. */}
        <Trabajos />
      </div>
    </>
  );
};

export default Proyectos;
