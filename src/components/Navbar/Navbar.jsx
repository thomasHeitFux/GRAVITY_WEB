import "./navbar.css";
import images from "../../assets/imagenes"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="nav container">
      <Link className="navbar__brand" to="/">
        <img src={images.Logo_nav} alt="Logo" />
      </Link>
      <ul className="links__nav__container flex__center">
        <li className="links__nav__li">
          <Link to="/nosotros">Nosotros</Link>
        </li>
        <li className="links__nav__li">
        <Link to="/servicios">Servicios</Link>
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
        
      </ul>
    </nav>
  );
}

export default Navbar;
