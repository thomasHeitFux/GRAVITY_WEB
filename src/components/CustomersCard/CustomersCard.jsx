import "./customerCard.css";

function CustomerCard({ img, name, description }) {
  return (
    <div className="w-2/5 lg:w-3/12">
      <img src={img} alt="" className="rounded-t-3xl" />
      <h4 className="text-azul text-2xl my-5 font-bold">{name}</h4>
      <div className="">
        <p className="text-azul">{description && description}</p>
      </div>
    </div>
  );
}

export default CustomerCard;
