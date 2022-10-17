import "./modalBrand.css";
import images from "../../assets/imagenes";
import countries from "../../utils/countries.json";
import { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../../store/slices/modal.slice";
import { motion, AnimatePresence } from "framer-motion";

function ModalBrand() {
  const modal = useSelector((state) => state.modal);
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

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

  const closeModal = () => {
    dispatch(setModal(null));
  };
  return (
    <div className="backdrop__modal">
      <AnimatePresence>
        <motion.div
          className="modal__brand container"
          initial={{ y: "-200%" }}
          animate={{ y: "0" }}
          exit={{ y: "-200%" }}
        >
          <div className="modal__brand__container">
            <button className="btn__close__modal" onClick={closeModal}>
              X
            </button>
            <div className="modal__information">
              <div>
                <h3>{modal.title}</h3>
                <p>{modal.paragraph}</p>
              </div>
              <div className="modal__brand__img flex__center">
                <img src={modal.img} alt={modal.alt} />
              </div>
            </div>
            <form className="modal__form" onSubmit={handleSubmit(submit)}>
              <div>
                <input type="text" placeholder="Nombre" {...register("name")} />
                <input
                  type="text"
                  placeholder="Pais"
                  {...register("country")}
                />
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
                <input
                  type="text"
                  placeholder="Correo"
                  {...register("email")}
                />
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
      </AnimatePresence>
    </div>
  );
}

export default ModalBrand;
