
import { motion } from "framer-motion";

function EvilServiceCard({ img, paragraph, title, i }) {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{delay: i, duration: 1}}
    >
      <div className="flex flex-row shadow-md gap-3 mt-4 rounded-xl w-96 h-32 p-2 justify-center items-center lg:w-full ">
        <div className="w-52 lg:w-full">
        <h4 className="text-naranja bold text-sm lg:text-3xl">{title}</h4>
        <p className="text-white text-xs lg:text-xl">{paragraph}</p>
        </div>
       <div className="flex justify-center items-center bg-white rounded-full w-20 h-20">
        <img className='w-16 h-16'src={img} alt="Imagen de Servicios" />
       </div>
     
     
      </div>
    </motion.div>
  );
}

export default EvilServiceCard;