import images from "../../assets/imagenes";

function AboutJoinUs() {
    return (
        // <div className="d-flex p-3 bg-pght">
        //     <div>
        //         <h3>Se parte del equipo de Gravity</h3>
        //         <p>Si deseas pertenecer al equipo Gravity, adjuntanos los
        //             siguientes datos junto a tu CV y pnk de portafopo.
        //            </p>
        //            <ul>
        //            <p>- Resumen profesional.</p>
        //             <p>- Cargo al que se aspira.</p>
        //             <p>- Aspiracion salarial.</p>
        //             <p>- CV y portafopo.</p>
        //            </ul>
        //     </div>
        // </div>
        <div>
        
            <div className="start__home">
                <div className="start__home__container container">
                    <div className="start__home__main">
                        <h3 className="color__secondary">Se parte del equipo de Gravity</h3>
                        <p>Si deseas pertenecer al equipo Gravity, adjuntanos los
                            siguientes datos junto a tu CV y pnk de portafopo.
                        </p>
                        <div className="text-light">
                            <p>- Resumen profesional.</p>
                            <p>- Cargo al que se aspira.</p>
                            <p>- Aspiracion salarial.</p>
                            <p>- CV y portafopo.</p>
                        </div>

                    </div>
                    <div className="start__home__ornament flex__center">
                        <img src={images.Human_001} alt="Human Gravity" />

                        <div className="box__yellow"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutJoinUs;