import React from "react";
import astronautGift from "../../assets/Personajes/PNG_Personajes/Astronauta_ZERO/011.png";
import clock from "../../assets/iconos RRSS/Iconos de gravity/Relog.png";
import "./ServicesOffer.css";

function ServiceOffer() {
  return (
    <div className="offer" id="Ebook">
      <div className="offerSection container">
        <p className="offerFrame bold">¡GRATIS!</p>
        <div className="offerImageInformation">
          <div className="offerImage">
            <img className="astronautGift" src={astronautGift} />
          </div>
          <div className="offerInformation">
            <h2 className="title bold">
              Aprende todo sobre Marketing, <br />
              Branding y Marca personal
            </h2>
            <div className="counter">
              <div className="number bold">0</div>
              <div className="number bold">1</div>
              <div className="circleGroup">
                <div className="circle_offer"></div>
                <div className="circle_offer"></div>
              </div>
              <div className="number bold">2</div>
              <div className="number bold">5</div>
              <div className="circleGroup">
                <div className="circle_offer"></div>
                <div className="circle_offer"></div>
              </div>
              <div className="number bold">0</div>
              <div className="number bold">3</div>
              <img className="clock" src={clock} />
            </div>
            <p className="informationOffer informationOffer__desktop">
              Accede a nuestros 3 E-Books de manera 100% gratuita por tiempo
              limitado:
              <br />
              Aprende todo lo que necesitas saber sobre Marketing, Branding y
              marca personal, con ello podrás potenciar tu marca al máximo,
              tender los conceptos básicos para poner en acción una estrategia
              ganadora para tu marca. Conoce la importancia de un buen branding
              y saber como llegar de manera correcta a tu público.
            </p>
            <p className="informationOffer informationOffer__mobile">
              Accede del a nuestros 3 E-Books de manera 100% gratuita por tiempo
              limitado.
              <br />
              Aprende todo de Marketing digital, Branding y Marca personal con
              lo cual podras potenciar tu marca al maximo,
            </p>
            <button className="btnSecondary bold">Los quiero</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceOffer;
