import './projectsHome.css'
import images from '../../assets/imagenes'

function ProjectsHome() {
    return (
        <div id="Projects">
            <h3 className="title__section">Nuestros proyectos:</h3>
            <ul className='business__logo__container flex__center'>
                <li><img src={images.Glovo_icon____gravity} alt="Gravity Logo" /></li>
                <li><img src={images.Glovo_icon____gravity} alt="Gravity Logo" /></li>
                <li><img src={images.Glovo_icon____gravity} alt="Gravity Logo" /></li>
                <li><img src={images.Glovo_icon____gravity} alt="Gravity Logo" /></li>
                <li><img src={images.Glovo_icon____gravity} alt="Gravity Logo" /></li>
            </ul>
            <ul className='projects__container'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default ProjectsHome