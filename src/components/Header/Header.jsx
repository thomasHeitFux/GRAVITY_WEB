import "./header.css";
import { useEffect, useRef } from "react";
import Typed from "typed.js"

function Header() {
  const el = useRef(null);
	const typed = useRef(null);
  
  useEffect(() => {
    const options = {
    	strings: [
        'branding',
        'diseño web',
        'estrategia de redes',
        'diseño de post',
        'packaging'
      ],  
      typeSpeed: 100,
      backSpeed: 100,
      loop: true
    };
    
    typed.current = new Typed(el.current, options);
    
    return () => {
      typed.current.destroy();
    }
  }, [])

  return (
    <header className="max-h-[250px] bg-headerbg bg-center bg-cover lg:max-h-[600px] header">
      <div className="justify-center items-start flex-col h-full gap-5 pl-6 pt-10 lg:pt-40 max-w-screen-xl">
        <h1 className="text-2xl lg:text-5xl font-bold lg:leading-[69px] lg:tracking-widest text-white">
        ¿Necesita <span className="text-naranja" style={{ whiteSpace: 'pre' }} ref={el}></span>?
        </h1>
        <h2 className="text-xl font-light lg:text-5xl text-white leading-normal lg:leading-[58px] tracking-normal lg:tracking-widest">
          ¡Vamos en contra de la{" "}
          <span className="text-naranja">gravedad</span>, <br />
          llevamos su marca a lo <span className="text-naranja">alto</span>!
        </h2>
        <button className="btn__primary">Agenda aquí</button>
      </div>
    </header>
  );
}

export default Header;
