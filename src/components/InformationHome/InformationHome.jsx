import React from "react";
import light from "../../assets/iconos RRSS/Iconos de gravity/Luces.png";
import images from "../../assets/imagenes";
import "./InformationHome.css";

function InformationHome() {
  return (
    <>
      <div className="informationSection" id="InromationHome">
        <div className="container">
          <div className="informationAgency ">
            <h1 className="informationTitle bold">Agencia Gravity</h1>
            <p>Especialistas en campañas en redes sociales</p>
            <ul className="networksContainer">
              <li className="networksButton ">
                <a href="#">
                  <img src={images.Linkdln_light} alt="Linkdln" />
                </a>
              </li>
              <li className="networksButton ">
                <a href="#">
                  <img src={images.Whatsapp_light} alt="Whatsapp" />
                </a>
              </li>
              <li className="networksButton ">
                <a href="#">
                  <img src={images.Facebook_light} alt="Facebook" />
                </a>
              </li>
              <li className="networksButton ">
                <a href="#">
                  <img src={images.Instagram_light} alt="Instagram" />
                </a>
              </li>
              <li className="networksButton ">
                <a href="#">
                  <img src={images.Be_light} alt="Be" />
                </a>
              </li>
            </ul>
          </div>
          <div className="information">
            <p>
              Somos una agencia creativa que brinda soluciones innovadoraas
              mediante estrategias de marketing acompañada de la creación de
              identidades virtuales fuertes y efectivas. Gestionamos y diseñamos
              feeds de redes.
              <br />
              La agencia gravity brinda servicios de diversas disciplinas con el
              objetivo de trabajar en equipo, haciendo de manera integral para
              el beneficio de sus clientes.
            </p>
          </div>
          <img className="imgLight" src={light} alt="" />
        </div>
      </div>
    </>
  );
}

export default InformationHome;
