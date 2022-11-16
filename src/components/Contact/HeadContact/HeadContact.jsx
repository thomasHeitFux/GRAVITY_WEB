import imgContact from "../../../assets/imgContact";
import "./HeadContact.css";

function HeadContact() {
  return (
    <div>
      <h3 className="text-2xl lg:text-4xl bold mt-3 mb-3 text-center text-azul sm:hidden" id="AbautHeader">
        Contacto
      </h3>
      <div className="bg-azul w-full h-[200px] sm:h-[300px] lg:h-[480px]">
        <div className="w-full h-full flex justify-end items-center relative sm:gap-32 max-w-6xl m-auto" id="scheduleHere">
          <img src={imgContact.flag} className="w-[100px] absolute bottom-0 left-5 sm:left-16 sm:w-[166px] lg:-left-16 lg:w-[280px]" />
          <div className="flex flex-col gap-3 justify-center items-center pr-5">
            <p className="text-center text-white text-[13px] w-[244px] sm:text-2xl lg:text-[40px] lg:w-[800px] lg:leading-[70px]">
              Antes de ello tenemos una <br /> asesoría gratuita para ti.
            </p>
            <button className="text-[10px] font-bold bg-naranja text-azul px-4 py-2 rounded-3xl lg:text-[22px] lg:px-16 lg:mt-4">
              Agenda aquí
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadContact;
