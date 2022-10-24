import React, { useState } from "react";
import logo from "../../assets/Marca/logos png/Gravity_logo6.png";
import icon from "../../assets/imagenes";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import "./Footer.css";

function Footer({ links }) {
  const [padTop, setPatTop] = useState(0);

  window.onscroll = () => {
    setPatTop(screen.height / 3 - 170);
  };
  return (
    <div className="footerSection">
      <div className="footerColumns container">
        <div className="footerFirstColumn">
          <a href="/">
            <img className="logoFooter" src={logo} />
          </a>
          <ul className="listFooter">
            {links?.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  offset={-padTop}
                  smooth={true}
                  duration={1000}
                >
                  <img src={icon.Arrow_List} width="8px" /> {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footerSecondColumn">
          <h3 className="footerTitle bold">Redes Sociales</h3>
          <ul className="listExtra">
            <li>
              <a
                href="https://www.instagram.com/agencia_gravity/"
                target="_blank"
              >
                <img src={icon.Arrow_List} width="8px" /> Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/SomosGravity" target="_blank">
                <img src={icon.Arrow_List} width="8px" /> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.behance.net/gallery/150687073/Agencia-Gravity"
                target="_blank"
              >
                <img src={icon.Arrow_List} width="8px" /> Behance
              </a>
            </li>
            <li>
              <a
                href="https://www.pinterest.com/AgenciaGravity/"
                target="_blank"
              >
                <img src={icon.Arrow_List} width="8px" /> Pinterest
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@agencia.gravity?is_from_webapp=1&sender_device=pc"
                target="_blank"
              >
                <img src={icon.Arrow_List} width="8px" /> Tik Tok
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/gravity-agencia-de-marketing-y-publicidad/?viewAsMember=true/"
                target="_blank"
              >
                <img src={icon.Arrow_List} width="8px" /> LinkedIn
              </a>
            </li>
          </ul>
          <h3 className="footerTitle bold">Correo Electrónico</h3>
          <ul>
            <li>
              <a href="#">
                <img src={icon.Arrow_List} width="8px" /> Atencion@gravity.com
              </a>
            </li>
          </ul>
        </div>
        <div className="footerThirdColumn">
          <h3 className="footerTitle bold">Forma parte del equipo:</h3>
          <ul>
            <li>
              <a href="#">
                <img src={icon.Arrow_List} width="8px" /> Postulate aquí
              </a>
            </li>
          </ul>
          <h3 className="footerTitle bold titleAliados">Aliados:</h3>
          <img src="" alt="" />
        </div>
      </div>
      <div className="creditsSection">
        <button onClick={() => scroll.scrollToTop()}>
          <img src={icon.Arrow_Footer} className="arrow" />
        </button>
        <p>Web elaborada por Agencia Gravity y Josué Tello</p>
        <p>Copyright © 2022 Agencia Gravity</p>
      </div>
    </div>
  );
}

export default Footer;
