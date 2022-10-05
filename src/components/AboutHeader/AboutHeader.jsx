
import images from "../../assets/imagenes";

function AboutHeader() {
    return (
        <div>
             <h2 className='text-center mt-5'>Acerca de Gravity</h2>
        <div className="start__home">
            <div className="start__home__container container">
                <div className="start__home__main">
                    <h3 className="color__secondary">Nosotros</h3>
                    <p>Somos una agencia creativa que brinda soluciones
                        innovadoras mediante estrategias de marketing acompañada de la
                        creación de identidades visuales fuertes y efectivas. Gestionamos y
                        diseñamos feeds de redes.
                        <br />
                        <br />
                        La Agencia grevity brinda servicios de diversas disciplinas con el
                        objetivo de trabajar en equipo, haciéndolo de manera integral para
                        el beneficio de sus clientes.</p>

                </div>
                <div className="start__home__ornament flex__center">
                    <img src={images.Human_005} alt="Human Gravity" />
                  
                    <div className="box__yellow"></div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AboutHeader