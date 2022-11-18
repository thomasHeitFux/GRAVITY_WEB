import { ServiceCard2, EvilServiceCard, Footer } from "../../components";
import noteData from "../../assets/lottie/20221012_COHETE_V4.0.json";
import sendInfo from "../../utils/sendInfo";
import images from "../../assets/imagenes";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import { useState } from "react";
import servicesData from "../../utils/services.json";
import "./services.css";

function Services() {
  const [input, setInput] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    mensaje: "",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendInfo(input);
    setInput({
      nombre: "",
      telefono: "",
      correo: "",
      mensaje: "",
    });
  }
  const defaultOptions = {
    loop: false,
    autoplay: true,
    renderSettings: {
      preserveAspectRatio: "xMidYmid slice",
    },
  };
  const links = [
    {
      title: "Servicios",
      to: "Services",
    },
    {
      title: "Cuentanos",
      to: "Cuentanos",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h3
        id="Services"
        className="lg:hidden text-center text-azul text-2xl bold m-3 lg:text-4xl"
      >
        Servicios
      </h3>
      <div className="bg-azul py-4 px-5 sm:px-0 sm:py-10">
        <div className="flex justify-around items-center sm:flex-col max-w-6xl m-auto">
          <section className="flex flex-col gap-4 w-40 mb-4 sm:w-full sm:items-center sm:max-w-[610px] border-solid sm:border-b-2 sm:pb-3">
            <h3 className="text-sm bold text-naranja sm:text-2xl">
              Descarga nuestra hoja de servicios
            </h3>
            <p className="text-xs text-white sm:text-[sm] sm:w-[400px] sm:text-center">
              Obtén más detalles de todos nuestros servicios, al igual de los
              métodos de pago y cronograma de entrega.
            </p>
            <button className="bg-naranja p-1 rounded-xl sm:px-4">
              Descargar
            </button>
          </section>
          <section className="flex justify-around items-center sm:w-full ">
            <img
              className="w-24 sm:w-40 lg:w-72"
              src={images.Human_005}
              alt="Human"
            />
            <div className="hidden sm:flex sm:flex-col lg:w-3/5">
              {servicesData.map((e) => (
                <EvilServiceCard
                  img={e.img}
                  title={e.title}
                  paragraph={e.paragraph}
                  i={e.id / 2}
                  key={e.id}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
      <div className="w-full flex flex-col sm:hidden">
        {servicesData.map((e) => (
          <ServiceCard2
            img={e.img}
            title={e.title}
            paragraph={e.paragraph}
            i={e.id / 2}
            key={e.id}
          />
        ))}
      </div>
      <div
        className="mt-10 mb-5 bg-azul p-5 sm:mb-8 sm:bg-transparent w-full sm:my-8 sm:py-0 sm:relative lg:p-0"
        id="Cuentanos"
      >
        <div className="box__background">
          <div></div>
          <div></div>
        </div>
        <div className="container__services_page w-full justify-between items-center max-w-6xl m-auto sm:py-5 lg:py-0">
          <section className="hidden sm:flex bg-azul sm:h-72 lg:h-96 w-full z-10 justify-between items-center">
            <div>
              <h4 className="text-naranja text-2xl lg:text-4xl">Cuéntanos:</h4>
              <p className="text-xs text-white lg:text-xl sm:mt-4">
                ¿Cuál es el siguiente paso que va a dar tu marca? <br />
                Cotiza aquí.
              </p>
            </div>
            <div className="w-40 lg:w-72">
              <Lottie
                options={{ animationData: noteData, ...defaultOptions }}
              />
            </div>
          </section>
          <form className="hidden flex-col w-full justify-center items-end p-7 gap-3 rounded-3xl sm:flex z-10">
            <input
              className="w-full py-1 px-2 rounded-2xl text-[10px] max-w-[300px]"
              type="text"
              placeholder="Nombre"
              name="nombre"
            />
            <input
              className="w-full py-1 px-2 rounded-2xl text-[10px] max-w-[300px]"
              type="text"
              placeholder="Telefono"
              name="telefono"
            />
            <input
              className="w-full py-1 px-2 rounded-2xl text-[10px] max-w-[300px]"
              type="text"
              placeholder="Correo"
              name="correo"
            />
            <textarea
              className="w-full py-1 px-2 rounded-2xl h-[80px] text-[10px] max-w-[300px]"
              placeholder="Mensaje"
              name="mensaje"
            ></textarea>
            <button className="flex gap-3 items-center bg-azul rounded-2xl text-white py-1 px-4 text-[10px]">
              Enviar <img src={images.Arrow_List} alt="Flechita" />
            </button>
          </form>
          <div className="w-full sm:hidden px-5 pb-5 relative flex flex-col justify-center items-center start-home">
            <div className="flex justify-between items-center py-2 w-full max-w-6xl h-fulls">
              <div className="py-2">
                <h3 className="text-naranja ml-8 text-[14px] font-bold w-[170px]">
                  ¿No sabes por donde comenzar?
                </h3>
                <p className="text-white ml-8 text-[12px] w-[185px]">
                  Cuéntanos cuál es tu marca y accede a una asesoría gratuita.
                </p>
              </div>
              <img
                className="w-[22%] max-w-[100px] mr-5"
                src={images.Human_012}
              />
            </div>
            <form className="bg-naranja flex flex-col justify-center items-end w-full p-7 gap-3 rounded-3xl">
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
        </div>
      </div>
      {/* FIN, ESPERO QUE ME PAGUEN POR ESTO. */}
      <Footer links={links} />
    </motion.div>
  );
}

export default Services;
