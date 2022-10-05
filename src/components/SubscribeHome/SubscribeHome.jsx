import React from "react";
import astronaut from "../../assets/Personajes/PNG_Personajes/Astronauta_ZERO/001.png";
import circleCard from "../../assets/Iconos/Cartas o Sobres/Sobre-Blanco 02.png";
import icon from "../../assets/imagenes";
import "./SubscribeHome.css";

function SubscribeHome() {
  return (
      <div className="subscribeSection">
        <div className="subscribeImage">
            <img className="atronautImg" src={astronaut} alt=""/>
        </div>
        <div className="subscribeInformation">
            <form>
                <label class="subscribeLabel"><strong>Suscribete gratis a nuestra comunidad:</strong></label><br/>
                <div class="input-icons">
                    <input type="text" className="subscribeMail" placeholder="correo@ejemplo.com"></input>
                    <img src={icon.Arrow} className="icon"/>
                </div>
            </form>
        </div>
        <div className="subscribeForm">
          <div className="subscribeCircleCard">
            <img src={circleCard} className="circleCard"/>
          </div>
          <div className="subscribeCircle">
          </div>
        </div>
      </div>
  );
}

export default SubscribeHome;