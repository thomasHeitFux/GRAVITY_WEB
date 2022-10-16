import { Footer, Navbar } from "../../components/index";
import { AboutHeader,AboutCards,AboutJoinUs } from "../../components/index";
import images from "../../assets/imagenes";
import './About.css'
function About() {
    return (
        <div className="About">
            {/* <nav className='shadow bg-body rounded'>
                <Navbar />
            </nav> */}
          <AboutHeader/>
          <AboutCards/>
          <AboutJoinUs/>
          {/* <Footer/> */}
        </div>
    )
}

export default About