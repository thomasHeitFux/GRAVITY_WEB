import "./navbar.css";
import images from "../../assets/imagenes";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const location = useLocation().pathname;
  
  const handleToggle =()=>{
    setOpenMenu(!openMenu)
  }

  
  return (
    <div className="">
      <nav className="flex  justify-between  items-center h-16 shadow-lg z-50">
      <Link className=" ml-2 z-50" to="/">
          <img className="w-32" src={images.Logo_nav} alt="Logo" />
        </Link>
        <button className="z-50 lg:hidden" onClick={handleToggle}>
          <img  onClick={handleToggle} src={images.Menu_icon} alt="Menu Icon" />
        </button>
        <div
          className="mt-96 bg-white fixed w-full  h-96 flex flex-col z-10 justify-center items-center duration-500 gap-5 lg:flex-row lg:w-3/5 lg:justify-between lg:mt-0 lg:h-3 lg:m-2  lg:static"
          style={{ right: openMenu  ? "0px" : "-100%" }}
        >
          <ul className="flex flex-col gap-5 lg:flex-row lg:mt-0 text-lg ">
            <li onClick={handleToggle} className="links__nav__li ">
              <Link
                to="/nosotros"
                className={location === "/nosotros" ? "resalt__link" : "text-azul"}
              >
                Nosotros
              </Link>
            </li>
            <li onClick={handleToggle} className="">
              <Link
                to="/servicios"
                className={location === "/servicios" ? "resalt__link" : "text-azul"}
                c
              >
                Servicios
              </Link>
            </li>
            <li onClick={handleToggle} className="">
              <Link
                to="/clientes"
                className={location === "/clientes" ? "resalt__link" : "text-azul"}
              >
                Clientes
              </Link>
            </li>
            <li onClick={handleToggle} className="">
              <Link
                to="/contacto"
                className={location === "/contacto" ? "resalt__link" : "text-azul"}
              >
                Contacto
              </Link>
            </li>
          </ul>
          <ul className="flex gap-5">
            <li className="w-8 h-8">
              <a href="https://www.facebook.com/SomosGravity" target="_blank">
                <img src={images.Facebook_icon} alt="Facebook" />
              </a>
            </li>
            <li className="w-8 h-8">
              <a
                href="https://www.linkedin.com/company/gravity-agencia-de-marketing-y-publicidad/?viewAsMember=true/"
                target="_blank"
              >
                <img src={images.Linkdln_icon} alt="Linkdln" />
              </a>
            </li>
            <li className="w-8 h-8">
              <a
                href="https://www.instagram.com/agencia_gravity/"
                target="_blank"
              >
                <img src={images.Instagram_icon} alt="Instagram" />
              </a>
            </li>
            <li className="w-8 h-8">
              <a
                href="https://www.behance.net/gallery/150687073/Agencia-Gravity"
                target="_blank"
              >
                <img src={images.Be_icon} alt="Be" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
   
    </div>
  );
}

export default Navbar;
