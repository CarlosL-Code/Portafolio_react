import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaDownload } from 'react-icons/fa';
import { certificaciones } from '../data/certificaciones';
import './Certificaciones.css';

const CertificadoDetalle = () => {
  const { id } = useParams();
  const certificado = certificaciones.find(c => c.id === id);

  if (!certificado) {
    return <Navigate to="/certificaciones" replace />;
  }

  const imageUrl = `/CERTIFICACIONES/${certificado.archivo}`;

  return (
    <>
      <Helmet>
        <title>{certificado.titulo} | Certificación | Carlos Lozano</title>
        <meta name="description" content={`Credencial oficial de la certificación: ${certificado.titulo}`} />
      </Helmet>

      <main className="certificado-detalle-page">
        <Link to="/certificaciones" className="certificado-back-btn">
          <FaArrowLeft /> Volver a Certificaciones
        </Link>

        <div className="certificado-header">
          <div className="certificado-header-info">
            <h1>{certificado.titulo}</h1>
            <p>Categoría: {certificado.categoria}</p>
          </div>
        </div>

        <div className="certificado-viewer">
          <img src={imageUrl} alt={`Certificado de ${certificado.titulo}`} className="certificado-imagen" />
        </div>
      </main>
    </>
  );
};

export default CertificadoDetalle;
