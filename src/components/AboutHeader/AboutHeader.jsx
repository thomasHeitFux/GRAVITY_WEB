import "./AboutHeader.css";
import images from "../../assets/imagenes";

function AboutHeader() {
  return (
    <>
      <h3 className="text-2xl lg:text-4xl bold my-3 lg:hidden text-center text-azul" id="AbautHeader">
        Acerca de Gravity
      </h3>
      <div className="start__abaut w-full">
        <div className="max-w-6xl m-auto bg-azul relative p-5 sm:flex items-center justify-between">
          <div>
            <h3 className="text-naranja text-[20px] font-bold mb-1 sm:text-[24px] lg:text-[35px]">
              Nosotros
            </h3>
            <p className="text-white text-[10px] sm:text-[12px] lg:text-[21px]">
              Especialistas en campañas en redes sociales.
            </p>
            <p className="hidden text-white text-[12px] sm:block max-w-[450px] lg:text-[17px] lg:max-w-[700px]">
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
          </div>
          <aside className="flex gap-[20px] justify-between items-center">
            <img
              className="max-w-[98px] z-10 w-full sm:max-w-[198px] lg:w-[330px] sm:mr-7"
              src={images.Human_002}
              alt="Human Gravity"
            />
            <p className="text-white text-[10px] sm:hidden">
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
    </>
  );
}

export default AboutHeader;
