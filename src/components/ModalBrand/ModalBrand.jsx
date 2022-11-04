import { motion, AnimatePresence } from "framer-motion";
import countries from "../../utils/countries.json";
import images from "../../assets/imagenes";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "axios";
import "./modalBrand.css";

function ModalBrand({ closeModal2, dataCard }) {
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
        telephone: dataCountry.dial_code,
      });
    }
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  const submit = (e) => {
    console.log(e);
  };
  return (
    <motion.div className="backdrop__modal">
      <div className="modal__brand__container container">
        <button className="btn__close__modal" onClick={() => closeModal2(null)}>
          X
        </button>
        <div className="modal__information">
          <div>
            <h3>{dataCard.title}</h3>
            <p>{dataCard.paragraph}</p>
          </div>
          <div className="modal__brand__img flex__center">
            <img src={images[dataCard.img]} alt={dataCard.alt} />
          </div>
        </div>
        <form className="modal__form" onSubmit={handleSubmit(submit)}>
          <div>
            <input type="text" placeholder="Nombre" {...register("name")} />
            <input type="text" placeholder="Pais" {...register("country")} />
            <input
              type="text"
              placeholder="Telefono"
              {...register("telephone")}
            />
            <input
              type="text"
              placeholder="Empresa"
              {...register("business")}
            />
            <input type="text" placeholder="Correo" {...register("email")} />
            <textarea
              placeholder="Te escuchamos..."
              {...register("message")}
            ></textarea>
          </div>
          <button className="btn__form">
            Enviar <img src={images.Arrow} alt="Arrow" />
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default ModalBrand;
