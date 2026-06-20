import './CallToAction.css';

const CallToAction = () => {
    return (
        <section className="cta-section">
            <div className="cta-content">
                <h2 className="cta-titulo">¿Tienes un proyecto en mente?</h2>
                <p className="cta-subtitulo">
                    Convirtamos tus ideas en una realidad digital. Estoy listo para ayudarte a crear soluciones increíbles.
                </p>
                <a href="#contacto" className="boton cta-boton">
                    ¡Hablemos de tu proyecto!
                </a>
            </div>
        </section>
    );
};

export default CallToAction;
