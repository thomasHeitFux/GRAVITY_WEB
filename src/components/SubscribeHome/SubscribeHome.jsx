import astronaut from "../../assets/Personajes/PNG_Personajes/Astronauta_ZERO/001.png";
import circleCard from "../../assets/Iconos/Cartas o Sobres/Sobre-Color.png";
import icon from "../../assets/imagenes";
import React from "react";

function SubscribeHome() {
  return (
    <div
      className="overflow-hidden flex justify-center items-center h-32 lg:h-60"
      id="SuscribeHome"
      style={{
        background:
          "linear-gradient(90deg, rgb(255,255,255) 60%, rgb(246,182,95) 60%)",
      }}
    >
      <div className="flex justify-between items-center h-full px-5 max-w-6xl w-full lg:p-0">
        <div className="flex justify-center items-end h-full w-4/12 pt-7">
          <img
            className="w-full max-w-[145px] lg:max-w-[250px]"
            src={astronaut}
            alt="Astronauta"
          />
        </div>
        <div
          className="w-4/6 flex justify-between items-center relative py-4 pl-4 h-full sm:justify-center"
          style={{ backgroundColor: "#f6b65f" }}
        >
          <form className="w-full sm:flex sm:flex-col sm:items-center sm:justify-center">
            <label className="mb-4 text-[12px] font-bold text-azul sm:text-center sm:text-[16px] lg:text-2xl">
              Suscríbete a nuestro mailing:
            </label>
            <div className="flex w-full bg-white p-1 rounded-3xl mt-3 max-w-[250px] sm:max-w-[350px] lg:p-2">
              <input
                type="email"
                className="border-none text-[10px] outline-none h-full w-full sm:text-[12px]"
                placeholder="correo@ejemplo.com"
              ></input>
              <img src={icon.Arrow} className="mr-3 w-[6px] sm:w-[12px]" />
            </div>
          </form>
          <div className="hidden sm:block sm:absolute bottom-0 -right-1">
            <div
              className="w-14 p-2 rounded-full sm:absolute -top-8 right-5 lg:w-24 lg:right-14 lg:-top-14"
              style={{ backgroundColor: "#0D2633" }}
            >
              <img src={circleCard} className="w-full" />
            </div>
            <div
              className="w-20 h-10 rounded-t-full lg:w-40 lg:h-20"
              style={{
                backgroundColor: "#f6b65f",
                boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.25)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeHome;
