import { motion } from "framer-motion";
import images from "../../assets/imagenes";

function EvilServiceCard({ img, paragraph, title, i }) {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i, duration: 1 }}
    >
      <div className="flex flex-row gap-3 mt-4 rounded-xl w-96 h-32 justify-center items-center lg:w-full lg:gap-0">
        <div className="w-[290px] lg:w-full">
          <h4 className="text-naranja bold text-sm lg:text-[28px]">{title}</h4>
          <p className="text-white text-[12px] lg:text-[16px] lg:w-[500px] lg:mt-4">{paragraph}</p>
        </div>
        <div className="flex justify-center items-center aspect-square bg-white rounded-full w-20 lg:w-[120px]">
          <img className="w-[70%]" src={images[img]} alt="Imagen de Servicios" />
        </div>
      </div>
    </motion.div>
  );
}

export default EvilServiceCard;
