import logo from "../../assets/Marca/logos png/Gravity_logo6.png";
import { animateScroll as scroll } from "react-scroll";
import React, { useState } from "react";
import icon from "../../assets/imagenes";
import { Link } from "react-scroll";
import images from "../../assets/imagenes";

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
      <div className="flex justify-between flex-col text-white	px-5 pt-8 pb-2.5 max-w-6xl m-auto w-full sm:flex-row lg:p-0 lg:pt-16 lg:pb-5">
        <div className="footerFirstColumn">
          <a href="/">
            <img className="w-28 lg:w-52 lg:pb-4" src={logo} />
          </a>
          <ul className="listFooter hidden sm:block mt-2">
            {links?.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  offset={-padTop}
                  smooth={true}
                  duration={1000}
                  className="flex align-middle gap-1 text-xs mb-2 lg:text-base cursor-pointer"
                >
                  <img src={icon.Arrow_List} width="8px" /> {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footerSecondColumn sm:pt-[27px] lg:pt-[60px]">
          <h3 className="mb-2.5 mt-7 tracking-wider text-xs sm:mt-0 lg:text-[16px]">Redes Sociales</h3>
          <ul className="flex gap-3 mb-2.5 lg:grid grid-cols-2">
            <li>
              <a
                href="https://www.instagram.com/agencia_gravity/"
                target="_blank"
                className="flex gap-0.5	"
              >
                <img src={icon.Arrow_List} width="8px" className="hidden lg:block lg:mr-1"/> <span className="hidden lg:block">Instagram</span>
                <img src={images.Instagram_light} alt="Instagram_icon" className="w-5 lg:hidden"/>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/SomosGravity"
                target="_blank"
                className="flex gap-0.5	"
              >
                <img src={icon.Arrow_List} width="8px" className="hidden lg:block lg:mr-1"/> <span className="hidden lg:block">Facebook</span>
                <img src={images.Facebook_light} alt="Instagram_icon" className="w-5 lg:hidden"/>

              </a>
            </li>
            <li>
              <a
                href="https://www.behance.net/gravityagencia"
                target="_blank"
                className="flex gap-0.5	"
              >
                <img src={icon.Arrow_List} width="8px" className="hidden lg:block lg:mr-1"/> <span className="hidden lg:block">Behance</span>
                <img src={images.Be_light}alt="Instagram_icon" className="w-5 lg:hidden" />

              </a>
            </li>
            <li>
              <a
                href="https://www.pinterest.com/AgenciaGravity/"
                target="_blank"
                className="flex gap-0.5	"
              >
                <img src={icon.Arrow_List} width="8px" className="hidden lg:block lg:mr-1"/> <span className="hidden lg:block">Pinterest</span>
                <img src={images.Tik_tok_light} alt="Instagram_icon" className="w-5 lg:hidden" />

              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@agencia.gravity?is_from_webapp=1&sender_device=pc"
                target="_blank"
                className="flex gap-0.5	"
              >
                <img src={icon.Arrow_List} width="8px" className="hidden lg:block lg:mr-1"/> <span className="hidden lg:block">Tik Tok</span>
                <img src={images.Tik_tok_light} alt="Instagram_icon" className="w-5 lg:hidden" />

              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/gravity-agencia-de-marketing-y-publicidad/?viewAsMember=true/"
                target="_blank"
                className="flex gap-0.5	"
              >
                <img src={icon.Arrow_List} width="8px" className="hidden lg:block lg:mr-1"/> <span className="hidden lg:block">LinkedIn</span>
                <img src={images.Linkdln_light} alt="Instagram_icon" className="w-5 lg:hidden" />

              </a>
            </li>
          </ul>
          <h3 className="text-xs lg:text-[16px]">Correo Electrónico</h3>
          <ul>
            <li>
              <a href="#" className="flex align-middle gap-1 text-xs mb-2 lg:text-base">
                <img src={icon.Arrow_List} width="8px" /> contacto@agenciagravity.com
              </a>
            </li>
          </ul>
        </div>
        <div className="footerThirdColumn hidden sm:block sm:pt-[27px] lg:pt-[60px]">
          <h3 className="text-xs lg:text-[16px]">Forma parte del equipo:</h3>
          <ul>
            <li>
              <a href="#" className="flex align-middle gap-1 text-xs mb-2 lg:text-base">
                <img src={icon.Arrow_List} width="8px" /> Postulate aquí
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="relative w-full justify-center items-center	text-center	text-white p-6"
        style={{ backgroundColor: "#07212e" }}
      >
        <button
          className="absolute right-2	-top-1/4 w-10 h-10 rounded-full border-4 border-solid border-white duration-300 hover:scale-125 z-20"
          onClick={() => scroll.scrollToTop()}
          style={{ backgroundColor: "#f5b45f" }}
        >
          <img src={icon.Arrow_Footer} className="w-9/12 m-auto" />
        </button>
        <p className="text-xs">
          Web elaborada por Agencia Gravity
        </p>
        <p className="text-xs">Copyright © 2022 Agencia Gravity</p>
      </div>
    </div>
  );
}

export default Footer;
