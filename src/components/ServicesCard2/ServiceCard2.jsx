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
      <div className="flex shadow-md gap-3 mt-4 rounded-xl w-80 h-32 p-2 justify-center items-center">
        <img className='w-16 h-16'src={img} alt="Imagen de Servicios" />
        <div>
        <h4 className="text-azul bold text-sm">{title}</h4>
        <p className="text-azul text-xs">{paragraph}</p>
        </div>
     
     
      </div>
    </motion.div>
  );
}

export default ServiceCard2;
