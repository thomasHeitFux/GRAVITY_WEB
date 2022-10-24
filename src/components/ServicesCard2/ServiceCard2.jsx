import "./serviceCard2.css";
import { motion } from "framer-motion";

function ServiceCard2({ img, paragraph, title, i }) {
  return (
    <motion.div
      className="service_card_2 flex__center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{delay: i, duration: 1}}
    >
      <div className="service_card_2_text">
        <h4 className="color__secondary">{title}</h4>
        <p>{paragraph}</p>
      </div>
      <div className="service_card_2_img flex__center">
        <img src={img} alt="Imagen de Servicios" />
      </div>
    </motion.div>
  );
}

export default ServiceCard2;
