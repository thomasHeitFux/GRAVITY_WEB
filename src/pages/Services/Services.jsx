import { Navbar, ServiceCard2, Footer } from "../../components";
import "./services.css";
import images from "../../assets/imagenes";

function Services() {
  const links = [
    {
      title: "Servicios",
      to: "Services",
    },
    {
      title: "Cuentanos",
      to: "Cuentanos",
    },
  ];
  return (
    <>
      <Navbar />
      <h3 id="Services" className="title__section">
        Servicios
      </h3>
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
              paragraph="Desarrollo de la identidad visual de una marca como Logo,
              papelería, diseño web, UI, naming, elementos gráficos,
              merchandising, etc."
            />
            <ServiceCard2
              img={images.Net_icon}
              title="2. Gestión de Redes"
              paragraph="Creación de contenido orgánico y publicitario para redes,
              programación de publicaciones y automatización de
              mensajes, al igual que el desarrollo de copies para redes."
            />
            <ServiceCard2
              img={images.Marketing_icon}
              title="3. Marketing"
              paragraph="Creación de estrategias, en redes sociales, para la
              generación de Leads y contenido orgánico. Planes
              estratégicos para la organización interna de la marca."
            />
          </div>
        </div>
      </div>
      <div className="services__contact__container" id="Cuentanos">
        <div className="box__background">
          <div></div>
          <div></div>
        </div>
        <div className="container">
          <div className="services__contact__message">
            <h4 className="color__secondary">Cuéntanos:</h4>
            <p>
              ¿Cuál es el siguiente paso que va a dar tu marca? <br />
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
      <Footer links={links} />
    </>
  );
}

export default Services;
