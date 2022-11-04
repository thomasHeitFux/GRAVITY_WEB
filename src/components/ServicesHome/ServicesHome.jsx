import { AnimatePresence, motion } from "framer-motion";
import ModalBrand from "../ModalBrand/ModalBrand";
import services from "../../utils/services.json";
import images from "../../assets/imagenes";
import { useState } from "react";
import "./servicesHome.css";

function ServicesHome() {
  const [selectedId, setSelectedId] = useState(null);
  const [dataCard, setDataCard] = useState([]);

  const changeId = (e) => {
    setDataCard(e);
    setSelectedId(e.id);
  };

  const closeModal2 = (i) => {
    setSelectedId(i);
  };

  return (
    <div className="container" id="Services">
      <h3 className="title__section">Nuestros servicios</h3>
      <ul className="services__list__container">
        {services.map((card) => (
          <motion.li
            key={card.id}
            layoutId={card.id}
            className="card__services__container"
            onClick={() => changeId(card)}
          >
            <img src={images[card.img]} alt={card.alt} />
            <div>
              <h4 className="card__title">{card.title}</h4>
              <p className="card__p">{card.paragraph}</p>
            </div>
          </motion.li>
        ))}
      </ul>
      <AnimatePresence>
        {selectedId && (
          <ModalBrand closeModal2={closeModal2} dataCard={dataCard} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default ServicesHome;
