import images from "../../assets/imagenes";
import "./startHome.css"

function StartHome() {
  return (
    <div
      className="w-full px-5 pb-5 relative mt-[60px] flex flex-col justify-center items-center sm:py-0 sm:h-[253px] lg:h-[500px] lg:px-0 start-home"
      id="StartHome"
    >
      <img
        className="absolute -top-4 w-[33px] hidden sm:block lg:w-[64px] lg:-top-8"
        src={images.G_circle}
        alt="Logo Gravity"
      />
      <div className="flex justify-between items-center py-2 w-full max-w-6xl h-full sm:py-0">
        <div className="py-2 sm:py-0 sm:w-[55%] lg:w-[45%]">
          <h3 className="text-naranja text-[14px] font-bold w-[170px] sm:text-[16px] sm:w-auto lg:text-[35px]">
            ¿No sabes por donde comenzar?
          </h3>
          <p className="text-white text-[12px] w-[185px] sm:w-auto sm:py-4 lg:text-[21px] lg:w-[555px]">
            Cuéntanos cuál es tu marca y accede a una asesoría gratuita.
          </p>
          <form className="hidden sm:flex flex-col justify-center items-end gap-3">
            <input
              type="text"
              className="w-full py-1 px-3 rounded-2xl text-[13px]"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              placeholder="correo@ejemplo.com"
            />
            <textarea
              placeholder="Cuentanos sobre tu marca ..."
              className="w-full py-1 px-3 rounded-2xl text-[13px] h-[80px] lg:h-[141px]"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
            ></textarea>
            <button className="text-[12.5px] bg-naranja text-azul font-bold flex py-1 px-3 rounded-2xl justify-between gap-6">
              Enviar{" "}
              <img src={images.Arrow} alt="Flechita" className="w-[13px]" />
            </button>
          </form>
        </div>
        <img
          className="w-[33%] max-w-[100px] sm:hidden"
          src={images.Human_012}
        />
        <div className="hidden sm:block relative h-full w-[40%] max-w-[275px] lg:max-w-none bg-azul">
          <div
            className="w-[176px] h-[60px] rounded-3xl text-[12px] text-white absolute top-[15%] left-[10%] flex justify-center items-center text-center lg:w-[329px] lg:h-[120px] lg:left-[5%]"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
          >
            <p className="lg:hidden">
              Si tienes alguna duda <br />
              sobre nosotros escríbenos
            </p>
            <p className="text-[22px] hidden lg:block">
              Si tienes alguna duda <br />
              sobre nosotros estaremos <br />
              gustosos de responderte.
            </p>
          </div>
          <img
            src={images.Human_010}
            alt="Human Gravity"
            className="w-[135px] absolute -bottom-3 right-[3%] z-10 lg:w-[245px] lg:-bottom-[21px] lg:right-2"
          />
          <div className="w-[18%] rounded-l-[20px] h-full bg-naranja absolute top-0 right-0 lg:rounded-l-[25px]"></div>
        </div>
      </div>
      <form className="bg-naranja flex flex-col justify-center items-end w-full p-7 gap-3 rounded-3xl sm:hidden">
        <input
          className="w-full py-1 px-2 rounded-2xl text-[10px]"
          type="text"
          placeholder="Nombre"
          name="nombre"
        />
        <input
          className="w-full py-1 px-2 rounded-2xl text-[10px]"
          type="text"
          placeholder="Telefono"
          name="telefono"
        />
        <input
          className="w-full py-1 px-2 rounded-2xl text-[10px]"
          type="text"
          placeholder="Correo"
          name="correo"
        />
        <textarea
          className="w-full py-1 px-2 rounded-2xl h-[80px] text-[10px]"
          placeholder="Mensaje"
          name="mensaje"
        ></textarea>
        <button className="flex gap-3 items-center bg-azul rounded-2xl text-white py-1 px-4 text-[10px]">
          Enviar <img src={images.Arrow_List} alt="Flechita" />
        </button>
      </form>
    </div>
  );
}

export default StartHome;
