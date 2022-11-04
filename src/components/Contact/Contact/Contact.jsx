import "./Contact.css";
import images from "../../../assets/imagenes"
import imgContact from "../../../assets/imgContact"

function SectionContact() {
    return (
        <div className="flex flex-col-reverse pt-12 pb-12 w-full text-center justify-center items-center xl:flex-row  lg:flex-row md:flex-col sm:flex-col ">
            <div className="cardContact flex w-4/4  p-6 space-x-2 rounded-3xl xl:flex-col lg:flex-col lg:space-x-0 md:flex-row  lg:w-1/4 md:w-4/5 justify-center items-center sm:w-4/5 sm:space-x-16 lg:p-20">
                <div className="flex items-center justify-center h-24 w-24 bg-white rounded-full z-10">
                    <img src={imgContact.envelopColor} className="w-16" />
                </div>
                <div className="flex flex-col justify-center items-center">
                <h1 className="bold">Te escuchamos</h1>
                <p> Atención@Gravity.com</p>
                <button className="btn bold lg:w-full w-32 sm:w-48 rounded-3xl p-1 ">Enviar Email</button>
                </div>
            </div>
            <div className="networkContact flex flex-col items-center pb-5 gap-5  xl:flex-col lg:flex-col lg:w-2/5 md:flex-row sm:w-4/5 sm:pt-5 sm:flex-row">
                <h1 className="bold">
                    Haz despegar tu marca
                </h1>
                <div className="flex flex-col lg:flex-col sm:flex-col-reverse gap-4">
                <p>
                    Te esperamos en nuestras distintas redes sociales:
                </p>
                <ul className="networksContain flex w-full justify-center gap-3">
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
        </div>
    );
}

export default SectionContact;