import React from "react";
import astronautGift from "../../assets/Personajes/PNG_Personajes/Astronauta_ZERO/011.png";
import clock from "../../assets/iconos RRSS/Iconos de gravity/Relog.png";
import "./ServicesOffer.css"

function ServiceOffer() {
  return (
    <div className="offer">
      <div className="offerSection">
        <p className="offerFrame bold">
          GRATIS
        </p>
        <h2 className="title bold">Aprende todo sobre Marketing,<br />Branding y Marca personal</h2>
        <div className="offerImageInformation">
          <div className="offerImage">
            <img className="astronautGift" src={astronautGift} />
          </div>
          <div className="offerInformation">
            <div className="counter">
              <div className="number bold">0</div>
              <div className="number bold">1</div>
              <div className="circleGroup">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
              <div className="number bold">2</div>
              <div className="number bold">5</div>
              <div className="circleGroup">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
              <div className="number bold">0</div>
              <div className="number bold">3</div>
              <img className="clock" src={clock} />
            </div>
            <p className="informationOffer">
              Accede del a nuestros 3 E-Books de manera 100% gratuita por tiempo
              limitado:
              <br />
              Aprende todo lo que nesesitas saber sobre Marketing, Branding y
              Marca personal, con ello podras potenciar tu marca al maximo, tender
              los conceptos basicos para poner en acción una estrategia ganadora
              para tu marca. Comocer la importancia de un buen branding y saber
              cómo llegar de manera correcta a tú publico.
            </p>
            <button className="btnSecondary bold">Los quiero</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceOffer;