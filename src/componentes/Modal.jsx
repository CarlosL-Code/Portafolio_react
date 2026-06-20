import "./Modal.css";

const Modal = ({ closeModal, trabajo }) => {
  if (!trabajo) return null;

  return (
    <div className="overlay" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>

        <div className="modal-grid">

          <div className="modal-image">
            <img
              src={trabajo.thumb.url}
              alt={trabajo.thumb.alt}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="modal-content">

            <div className="modal-header">
              <span className="categoria">{trabajo.info.categoria}</span>

              <button
                className="btn-cerrar"
                onClick={closeModal}
                aria-label="Cerrar modal"
              >
                ✕
              </button>

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
                  className="btn-modal"
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
