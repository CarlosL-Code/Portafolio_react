import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaCertificate, FaArrowRight } from 'react-icons/fa';
import { certificaciones } from '../data/certificaciones';
import './Certificaciones.css';

const CertificacionesList = () => {
  return (
    <>
      <Helmet>
        <title>Certificaciones | Carlos Lozano</title>
        <meta name="description" content="Explora mis certificaciones y validaciones académicas en el área de desarrollo de software, inteligencia artificial y soporte IT." />
      </Helmet>

      <main className="certificaciones-page">
        <div className="certificaciones-hero anim-scroll">
          <span className="certificaciones-eyebrow">Validación Profesional</span>
          <h1 className="certificaciones-title">Mis Certificaciones</h1>
          <p className="certificaciones-desc">
            Una colección de mis credenciales y diplomas que respaldan mis conocimientos técnicos y mi compromiso con el aprendizaje continuo.
          </p>
        </div>

        <div className="certificaciones-grid">
          {certificaciones.map((cert) => (
            <Link to={`/certificaciones/${cert.id}`} key={cert.id} className="certificado-card anim-scroll">
              <div className="certificado-icono">
                <FaCertificate />
              </div>
              <span className="certificado-categoria">{cert.categoria}</span>
              <h3 className="certificado-nombre">{cert.titulo}</h3>
              <div className="certificado-footer">
                Ver credencial <FaArrowRight />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default CertificacionesList;
