import { ReferentialNavBar } from "../../components/index";
import images from "../../assets/imagenes";

function About() {
    return (
        <div>
            <nav className='shadow p-3 mb-5 bg-body rounded'>
                <ReferentialNavBar />
            </nav>
            <section>
                <h2 className='text-center'>Acerca de Gravity</h2>
                <article className='bg-primary d-flex'>
                    <div className='w-50 p-3 h-50 d-inline-block bg-secondary'>
                        <h2>Nosotros</h2>
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
                    <img src={images.Human_005} alt="Human Gravity" />
                    hola
                </article>
            </section>
        </div>
    )
}

export default About