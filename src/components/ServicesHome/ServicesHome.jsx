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
    <div className="max-w-6xl m-auto px-5 lg:px-0" id="Services">
      <h3 className="title__section">Nuestros servicios</h3>
      <ul className="flex justify-between items-center flex-col gap-[20px] sm:flex-row">
        {services.map((card) => (
          <motion.li
            key={card.id}
            layoutId={card.id}
            className="w-[350px] h-[170px] p-[15px] flex justify-start items-center gap-[30px] rounded-[20px] duration-300 sm:flex-col sm:h-[294px] lg:w-[355px]
            lg:h-[502px] "
            onClick={() => changeId(card)}
            style={{boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)"}}
          >
            <img src={images[card.img]} alt={card.alt} className="w-[70px] lg:w-[111px] lg:h-[130px]" />
            <div>
              <h4 className="text-[18px] text-azul text-start mb-[5px] sm:text-center lg:text-[33px]">{card.title}</h4>
              <p className="text-[12px] text-start sm:text-center lg:text-[21px]">{card.paragraph}</p>
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
