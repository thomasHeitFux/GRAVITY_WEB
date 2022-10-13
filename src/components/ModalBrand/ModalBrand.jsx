import "./modalBrand.css";
import images from "../../assets/imagenes";
import countries from "../../utils/countries.json";
import { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

function ModalBrand() {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    async function success(pos) {
      var crd = pos.coords;
      const data = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=5db0b8f0930d42bd8a2205054221706&q=${crd.latitude},${crd.longitude}&aqi=no`
      );
      console.log(data.data.location);
      const country = data.data.location.country;
      const dataCountry = countries.filter(
        (e) => e.name.toLowerCase() === country.toLowerCase()
      )[0];

      reset({
        country: dataCountry.name,
        telephone: dataCountry.dial_code
      })
    }
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  const submit = e => {
    console.log(e);
  }
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
          <form className="modal__form" onSubmit={handleSubmit(submit)}>
            <div>
              <input type="text" placeholder="Nombre" {...register("name")}/>
              <input type="text" placeholder="Pais" {...register("country")} />
              <input
                type="text"
                placeholder="Telefono"
                {...register("telephone")}
              />
              <input type="text" placeholder="Empresa" {...register("business")}/>
              <input type="text" placeholder="Correo" {...register("email")}/>
              <textarea placeholder="Te escuchamos..." {...register("message")}></textarea>
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
