import imgContact from "../../../assets/imgContact";
import "./HeadContact.css";

function HeadContact() {
  return (
    <div className="div__backoground">
      <div className="headContact container" id="scheduleHere">
        <h1 className="bold">
          Antes de ello tenemos una asesoría <br /> gratuita para ti
        </h1>
        <button className="btnContact bold">Agenda aquí</button>
        <img src={imgContact.flag} className="flag" />
      </div>
    </div>
  );
}

export default HeadContact;
