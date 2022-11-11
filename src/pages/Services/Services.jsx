import { Navbar, ServiceCard2, EvilServiceCard, Footer } from "../../components";
import "./services.css";
import images from "../../assets/imagenes";
import { motion } from "framer-motion"
import Lottie from "react-lottie";
import noteData from '../../assets/lottie/20221012_COHETE_V4.0.json';
import sendInfo from "../../utils/sendInfo";
import { useState } from 'react';

function Services() {
  const [input, setInput] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    mensaje: ""
  })

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendInfo(input)
    setInput({
      nombre: "",
      telefono: "",
      correo: "",
      mensaje: ""
    })
  }
  const defaultOptions = {
    loop: false,
    autoplay: true,
    renderSettings: {
      preserveAspectRatio: 'xMidYmid slice'
    }
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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      {/* TITULO */}
      <h3 id="Services" className=" text-center text-2xl bold m-3 lg:text-4xl">
        Servicios
      </h3>
      {/* HEADER */}
      <div className="bg-azul pt-4 pb-16 ">
        <div className="flex  justify-center items-center gap-24 ">
          <section className="flex flex-col gap-4 w-40 mb-4 sm:hidden">
            <h3 className="text-sm bold text-naranja">Descarga nuestra <br /> hoja de servicios</h3>
            <p className="text-xs text-white">Obtén más detalles de todos nuestros servicios, al igual de los métodos de pago y cronograma de entrega.</p>
            <button className="bg-naranja p-1 rounded-xl">Descargar</button>
          </section>
      
          <img
            className="w-24 sm:w-40 lg:w-52"
            src={images.Human_002}
            alt="Human"
            />
    
          {/* LAS CARDS DE TABLET PARA ARRIBA (HAY DOBLE CARDS PORQUE LOS DISEñOS SON COMPLETAMENTE DISTINTOS) */}
          <div className="hidden sm:flex sm:flex-col lg:w-3/5">
            <EvilServiceCard
              img={images.Branding_icon}
              title="1. Branding"
              paragraph="Desarollo de la identidad visual de una marca como Logo, papelería, diseño web, UI, naming, elementos gráficos, merchandising, etc."
              i={0.5}
            />
            <EvilServiceCard
              img={images.Net_icon}
              title="2. Gestión de Redes"
              paragraph="Creación de contenido orgánico y publicitario para redes,
              programación de publicaciones y automatización de
              mensajes, al igual que el desarrollo de copies para redes."
              i={1}
            />
            <EvilServiceCard
              img={images.Marketing_icon}
              title="3. Marketing"
              paragraph="Creación de estrategias, en redes sociales, para la
              generación de Leads y contenido orgánico. Planes
              estratégicos para la organización interna de la marca."
              i={1.5}
            />
          </div>
        </div>
      </div>
      {/* LAS CARDS VERSION MOBILE */}
      <div className="sm:hidden">
        <ServiceCard2
          img={images.Branding_icon}
          title="1. Branding"
          paragraph="Desarollo de la identidad visual de una marca como Logo, papelería, diseño web, UI, naming, elementos gráficos, merchandising, etc."
          i={0.5}
        />
        <ServiceCard2
          img={images.Net_icon}
          title="2. Gestión de Redes"
          paragraph="Creación de contenido orgánico y publicitario para redes,
              programación de publicaciones y automatización de
              mensajes, al igual que el desarrollo de copies para redes."
          i={1}
        />
        <ServiceCard2
          img={images.Marketing_icon}
          title="3. Marketing"
          paragraph="Creación de estrategias, en redes sociales, para la
              generación de Leads y contenido orgánico. Planes
              estratégicos para la organización interna de la marca."
          i={1.5}
        />
      </div>
          {/* LO QUE REMPLAZA AL COHETE EN VERSION MOBILE */}
      <div className="sm:flex sm:gap-4 sm:mb-8  w-full " id="Cuentanos">
        <div className="mt-8 w-full ">
          <div className="bg-azul p-5 sm:hidden">
            <h3 className="text-sm text-naranja bold">¿No sabes por dónde empezar?</h3>
            <p className="text-xs text-white">Cuéntanos cuál es tu marca y accede a una asesoría gratuita.</p>
          </div>
          {/* COHETE FANTASMA */}
          <section className="hidden sm:flex bg-azul p-14 sm:h-72 lg:h-96 ">
            <div>
              <h4 className="text-naranja text-2xl lg:text-4xl">Cuéntanos:</h4>
              <p className="text-xs text-white lg:text-xl">
                ¿Cuál es el siguiente paso que va a dar tu marca? <br />
                Cotiza aquí.
              </p>
            </div>
            <div className="w-40 lg:w-96" >
              <Lottie options={{ animationData: noteData, ...defaultOptions }} />
            </div>
          </section>
        </div>
        {/* FORMULARIO RANDOM */}
        <form onSubmit={handleSubmit} className="flex flex-col bg-naranja gap-4  p-9 sm:mt-8 sm:h-72 lg:w-6/12 lg:h-96 ">
          <input className="rounded-2xl p-2 sm:p-1 " type="text" placeholder="Nombre" name="nombre" onChange={handleChange} value={input.nombre} />
          <input className="rounded-2xl p-2 sm:p-1" type="text" placeholder="Telefono" name="telefono" onChange={handleChange} value={input.telefono} />
          <input className="rounded-2xl p-2 sm:p-1" type="text" placeholder="Correo" name="correo" onChange={handleChange} value={input.correo} />
          <textarea className="rounded-2xl p-2 sm:p-1" placeholder="Mensaje" name="mensaje" onChange={handleChange} value={input.mensaje}></textarea>
          <button className="rounded-2xl p-2 flex justify-end align-middle sm:p-0" onClick={handleSubmit}>
            <div className="flex gap-2 bg-azul p-1 rounded-2xl sm:p-1">
              <p className="text-white " >Enviar</p>
              <img onClick={handleSubmit} src={images.Arrow} alt="Flechita" />
            </div>
          </button>
        </form>
      </div>
      {/* FIN, ESPERO QUE ME PAGUEN POR ESTO. */}
      <Footer links={links} />
    </motion.div>
  );
}

export default Services;
