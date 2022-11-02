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
    <div
      className="w-full flex flex-col"
      style={{ backgroundColor: "#0d2633" }}
    >
      <div className="flex justify-between flex-col text-white	px-5 pt-8 pb-2.5 max-w-6xl m-auto w-full">
        <div className="footerFirstColumn">
          <a href="/">
            <img className="w-28" src={logo} />
          </a>
          <ul className="listFooter hidden">
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
          <h3 className="mb-2.5 mt-7 tracking-wider bold">Redes Sociales</h3>
          <ul className="listExtra">
            <li>
              <a
                href="https://www.instagram.com/agencia_gravity/"
                target="_blank"
                className="flex gap-0.5	"
              >
                <img src={icon.Arrow_List} width="8px" /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/SomosGravity"
                target="_blank"
                className="flex gap-0.5	"
              >
                <img src={icon.Arrow_List} width="8px" /> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.behance.net/gallery/150687073/Agencia-Gravity"
                target="_blank"
                className="flex gap-0.5	"
              >
                <img src={icon.Arrow_List} width="8px" /> Behance
              </a>
            </li>
            <li>
              <a
                href="https://www.pinterest.com/AgenciaGravity/"
                target="_blank"
                className="flex gap-0.5	"
              >
                <img src={icon.Arrow_List} width="8px" /> Pinterest
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@agencia.gravity?is_from_webapp=1&sender_device=pc"
                target="_blank"
                className="flex gap-0.5	"
              >
                <img src={icon.Arrow_List} width="8px" /> Tik Tok
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/gravity-agencia-de-marketing-y-publicidad/?viewAsMember=true/"
                target="_blank"
                className="flex gap-0.5	"
              >
                <img src={icon.Arrow_List} width="8px" /> LinkedIn
              </a>
            </li>
          </ul>
          <h3 className="footerTitle bold">Correo Electrónico</h3>
          <ul>
            <li>
              <a href="#"                 className="flex gap-0.5	"
>
                <img src={icon.Arrow_List} width="8px" /> Atencion@gravity.com
              </a>
            </li>
          </ul>
        </div>
        <div className="footerThirdColumn hidden">
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
      <div
        className="relative w-full justify-center items-center	text-center	text-white p-6"
        style={{ backgroundColor: "#07212e" }}
      >
        <button
          className="absolute right-5	-top-1/4 w-10 h-10 rounded-full border-4 border-solid border-white duration-300 hover:scale-125"
          onClick={() => scroll.scrollToTop()}
          style={{ backgroundColor: "#f5b45f" }}
        >
          <img src={icon.Arrow_Footer} className="w-9/12 m-auto" />
        </button>
        <p className="text-xs">
          Web elaborada por Agencia Gravity y Josué Tello
        </p>
        <p className="text-xs">Copyright © 2022 Agencia Gravity</p>
      </div>
    </div>
  );
}

export default Footer;
