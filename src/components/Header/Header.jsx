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
    <header className="header">
      <div className="container container_header">
        <h1 className="title__primary">
        ¿Su marca necesita <span className="color__secondary" style={{ whiteSpace: 'pre' }} ref={el}></span>?
        </h1>
        <h2 className="title__secondary">
          ¡Vamos en contra de la{" "}
          <span className="color__secondary">gravedad</span>, <br />
          llevamos su marca a lo <span className="color__secondary">alto</span>!
        </h2>
        <button className="btn__primary">Agenda aquí</button>
      </div>
    </header>
  );
}

export default Header;
