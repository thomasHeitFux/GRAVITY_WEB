import "./floatingBar.css";
import images from "../../assets/imagenes";
import { useState } from "react";

function FloatingBar() {
  const [icons, setIcons] = useState(false);

  return (
    <div className="floating__bar__container">
      {
        icons && (
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
        )
      }
      <ul className="floating__bar">
        <li onClick={() => setIcons(!icons)}>
          <img src={images.Glovo_icon____gravity} alt="Icono Gravity" />
        </li>
        <li>
          <img src={images.Whatssap_glovo} alt="Icono Wathsapp" />
        </li>
      </ul>
    </div>
  );
}

export default FloatingBar;
