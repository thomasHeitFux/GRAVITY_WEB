import images from "../../assets/imagenes";
import "./AboutJoinUs.css"
function AboutJoinUs() {
    return (
        <div>
        
            <div className="start__abaut">
                <div className="start__home__container container ">
                    <div className="start__home__main abaut__container">
                        <h3 className="color__secondary  title__join">Se parte del equipo de Gravity</h3>
                        <p>Si deseas pertenecer al equipo Gravity, adjuntanos los
                            siguientes datos junto a tu CV y link de portafolio.
                        </p>
                        <div className=" text__light">
                            <p>- Resumen profesional.</p>
                            <p>- Cargo al que se aspira.</p>
                            <p>- Aspiracion salarial.</p>
                            <p>- CV y portafolio.</p>
                        </div>
                        <button className="btn__primary btn__abaut">Postulate</button>
                    </div>
                    <div className="abaut__ornament__container ">
                        <img className="abaut_img__ornament img__1" src={images.Human_001} alt="Human Gravity" />

                        <div className="box__yellow"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutJoinUs;