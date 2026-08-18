import "./Contacto.css";
import { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [tipoProyecto, setTipoProyecto] = useState("");
  const [presupuesto, setPresupuesto] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const regEx = {
    nombre: /^[a-zA-Z\s-]{2,}$/,
    correo: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    mensaje: /^.{1,}$/,
  };

  const handleInput = (e, input) => {
    if (input === "nombre") setNombre(e.target.value);
    if (input === "correo") setCorreo(e.target.value);
    if (input === "mensaje") setMensaje(e.target.value);
    if (input === "tipoProyecto") setTipoProyecto(e.target.value);
    if (input === "presupuesto") setPresupuesto(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nombreValido = regEx.nombre.test(nombre);
    const correoValido = regEx.correo.test(correo);
    const mensajeValido = regEx.mensaje.test(mensaje);

    if(!nombreValido){
        setError('Por favor ingresa un nombre válido');
        return;
    }
    if(!correoValido){
        setError('Por favor ingresa un correo válido');
        return;
    }
    if(!mensajeValido){
        setError('Por favor ingresa un mensaje válido');
        return;
    }

    if(nombreValido && correoValido && mensajeValido){
        setError(null);
        setIsSubmitting(true);
        // Simulate submitting state for a moment before actually submitting
        setTimeout(() => {
          e.target.submit();
        }, 500);
    }
  };

  return (
    <section className="contacto" id="contacto">
      <div className="encabezado" style={{ marginBottom: '40px' }}>
        <h3 className="seo-title" style={{ fontSize: '2.5rem' }}>Conversemos sobre tu próximo desafío</h3>
        <p className="subtitulo">
          Si buscas un perfil técnico sólido para escalar tu producto o potenciar a tu equipo, envíame un mensaje.
        </p>
      </div>

      <div className="contacto-contenedor">
        {/* Columna Izquierda: Info de contacto */}
        <div className="contacto-info">
          <div className="info-header">
            <h4>Información de Contacto</h4>
            <p>Escríbeme directamente o llena el formulario para agendar una reunión.</p>
          </div>
          
          <div className="info-items">
            <a href="mailto:carlos.lozano.silva1@gmail.com" className="info-item">
              <div className="info-icon"><FaEnvelope /></div>
              <div className="info-text">
                <span>Email</span>
                <strong>carlos.lozano.silva1@gmail.com</strong>
              </div>
            </a>
            
            <a href="https://wa.me/56937540250" target="_blank" rel="noopener noreferrer" className="info-item">
              <div className="info-icon"><FaWhatsapp /></div>
              <div className="info-text">
                <span>WhatsApp</span>
                <strong>+56 9 3754 0250</strong>
              </div>
            </a>
            
            <div className="info-item">
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <div className="info-text">
                <span>Ubicación</span>
                <strong>Chile (Remoto a todo el mundo)</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Formulario */}
        <form action="https://formspree.io/f/xlggjgbb" className="formulario" onSubmit={handleSubmit} method="post">
          <div className="form-grid">
            <div className="grupo-formulario">
              <label htmlFor="nombre">Nombre completo</label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Ej. John Doe"
                value={nombre}
                onChange={(e) => handleInput(e, "nombre")}
              />
            </div>

            <div className="grupo-formulario">
              <label htmlFor="correo">Correo electrónico</label>
              <input
                type="email"
                name="correo"
                id="correo"
                placeholder="correo@ejemplo.com"
                value={correo}
                onChange={(e) => handleInput(e, "correo")}
              />
            </div>

            <div className="grupo-formulario">
              <label htmlFor="tipoProyecto">Tipo de Proyecto (Opcional)</label>
              <select 
                name="tipoProyecto" 
                id="tipoProyecto"
                value={tipoProyecto}
                onChange={(e) => handleInput(e, "tipoProyecto")}
              >
                <option value="" disabled>Selecciona una opción</option>
                <option value="Página Web">Página Web / Landing Page</option>
                <option value="Software a Medida">Software a Medida</option>
                <option value="Sistema Empresarial">Sistema Empresarial (ERP/CRM)</option>
                <option value="E-commerce">Tienda Online / E-commerce</option>
                <option value="Otro">Otro servicio</option>
              </select>
            </div>

            <div className="grupo-formulario">
              <label htmlFor="presupuesto">Presupuesto Estimado (Opcional)</label>
              <select 
                name="presupuesto" 
                id="presupuesto"
                value={presupuesto}
                onChange={(e) => handleInput(e, "presupuesto")}
              >
                <option value="" disabled>Selecciona una opción</option>
                <option value="Menos de $500 USD">Menos de $500 USD</option>
                <option value="$500 - $2.000 USD">$500 - $2.000 USD</option>
                <option value="$2.000 - $5.000 USD">$2.000 - $5.000 USD</option>
                <option value="Más de $5.000 USD">Más de $5.000 USD</option>
              </select>
            </div>

            <div className="grupo-formulario mensaje">
              <label htmlFor="mensaje">Mensaje o detalles del proyecto</label>
              <textarea
                name="mensaje"
                id="mensaje"
                placeholder="Cuéntame un poco más sobre lo que necesitas..."
                value={mensaje}
                onChange={(e) => handleInput(e, "mensaje")}
              ></textarea>
            </div>
          </div>

          {error && (
            <div className="grupo-formulario error">
              <p>{error}</p>
            </div>
          )}

          <div className="grupo-formulario enviar">
            <button type="submit" className={`boton ${isSubmitting ? 'loading' : ''}`} disabled={isSubmitting}>
              <span>{isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}</span>
              {!isSubmitting && <div className="icono"><FaPaperPlane /></div>}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
