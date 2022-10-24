import { Footer, Navbar } from "../../components/index";
import { AboutHeader,AboutCards,AboutJoinUs ,FloatingBar} from "../../components/index";
import images from "../../assets/imagenes";
import './About.css'
import { motion } from "framer-motion"

function About() {
    const links = [
        {
            title: "Nosotros",
            to: "AbautHeader"
        },
        {
            title: "Mision y vision",
            to: "AbautCards"
        },
        {
            title: "Se parte del equipo de Gravity",
            to: "AboutJoinUs"
        }
    ]
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 1}}>       
          <Navbar />
      <FloatingBar />   
          <AboutHeader/>
          <AboutCards/>
          <AboutJoinUs/>
          <Footer links={links}/>
        </motion.div>
    )
}

export default About