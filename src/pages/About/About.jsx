import { Navbar } from "../../components/index";
import { AboutHeader,AboutCards,AboutJoinUs } from "../../components/index";
import images from "../../assets/imagenes";

function About() {
    return (
        <div>
            <nav className='shadow bg-body rounded'>
                <Navbar />
            </nav>
          <AboutHeader/>
          <AboutCards/>
          <AboutJoinUs/>
        </div>
    )
}

export default About