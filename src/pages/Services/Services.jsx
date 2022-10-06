import { Navbar, ServiceCard2 } from "../../components";
import "./services.css";
import images from "../../assets/imagenes";

function Services() {
  return (
    <>
      <Navbar />
      <h3 className="title__section">Servicios</h3>
      <div className="services">
        <div className="container services__cards">
          <img
            className="service__cards__human"
            src={images.Human_002}
            alt="Human"
          />
          <div className="service__card__container">
            <ServiceCard2
              img={images.Branding_icon}
              title="1. Branding"
              paragraph="Desarollo de la identidad visual de una marca como Logo, papelería, diseño web UI, naming, elementos graficos, merchandising, etc."
            />
            <ServiceCard2
              img={images.Net_icon}
              title="2. Gestion de Redes"
              paragraph="Desarollo de la identidad visual de una marca como Logo, papelería, diseño web UI, naming, elementos graficos, merchandising, etc."
            />
            <ServiceCard2
              img={images.Marketing_icon}
              title="3. Marketing"
              paragraph="Desarollo de la identidad visual de una marca como Logo, papelería, diseño web UI, naming, elementos graficos, merchandising, etc."
            />
          </div>
        </div>
      </div>
      <div className="services__contact__container ">
        <div className="box__background">
          <div></div>
          <div></div>
        </div>
        <div className="container">
          <div className="services__contact__message">
            <h4 className="color__secondary">Cuentanos:</h4>
            <p>
              ¿Cual es el siguiente paso que va dar tu marca? <br />
              Cotiza aquí.
            </p>
          </div>
          <div className="services__contact">
            <form className="services__contact__form">
              <input type="text" placeholder="Nombre" />
              <input type="text" placeholder="Telefono" />
              <input type="text" placeholder="Correo" />
              <textarea placeholder="Mensaje"></textarea>
              <button>
                <img src={images.Arrow} alt="Flechita" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
