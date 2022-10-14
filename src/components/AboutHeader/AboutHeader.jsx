import "./AboutHeader.css";
import images from "../../assets/imagenes";

function AboutHeader() {
  return (
    <div>
      <h3 className="title__section">Acerca de Gravity</h3>
      <div className="start__abaut">
        <div className="start__about__container container">
          <div className="start__about__main">
            <h3 className="color__secondary">Nosotros</h3>
            <p>
              Somos una agencia creativa que brinda soluciones innovadoras
              mediante estrategias de marketing acompañada de la creación de
              identidades visuales fuertes y efectivas. Gestionamos y diseñamos
              feeds de redes.
              <br />
              <br />
              La Agencia grevity brinda servicios de diversas disciplinas con el
              objetivo de trabajar en equipo, haciéndolo de manera integral para
              el beneficio de sus clientes.
            </p>
          </div>
          <aside className="abaut__ornament__container flex__center">
            <img className="abaut_img__ornament img__2" src={images.Human_005} alt="Human Gravity" />

            <div className="box__yellow"></div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default AboutHeader;
