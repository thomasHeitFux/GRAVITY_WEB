import "./customerCard.css";

function CustomerCard({img, name, description}) {
  return (
    <div className="customer__card">
      <div className="customer__card__header">
        <img src={img} height="250px" alt="" />
        <h4>{name}</h4>
      </div>
      <div className="customer__card__text">
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}

export default CustomerCard;
