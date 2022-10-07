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
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
      <ul className="networks__nav__container flex__center">
        <li className="network__nav__link">
          <a href="https://www.facebook.com/SomosGravity" target="_blank">
            <img src={images.Facebook_icon} alt="Facebook" />
          </a>
        </li>
        <li className="network__nav__link">
          <a href="https://www.linkedin.com/company/gravity-agencia-de-marketing-y-publicidad/?viewAsMember=true/" target="_blank">
            <img src={images.Linkdln_icon} alt="Linkdln" />
          </a>
        </li>
        <li className="network__nav__link">
          <a href="https://www.instagram.com/agencia_gravity/" target="_blank">
            <img src={images.Instagram_icon} alt="Instagram" />
          </a>
        </li>
        <li className="network__nav__link">
          <a href="https://www.behance.net/gallery/150687073/Agencia-Gravity" target="_blank">
            <img src={images.Be_icon} alt="Be" />
          </a>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
