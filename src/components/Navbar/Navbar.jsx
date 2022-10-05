import "./navbar.css";
import images from "../../assets/imagenes"

function Navbar() {
  return (
    <nav className="nav container">
      <a className="navbar__brand" href="#">
        <img src={images.Logo_nav} alt="Logo" />
      </a>
      <ul className="links__nav__container flex__center">
        <li className="links__nav__li">
          <a href="#">Nosotros</a>
        </li>
        <li className="links__nav__li">
          <a href="#">Servicios</a>
        </li>
        <li className="links__nav__li">
          <a href="#">Clientes</a>
        </li>
        <li className="links__nav__li">
          <a href="#">Contacto</a>
        </li>
      </ul>
      <ul className="networks__nav__container flex__center">
        <li className="network__nav__link">
          <a href="#">
            <img src={images.Facebook_icon} alt="Facebook" />
          </a>
        </li>
        <li className="network__nav__link">
          <a href="#">
            <img src={images.Linkdln_icon} alt="Linkdln" />
          </a>
        </li>
        <li className="network__nav__link">
          <a href="#">
            <img src={images.Instagram_icon} alt="Instagram" />
          </a>
        </li>
        <li className="network__nav__link">
          <a href="#">
            <img src={images.Be_icon} alt="Be" />
          </a>
        </li>
        <li className="country__container">
            <span>Pe.</span>
            <img src={images.Pe_icon} alt="Bandera de Peru" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
