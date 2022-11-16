import "./AboutHeader.css";
import images from "../../assets/imagenes";

function AboutHeader() {
  return (
    <div>
      <h3 className="text-2xl lg:text-4xl bold my-3 lg:hidden text-center text-azul" id="AbautHeader">
        Acerca de Gravity
      </h3>
      <div className="bg-azul flex justify-center items-center lg:h-[426px]">
        <div className="max-w-6xl m-auto relative lg:py-5 flex flex-col">
          <div className="ml-4">
            <h3 className="color__secondary text-2xl bold mt-3 lg:text-4xl">
              Nosotros
            </h3>
            <p className="text-white text-xs lg:text-xl">
              Especialistas en campañas en redes sociales.
            </p>
          </div>
          <aside className="flex mb-3 sm:flex-row-reverse sm:-mt-6">
            <img
              className="w-30 h-40 mt-4 sm:w-48 sm:h-56 sm:-mt-8 sm:mr-16 lg:w-80 lg:h-96 lg:-mt-16"
              src={images.Human_002}
              alt="Human Gravity"
            />
            <p className="text-white text-xs mb-3 mr-3 sm:ml-4 lg:text-xl">
              <br />
              <br />
              Somos una agencia creativa que brinda soluciones innovadoras
              mediante estrategias de marketing acompañada de la creación de
              identidades visuales fuertes y efectivas. Gestionamos y diseñamos
              feeds de redes.
              <br />
              <br />
              La Agencia gravity brinda servicios de diversas disciplinas con el
              objetivo de trabajar en equipo, haciéndolo de manera integral para
              el beneficio de sus clientes.
            </p>
          </aside>
          <div className="hidden sm:block w-[50px] rounded-l-[20px] h-full bg-naranja absolute top-0 right-0 lg:rounded-l-[25px]"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutHeader;
