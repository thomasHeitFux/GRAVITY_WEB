import { Footer, HeadContact, SectionContact } from "../../components";
import {motion} from "framer-motion"

function Contact() {
    const links = [
        {
            title: "Agenda aqui",
            to: "scheduleHere"
        }
    ]
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 1}}>
            <HeadContact />
            <SectionContact />
            <Footer links={links}/>
        </motion.div>
    );
}

export default Contact;
