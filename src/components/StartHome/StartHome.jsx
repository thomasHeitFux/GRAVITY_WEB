import "./startHome.css";
import images from "../../assets/imagenes";

function StartHome() {
  return (
    <div className="start__home" id="StartHome">
      <img className="g__cricle" src={images.G_circle} alt="Logo Gravity" />
      <div className="start__home__container container">
        <div className="start__home__main">
          <h3 className="color__secondary">¿No sabes por donde comenzar?</h3>
          <p>
            Cuentanos cual es tu marca y accede a una asesoria <br /> gratuita.
          </p>
          <form action="" className="form__start__home">
            <input
              type="text"
              className="form__input"
              placeholder="correo@ejemplo.com"
            />
            <textarea
              placeholder="Cuentanos sobre tu marca ..."
              className="form__textarea"
            ></textarea>
            <button className="btn__secondary">
              Enviar <img src={images.Arrow} alt="Flechita" />
            </button>
          </form>
        </div>
        <div className="start__home__ornament flex__center">
          <div className="globo">
            Si tienes alguna duda <br /> sobre nosotros estaremos <br />{" "}
            gustosos de responderte.
          </div>
          <img src={images.Human_010} alt="Human Gravity" />
        <div className="box__yellow"></div>
        </div>
      </div>
    </div>
  );
}

export default StartHome;
