import "./servicesHome.css";
import Card from "../ServicesCard/ServicesCard";
import Images from "../../assets/imagenes"

function ServicesHome() {
  return (
    <div className="container" id="Services">
      <h3 className="title__section">Nuestros servicios:</h3>
      <ul className="services__list__container">
        <Card
          img={Images.Branding_icon}
          title="Branding"
          paragraph="Desarollo de la identidad visual de una marca como Logo, papelería, diseño web, naming, elementos graficos, merchandising, etc."
          alt="Branding Icon"
        />
        <Card
          img={Images.Net_icon}
          title="Gestion de redes"
          paragraph="Creacion de contenido organico y publicitario para redes, programacion de publicaciones y automatizacion de mensajes al igual que el desarollo de copies para redes."
          alt="Gestion de Redes Icon"
        />
        <Card
          img={Images.Marketing_icon}
          title="Marketing"
          paragraph="Creación de estrategias, en redes sociales para la generacion de Leads y contenido organico. Planes estategicos para la organización interna de la marca."
          alt="Marketing Icon"
        />
      </ul>
    </div>
  );
}

export default ServicesHome;
