import light from "../../assets/iconos RRSS/Iconos de gravity/Luces.png";
import images from "../../assets/imagenes";
import React from "react";

function InformationHome() {
  return (
    <div
      className="w-full flex justify-center items-center"
      style={{ backgroundColor: "#0d2633" }}
      id="InromationHome"
    >
      <div className="max-w-6xl ml-5 py-10 px-5 relative w-full sm:flex justify-center items-center sm:ml-0">
        <div className="sm:pr-4 sm:flex sm:flex-col sm:justify-center sm:items-start lg:items-start">
          <h1 className="font-bold sm:text-[20px] lg:text-[35px]" style={{ color: "#f6b65f" }}>
            Agencia Gravity
          </h1>
          <p className="hidden text-white my-4 text-[12px] sm:block sm:text-start sm:w-[161px] lg:text-[19px] lg:w-[280px] lg:text-start lg:-mt-1">
            Especialistas en campañas en redes sociales.
          </p>
          <p className="text-white text-[10px] w-[260px] mt-4 sm:hidden">
            Somos una agencia creativa que brinda soluciones, mediante
            estrategias de marketing y propuestas <br /> gráficas innovadoras.
          </p>
          <ul className="hidden sm:flex gap-[10px] lg:gap-[15px]">
            <li className="w-[23px] lg:w-[40px]">
              <a
                href="https://www.linkedin.com/company/gravity-agencia-de-marketing-y-publicidad/?viewAsMember=true"
                target="_blank"
              >
                <img src={images.Linkdln_light} alt="Linkdln" />
              </a>
            </li>
            <li className="w-[23px] lg:w-[40px]">
              <a href="https://wa.me/message/A6KRC3PTRPNDO1" target="_blank">
                <img src={images.Whatsapp_light} alt="Whatsapp" />
              </a>
            </li>
            <li className="w-[23px] lg:w-[40px]">
              <a href="https://www.facebook.com/SomosGravity" target="_blank">
                <img src={images.Facebook_light} alt="Facebook" />
              </a>
            </li>
            <li className="w-[23px] lg:w-[40px]">
              <a
                href="https://www.instagram.com/agencia_gravity/"
                target="_blank"
              >
                <img src={images.Instagram_light} alt="Instagram" />
              </a>
            </li>
            <li className="w-[23px] lg:w-[40px] ">
              <a
                href="https://www.behance.net/gallery/150687073/Agencia-Gravity"
                target="_blank"
              >
                <img src={images.Be_light} alt="Be" />
              </a>
            </li>
          </ul>
        </div>
        <div
          className="hidden w-[308px] sm:block sm:pl-6 sm:py-2 lg:w-[600px] lg:pl-10"
          style={{ borderLeft: "1px solid #fff" }}
        >
          <p className="text-white text-[12px] lg:text-[19px]">
            Somos una agencia creativa que brinda soluciones innovadoras
            mediante estrategias de marketing acompañada de la creación de
            identidades visuales fuertes y efectivas. Gestionamos y diseñamos
            feeds de redes.
            <br /> <br />
            La Agencia gravity brinda servicios de diversas disciplinas con el
            objetivo de trabajar en equipo, haciéndolo de manera integral para
            el beneficio de sus clientes.
          </p>
        </div>
        <img className="absolute w-[15%] min-w-[80px] bottom-0 right-0" src={light} />
      </div>
    </div>
  );
}

export default InformationHome;
