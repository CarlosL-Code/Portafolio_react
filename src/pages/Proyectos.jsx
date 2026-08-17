import React from 'react';
import { Helmet } from 'react-helmet-async';
import Trabajos from '../componentes/layout/Trabajos';
import AcercaDe from '../componentes/layout/AcercaDe';
import ExperienciaProfesional from '../componentes/layout/ExperienciaProfesional';

const Proyectos = () => {
  return (
    <>
      <Helmet>
        <title>Portafolio y Proyectos | Carlos Lozano</title>
        <meta name="description" content="Explora los proyectos reales de desarrollo web, sistemas a medida y soluciones digitales implementados para empresas y negocios, junto con mi experiencia profesional." />
        <link rel="canonical" href="https://carloslozanodev.com/proyectos" />
      </Helmet>

      <div style={{ paddingTop: 'clamp(56px, 5vw, 80px)' }}>
        <div className="contenedor">
          <AcercaDe />
          <ExperienciaProfesional />
        </div>
        <Trabajos />
      </div>
    </>
  );
};

export default Proyectos;
