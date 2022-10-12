import "./servicesCard.css";

function ServicesCard({ img, title, paragraph, alt }) {
  return (
    <li className="card__services__container">
      <img src={img} alt={alt} />
      <div>
        <h4 className="card__title">{title}</h4>
        <p className="card__p">{paragraph}</p>
      </div>
    </li>
  );
}

export default ServicesCard;
