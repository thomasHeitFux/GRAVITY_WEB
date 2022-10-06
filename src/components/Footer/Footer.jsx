import React from "react";
import logo from '../../assets/Marca/logos png/Gravity_logo6.png';
import icon from "../../assets/imagenes";

import "./Footer.css";

function Footer() {
  return (
    <div className="footerSection">
      <div className="footerColumns">
        <div className="footerFirstColumn">
          <img className="logoFooter" src={logo} />
          <ul className="listFooter">
            <li> <a href="#"> <img src={icon.Arrow_List} width="8px" /> Nuestros proyectos</a> </li>
            <li> <a href="#"><img src={icon.Arrow_List} width="8px" /> Nuestros servicios</a> </li>
            <li> <a href="#"><img src={icon.Arrow_List} width="8px" /> ¿No sabes donde comenzar? </a> </li>
            <li> <a href="#"><img src={icon.Arrow_List} width="8px" /> Nuestro equipo</a>  </li>
            <li> <a href="#"><img src={icon.Arrow_List} width="8px" /> ¿Quienes somos?</a>  </li>
            <li> <a href="#"><img src={icon.Arrow_List} width="8px" /> Suscribete a nuestra comunidad</a>  </li>
          </ul>
        </div>
        <div className="footerSecondColumn">
          <h3 className="footerTitle bold">Redes Sociales</h3>
          <ul className="listExtra">
            <li> <a href="#"><img src={icon.Arrow_List} width="8px" /> Instagram</a> </li>
            <li> <a href="#"><img src={icon.Arrow_List} width="8px" /> Facebook</a> </li>
            <li> <a href="#"><img src={icon.Arrow_List} width="8px" /> Behance</a> </li>
            <li> <a href="#"><img src={icon.Arrow_List} width="8px" /> Pinterest</a> </li>
            <li> <a href="#"><img src={icon.Arrow_List} width="8px" /> Tik Tok</a> </li>
            <li> <a href="#"><img src={icon.Arrow_List} width="8px" /> LinkedIn</a>  </li>
          </ul>
          <h3 className="footerTitle bold">Correo Electrónico</h3>
          <ul>
            <li> <a href="#"><img src={icon.Arrow_List} width="8px" /> Atencion@gravity.com</a> </li>
          </ul>
        </div>
        <div className="footerThirdColumn">
          <h3 className="footerTitle bold">Forma parte del equipo:</h3>
          <ul>
            <li> <a href="#"><img src={icon.Arrow_List} width="8px" /> Postulate aquí</a> </li>
          </ul>
          <h3 className="footerTitle bold titleAliados">Aliados:</h3>
          <img src="" alt="" />
        </div>
      </div>
      <div className="creditsSection">
        <button>
          <img src={icon.Arrow_Footer} className="arrow" />
        </button>
        <p>
          Web elaborada por Agencia Gravity y Josué Tello
        </p>
        <p>
          Copyright © 2022 Agencia Gravity
        </p>
      </div>
    </div>
  );
}

export default Footer;
