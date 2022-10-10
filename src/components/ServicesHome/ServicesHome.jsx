import "./servicesHome.css";
import Card from "../ServicesCard/ServicesCard";
import Images from "../../assets/imagenes";

function ServicesHome() {
  return (
    <div className="container" id="Services">
      <h3 className="title__section">Nuestros servicios</h3>
      <ul className="services__list__container">
        <Card
          img={Images.Branding_icon}
          title="Branding"
          paragraph="Desarrollo de la identidad visual
          de una marca como Logo,
          papelería, diseño web, naming,
          
          elementos gráficos,
          merchandising, etc."
          alt="Branding Icon"
        />
        <Card
          img={Images.Net_icon}
          title="Gestión de redes"
          paragraph="Creación de contenido orgánico
          y publicitario para redes,
          programación de publicaciones
          y automatización de mensajes,
          al igual que el desarrollo se
          
          copies para redes."
          alt="Gestion de Redes Icon"
        />
        <Card
          img={Images.Marketing_icon}
          title="Marketing"
          paragraph="Creación de estrategias, en
          redes sociales, para la
          generación de Leads y
          contenido orgánico. Planes
          
          estratégicos para la
          organizacióninterna de la
          
          marca."
          alt="Marketing Icon"
        />
      </ul>
    </div>
  );
}

export default ServicesHome;
