import "./floatingBar.css";
import images from "../../assets/imagenes";
import { useState } from "react";
import { Link } from "react-router-dom"

function FloatingBar() {
  const [icons, setIcons] = useState(false);
  window.onscroll = () => {
    setIcons(false)
  }
  return (
    <div className="floating__bar__container">
      <ul className={`floating__icons ${icons ? "see_bar" : "hide_bar"}`}>
        <li>
          <img src={images.Linkdln_icon} alt="Icono Gravity" />
        </li>
        <li>
          <img src={images.Facebook_icon} alt="Icono Gravity" />
        </li>
        <li>
          <img src={images.Instagram_icon} alt="Icono Gravity" />
        </li>
        <li>
          <img src={images.Be_icon} alt="Icono Gravity" />
        </li>
        <li>
          <img src={images.Whatssap_icon} alt="Icono Gravity" />
        </li>
      </ul>
      <ul className="floating__bar">
        <li onClick={() => setIcons(!icons)} className="icon__g">
          <img src={images.Glovo_icon____gravity} alt="Icono Gravity" />
        </li>
        <li className="icon__g">
          <a href="https://wa.me/message/A6KRC3PTRPNDO1" target="_blank">
            <img src={images.Whatssap_glovo} alt="Icono Wathsapp" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FloatingBar;
