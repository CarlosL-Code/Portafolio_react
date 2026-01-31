import "./Modal.css";

const Modal = ({ closeModal, trabajo }) => {
  return (
    <div className="overlay" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>

        {/* Botón cerrar */}
        <button className="btn-cerrar" onClick={closeModal}>
          ✕
        </button>

        <div className="modal-grid">
          {/* Imagen */}
          <div className="modal-image">
            <img
              src={trabajo.thumb.url}
              alt={trabajo.thumb.alt}
            />
          </div>

          {/* Contenido */}
          <div className="modal-content">

            <div className="modal-header">
              <span className="categoria">{trabajo.info.categoria}</span>
              <h3 className="titulo">{trabajo.info.nombre}</h3>
            </div>

            <div className="modal-body">
              {trabajo.info.contenido}
            </div>

            {trabajo.info.github && (
              <div className="modal-footer">
                <a
                  href={trabajo.info.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="boton"
                >
                  Ver proyecto
                </a>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
