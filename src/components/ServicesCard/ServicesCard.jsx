import "./servicesCard.css";
import { useDispatch } from "react-redux";
import { setModal } from "../../store/slices/modal.slice";

function ServicesCard({ img, title, paragraph, alt }) {
  const dispatch = useDispatch();

  const clickCard = () => {
    dispatch(setModal({img, title, paragraph, alt}))
  };
  return (
    <li className="card__services__container" onClick={clickCard}>
      <img src={img} alt={alt} />
      <div>
        <h4 className="card__title">{title}</h4>
        <p className="card__p">{paragraph}</p>
      </div>
    </li>
  );
}

export default ServicesCard;
