import { Footer, Navbar } from "../../components/index";
import { AboutHeader,AboutCards,AboutJoinUs } from "../../components/index";
import images from "../../assets/imagenes";
import './About.css'
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
        <div className="About">
            <nav className='shadow bg-body rounded'>
                <Navbar />
            </nav>
          <AboutHeader/>
          <AboutCards/>
          <AboutJoinUs/>
          <Footer links={links}/>
        </div>
    )
}

export default About