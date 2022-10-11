import "./modalBrand.css";
import images from "../../assets/imagenes";
import { useEffect, useState } from "react";
import axios from "axios"

function ModalBrand() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then(res => setCountries(res.data))
  });
  return (
    <div className="backdrop__modal">
      <div className="modal__brand container">
        <div className="modal__brand__container">
          <div className="modal__information">
            <div>
              <h3>Branding</h3>
              <p>
                Desarollo de la identidad visual de una marca como Logo,
                papelería, diseño web, naming, elementos graficos,
                merchandising, etc.
              </p>
            </div>
            <div className="modal__brand__img flex__center">
              <img src={images.Marketing_icon} alt="Imagen de Servicios" />
            </div>
          </div>
          <form className="modal__form">
            <div>
              <input type="text" placeholder="Nombre" />
              <input type="text" placeholder="Pais" />
              <input type="text" placeholder="Telefono" />
              <input type="text" placeholder="Empresa" />
              <input type="text" placeholder="Correo" />
              <textarea placeholder="Te escuchamos..."></textarea>
            </div>
            <button className="btn__form">
              Enviar <img src={images.Arrow} alt="Arrow" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalBrand;
