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
            <p className="infor__paragraph__desktop">Especialistas en campañas en redes sociales.</p>
            <ul className="networksContainer infor__paragraph__desktop">
              <li className="networksButton ">
                <a href="https://www.linkedin.com/company/gravity-agencia-de-marketing-y-publicidad/?viewAsMember=true">
                  <img src={images.Linkdln_light} alt="Linkdln" />
                </a>
              </li>
              <li className="networksButton ">
                <a href="https://wa.me/message/A6KRC3PTRPNDO1">
                  <img src={images.Whatsapp_light} alt="Whatsapp" />
                </a>
              </li>
              <li className="networksButton ">
                <a href="https://www.facebook.com/SomosGravity">
                  <img src={images.Facebook_light} alt="Facebook" />
                </a>
              </li>
              <li className="networksButton ">
                <a href="https://www.instagram.com/agencia_gravity/">
                  <img src={images.Instagram_light} alt="Instagram" />
                </a>
              </li>
              <li className="networksButton ">
                <a href="https://www.behance.net/gallery/150687073/Agencia-Gravity">
                  <img src={images.Be_light} alt="Be" />
                </a>
              </li>
            </ul>
          </div>
          <div className="information">
            <p className="infor__paragraph__desktop">
              Somos una Agencia creativa que brinda soluciones innovadoras
              mediante estrategias de marketing acompañadas de la creación de
              identidades visuales fuertes y efectivas. Además de ello,
              gestionamos y diseñamos feeds de redes.
              <br /> <br />
              La Agencia Gravity brinda servicios de diversas disciplinas con el
              objetivo de trabajar en equipo, haciéndolo de manera integral para
              el beneficio de sus clientes.
            </p>
            <p className="infor__paragraph__mobile">
              Somos una agencia creativa que brinda <br />
              soluciones, mediante estrategias de marketing y <br />
              propuestas gráficas innovadoras.
            </p>
          </div>
          <ul className="networksContainer__mobile infor__paragraph__mobile">
              <li className="networksButton ">
                <a href="https://www.linkedin.com/company/gravity-agencia-de-marketing-y-publicidad/?viewAsMember=true">
                  <img src={images.Linkdln_light} alt="Linkdln" />
                </a>
              </li>
              <li className="networksButton ">
                <a href="https://wa.me/message/A6KRC3PTRPNDO1">
                  <img src={images.Whatsapp_light} alt="Whatsapp" />
                </a>
              </li>
              <li className="networksButton ">
                <a href="https://www.facebook.com/SomosGravity">
                  <img src={images.Facebook_light} alt="Facebook" />
                </a>
              </li>
              <li className="networksButton ">
                <a href="https://www.instagram.com/agencia_gravity/">
                  <img src={images.Instagram_light} alt="Instagram" />
                </a>
              </li>
              <li className="networksButton ">
                <a href="https://www.behance.net/gallery/150687073/Agencia-Gravity">
                  <img src={images.Be_light} alt="Be" />
                </a>
              </li>
            </ul>
          <img className="imgLight" src={light} alt="" />
        </div>
      </div>
    </>
  );
}

export default InformationHome;
