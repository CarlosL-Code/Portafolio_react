import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Página no encontrada | Carlos Lozano</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="contenedor" style={{ paddingTop: '180px', paddingBottom: '100px', textAlign: 'center', minHeight: '60vh' }}>
        <h1 className="titulo" style={{ fontSize: '4rem', marginBottom: '20px', color: 'var(--primario)' }}>404</h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Página no encontrada</h2>
        <p style={{ color: 'var(--shade-6)', fontSize: '1.2rem', marginBottom: '40px' }}>
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        
        <Link to="/" className="boton" style={{ display: 'inline-flex', justifyContent: 'center' }}>
          <FaHome size={20} style={{ marginRight: '10px' }} />
          Volver al Inicio
        </Link>
      </section>
    </>
  );
};

export default NotFound;
