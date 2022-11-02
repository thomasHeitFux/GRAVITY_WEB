import imgContact from "../../../assets/imgContact";
import "./HeadContact.css";

function HeadContact() {
  return (
    <div className="div__backoground">
      <div className="headContact flex flex-row-reverse sm:gap-32 " id="scheduleHere">
      <div className="flex flex-col gap-3 justify-center items-center lg:gap-6">
      <p className="text-center text-sm sm:text-2xl lg:text-4xl lg:w-97">
          Antes de ello tenemos una asesoría gratuita para ti
        </p>
        <button className="btnContact bold w-32 h-8 rounded-3xl  text-base">Agenda aquí</button>
      </div>
        <img src={imgContact.flag} className=" w-28 ml-0 mb-0 sm:w-40 lg:w-56 " />
      </div>
    </div>
  );
}

export default HeadContact;
