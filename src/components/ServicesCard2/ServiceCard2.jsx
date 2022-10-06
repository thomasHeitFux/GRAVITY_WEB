import "./serviceCard2.css";

function ServiceCard2({ img, paragraph, title }) {
  return (
    <div className="service_card_2 flex__center">
      <div className="service_card_2_text">
        <h4 className="color__secondary">{title}</h4>
        <p>{paragraph}</p>
      </div>
      <div className="service_card_2_img flex__center">
        <img src={img} alt="Imagen de Servicios" />
      </div>
    </div>
  );
}

export default ServiceCard2;
