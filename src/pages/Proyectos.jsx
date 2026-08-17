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

      <div style={{ paddingTop: 'clamp(56px, 5vw, 80px)' }}>
        <Trabajos />
      </div>
    </>
  );
};

export default Proyectos;
