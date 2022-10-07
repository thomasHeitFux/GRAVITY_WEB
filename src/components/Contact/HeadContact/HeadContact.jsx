import imgContact from "../../../assets/imgContact"
import "./HeadContact.css";

function HeadContact() {
    return (
        <div className="headContact container">
            <h1 className="bold">
                Antes de ello tenemos una asesoría <br/> gratuita para ti
            </h1>
            <button className="btnContact bold">Agenda aquí</button>
            <p>
                Cotiza o pregunta por nuestros servicios a: <br/>
                Atención@Gravity.com
            </p>
            <img src={imgContact.flag} className="flag" />
        </div>
    );
}

export default HeadContact;