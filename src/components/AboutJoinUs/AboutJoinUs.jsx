import images from "../../assets/imagenes";
import "./AboutJoinUs.css";
function AboutJoinUs() {
  return (
    <div className="w-full" id="AboutJoinUs">
      <div className="my-5 flex relative max-w-6xl bg-azul m-auto w-full lg:pt-4">
        <div className="flex flex-col gap-4 p-4 pb-0 lg:self-center">
          <div className="flex flex-col gap-4">
            <h3 className="color__secondary text-sm bold sm:text-xl lg:text-3xl">
              Se parte del equipo de Gravity
            </h3>
            <p className="text-white text-xs sm:text-sm lg:text-lg sm:w-[80%]">
              Si deseas pertenecer al equipo Gravity, adjuntanos los siguientes
              datos junto a tu CV y link de portafolio.
            </p>
          </div>
          <div className="flex gap-12 justify-between">
            <div>
              <div className="text-white text-xs sm:text-sm lg:text-lg">
                <p>- Resumen profesional.</p>
                <p>- Cargo al que se aspira.</p>
                <p>- Aspiracion salarial.</p>
                <p>- CV y portafolio.</p>
              </div>
              <button className="btn__primary btn__abaut text-xs sm:text-sm">
                Postulate
              </button>
            </div>

            <img
              className="w-36 h-32 sm:w-60 sm:h-44 sm:ml-16 lg:w-80 lg:h-64 lg:ml-80"
              src={images.Human_001}
            />
          </div>
        </div>
        <div className="hidden sm:block w-[50px] rounded-l-[20px] h-full bg-naranja absolute top-0 right-0 lg:rounded-l-[25px]"></div>
      </div>
    </div>
  );
}

export default AboutJoinUs;
