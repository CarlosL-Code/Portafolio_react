import './Clientes.css';

const Clientes = () => {
    return(
        <>
        <section className="clientes">
            <div className="encabezado">
                <h3 className="titulo">Mis clientes</h3>
                <p className="subtitulos">Estas marcas han confiado en mis servicios.</p>
            </div>
            <div className="logos">
                <img src="./assets/logos/paveleads.jpeg" alt="Logo de Paveleads" className="logo"/>
                <img src="./assets/logos/carserv.png" alt="Logo de Paveleads" className="logo blak"/>
            </div>
        </section>
        </>
    );
}

export default Clientes;