import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="container container_header">
        <h1 className="title__primary">
          Hola <span className="color__secondary">Creativo</span>
        </h1>
        <h2 className="title__secondary">
          ¡Vamos en contra de la{" "}
          <span className="color__secondary">gravedad</span>, <br />
          llevamos su marca a lo <span className="color__secondary">alto</span>!
        </h2>
        <button className="btn__primary">Agenda aqui</button>
      </div>
    </header>
  );
}

export default Header;
