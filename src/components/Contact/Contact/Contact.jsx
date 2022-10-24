import "./Contact.css";
import images from "../../../assets/imagenes"
import imgContact from "../../../assets/imgContact"

function SectionContact() {
    return (
        <div className="sectionContact container">
            <div className="cardContact">
                <div className="circle">
                    <img src={imgContact.envelopColor} className="develop" />
                </div>
                <h1 className="bold">Te escuchamos</h1>
                <p> Atención@Gravity.com</p>
                <button className="btn bold">Enviar Email</button>
            </div>
            <div className="networkContact">
                <h1 className="bold">
                    Haz despegar tu marca
                </h1>
                <p>
                    Te esperamos en nuestras distintas redes sociales:
                </p>
                <ul className="networksContain">
                    <li className="networkIcon">
                        <a href="https://www.linkedin.com/company/gravity-agencia-de-marketing-y-publicidad/?viewAsMember=true/" target="_blank">
                            <img src={images.Linkdln_icon} alt="Linkdln" />
                        </a>
                    </li>
                    <li className="networkIcon">
                        <a href="https://wa.me/message/A6KRC3PTRPNDO1" target="_blank">
                            <img src={images.Whatssap_icon} alt="Whatssap" />
                        </a>
                    </li>
                    <li className="networkIcon">
                        <a href="https://www.facebook.com/SomosGravity" target="_blank">
                            <img src={images.Facebook_icon} alt="Facebook" />
                        </a>
                    </li>
                    <li className="networkIcon">
                        <a href="https://www.instagram.com/agencia_gravity/" target="_blank">
                            <img src={images.Instagram_icon} alt="Instagram" />
                        </a>
                    </li>
                    <li className="networkIcon">
                        <a href="https://www.behance.net/gallery/150687073/Agencia-Gravity" target="_blank">
                            <img src={images.Be_icon} alt="Be" />
                        </a>
                    </li>
                    <li className="networkIcon">
                        <a href="https://www.tiktok.com/@agencia.gravity?is_from_webapp=1&sender_device=pc" target="_blank">
                            <img src={images.Tiktok_icon} alt="Tiktok" />
                        </a>
                    </li>
                    <li className="networkIcon">
                        <a href="https://www.pinterest.com/AgenciaGravity/" target="_blank">
                            <img src={images.Pinterest_icon} alt="Pinterest" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SectionContact;