// import Card from '../ServicesCard/ServicesCard'
// import Images from "../../assets/imagenes"
import "./AboutCards.css";

function AboutCards() {
  return (
    <div className="container__cards" id="AbautCards">
      <li className="card_container m-5">
        <div className="card__circle"></div>
        <h4 className="card_about_title">Misión</h4>
        <p className="card_about_p">
          Conseguir que usted tome el control de su marca mediante estrategias
          en canales digitales, logrando satisfacer las necesidades de su
          negocio o empresa.
        </p>
      </li>
      <li className="card_container m-5">
        <div className="card__circle"></div>
        <h4 className="card_about_title">Visión</h4>
        <p className="card_about_p">
          Vamos a lo alto, nos enfocamos en ser una agencia de publicidad y
          marketing con alto modelo de calidad y servicio para medianas
          empresas.
        </p>
      </li>
    </div>
  );
}

export default AboutCards;
