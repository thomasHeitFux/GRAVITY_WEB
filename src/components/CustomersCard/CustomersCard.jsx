function CustomerCard({ img, name, description, hidden }) {
  return (
    <div className={`w-full rounded-3xl overflow-hidden	min-h-[195px] max-w-[230px] lg:max-w-[382px] lg:min-h-[450px] ${hidden}`} style={{backgroundColor: "#f2f2f2", boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)"}}>
      <img src={img} alt="" className="w-full h-full max-h-[108px] object-cover sm:max-h-[140px] lg:max-h-[290px]" />
      <div className="p-2">
      <h4 className="text-azul text-[10px] sm:text-[14px] lg:text-[20px] my-2 font-bold">{name}</h4>
        <p className="text-azul text-[10px] sm:text-[14px] lg:text-[20px]">{description}</p>
      </div>
    </div>
  );
}

export default CustomerCard;
