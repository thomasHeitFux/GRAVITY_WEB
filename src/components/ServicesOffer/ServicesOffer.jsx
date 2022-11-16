import astronautGift from "../../assets/Personajes/PNG_Personajes/Astronauta_ZERO/011.png";
import clock from "../../assets/iconos RRSS/Iconos de gravity/Relog.png";
import Countdown, { zeroPad } from "react-countdown";
import React from "react";

function ServiceOffer() {
  const renderer = ({ completed, formatted }) => {
    if (completed) {
      return <span>Terminado</span>;
    } else {
      return (
        <div className="flex gap-2 my-4 lg:my-10">
          <div
            className="w-[26px] h-[36px] text-[20px] flex justify-center items-center rounded-[7px] font-bold sm:w-[38px] sm:h-[56px] sm:text-[40px] lg:w-[82px] lg:h-[110px] lg:text-[70px] lg:rounded-[18px]"
            style={{ backgroundColor: "#0D2633", color: "#f5b45f" }}
          >
            {zeroPad(formatted.hours).split("")[0]}
          </div>
          <div
            className="w-[26px] h-[36px] text-[20px] flex justify-center items-center rounded-[7px] font-bold sm:w-[38px] sm:h-[56px] sm:text-[40px] lg:w-[82px] lg:h-[110px] lg:text-[70px] lg:rounded-[18px]"
            style={{ backgroundColor: "#0D2633", color: "#f5b45f" }}
          >
            {zeroPad(formatted.hours).split("")[1]}
          </div>
          <div className="flex flex-col justify-center gap-2">
            <div className="w-[6px] aspect-square rounded-full sm:w-[12px] lg:w-[18px]" style={{backgroundColor: "#0D2633"}}></div>
            <div className="w-[6px] aspect-square rounded-full sm:w-[12px] lg:w-[18px]" style={{backgroundColor: "#0D2633"}}></div>
          </div>
          <div
            className="w-[26px] h-[36px] text-[20px] flex justify-center items-center rounded-[7px] font-bold sm:w-[38px] sm:h-[56px] sm:text-[40px] lg:w-[82px] lg:h-[110px] lg:text-[70px] lg:rounded-[18px]"
            style={{ backgroundColor: "#0D2633", color: "#f5b45f" }}
          >
            {zeroPad(formatted.minutes).split("")[0]}
          </div>
          <div
            className="w-[26px] h-[36px] text-[20px] flex justify-center items-center rounded-[7px] font-bold sm:w-[38px] sm:h-[56px] sm:text-[40px] lg:w-[82px] lg:h-[110px] lg:text-[70px] lg:rounded-[18px]"
            style={{ backgroundColor: "#0D2633", color: "#f5b45f" }}
          >
            {zeroPad(formatted.minutes).split("")[1]}
          </div>
          <div className="flex flex-col justify-center gap-2">
            <div className="w-[6px] aspect-square rounded-full sm:w-[12px] lg:w-[18px]" style={{backgroundColor: "#0D2633"}}></div>
            <div className="w-[6px] aspect-square rounded-full sm:w-[12px] lg:w-[18px]" style={{backgroundColor: "#0D2633"}}></div>
          </div>
          <div
            className="w-[26px] h-[36px] text-[20px] flex justify-center items-center rounded-[7px] font-bold sm:w-[38px] sm:h-[56px] sm:text-[40px] lg:w-[82px] lg:h-[110px] lg:text-[70px] lg:rounded-[18px]"
            style={{ backgroundColor: "#0D2633", color: "#f5b45f" }}
          >
            {zeroPad(formatted.seconds).split("")[0]}
          </div>
          <div
            className="w-[26px] h-[36px] text-[20px] flex justify-center items-center rounded-[7px] font-bold sm:w-[38px] sm:h-[56px] sm:text-[40px] lg:w-[82px] lg:h-[110px] lg:text-[70px] lg:rounded-[18px]"
            style={{ backgroundColor: "#0D2633", color: "#f5b45f" }}
          >
            {zeroPad(formatted.seconds).split("")[1]}
          </div>
          <img className="w-[36px] sm:w-[56px] lg:w-[102px]" src={clock} />

        </div>
      );
    }
  };

  return (
    <div
      className="w-full px-5 py-10 flex justify-center items-center"
      id="Ebook"
    >
      <div
        className="max-w-6xl rounded-[20px] relative px-10 py-7 w-full"
        style={{
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
          backgroundColor: "#F2F2F2",
        }}
      >
        <p
          className="font-bold text-azul text-[13px] py-1 px-5 -rotate-45 rounded-3xl absolute top-2 -left-6 sm:text-[18px] lg:text-[36px] lg:px-16 lg:top-10 lg:-left-16"
          style={{ backgroundColor: "#F6B65F" }}
        >
          ¡GRATIS!
        </p>
        <div className="sm:flex">
          <div className="hidden sm:flex justify-center items-end w-[50%] max-w-md">
            <img src={astronautGift} />
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <h2
              className="font-bold text-center text-[10px] sm:text-[18px] lg:text-[35px]"
              style={{ color: "#0D2633" }}
            >
              Aprende todo sobre Marketing, <br />
              Branding y Marca personal
            </h2>
            <Countdown
              date={1688100184056 + 259200000}
              renderer={renderer}
              daysInHours={true}
            />
            <p className="hidden text-[13px] w-[100%] sm:block lg:text-[20px] text-azul">
              Accede a nuestros 3 E-Books de manera 100% gratuita por tiempo
              limitado:
              <br />
              Aprende todo lo que necesitas saber sobre Marketing, Branding y
              marca personal, con ello podrás potenciar tu marca al máximo,
              tender los conceptos básicos para poner en acción una estrategia
              ganadora para tu marca. Conoce la importancia de un buen branding
              y saber como llegar de manera correcta a tu público.
            </p>
            <p className="text-[10px] w-[263px] sm:hidden text-azul">
              Accede del a nuestros 3 E-Books de manera 100% gratuita por tiempo
              limitado.
              <br />
              Aprende todo de Marketing digital, Branding y Marca personal con
              lo cual podras potenciar tu marca al maximo,
            </p>
            <button
              className="font-bold py-1 px-3 rounded-3xl mt-3 text-[8px] self-end sm:text-[13px] lg:text-[21px] lg:px-7"
              style={{ backgroundColor: "#0D2633", color: "#F6B65F" }}
            >
              Los quiero
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceOffer;
