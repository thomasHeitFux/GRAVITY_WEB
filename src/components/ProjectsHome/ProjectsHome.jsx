import './projectsHome.css'
import images from '../../assets/imagenes'

function ProjectsHome({projects}) {
    return (
        <div id="Projects">
            <h3 className="title__section">Nuestros proyectos</h3>
            <ul className='business__logo__container flex__center'>
                {/* {projects.map(p=> {
                    return <li><img src={p.img} alt={p.name}/></li>
                })} */}
                <li><img src={images.Glovo_icon____gravity} alt="Gravity Logo" /></li>
                <li><img src={images.Glovo_icon____gravity} alt="Gravity Logo" /></li>
                <li><img src={images.Glovo_icon____gravity} alt="Gravity Logo" /></li>
                <li><img src={images.Glovo_icon____gravity} alt="Gravity Logo" /></li>
                <li><img src={images.Glovo_icon____gravity} alt="Gravity Logo" /></li>
            </ul>
            <ul className='projects__container'>
                <li>no hay data</li>
                <li>no hay data</li>
                <li>no hay data</li>
                <li>no hay data</li>
            </ul>
        </div>
    )
}

export default ProjectsHome