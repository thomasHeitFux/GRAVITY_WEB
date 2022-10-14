import { Footer, Navbar } from "../../components/index";
import { AboutHeader,AboutCards,AboutJoinUs } from "../../components/index";
import images from "../../assets/imagenes";
import './About.css'
function About() {
    return (
        <div>
            {/* <nav className='shadow bg-body rounded'>
                <Navbar />
            </nav> */}
          <AboutHeader/>
          <AboutCards/>
          <div className="separate">
          <AboutJoinUs/>
          </div>
          <Footer/>
        </div>
    )
}

export default About