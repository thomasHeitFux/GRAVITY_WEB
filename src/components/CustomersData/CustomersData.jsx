import "./customersData.css";

function CustomersData({name, description}) {
  return (
    <div className="my-10 ml-20">
        <h4 className="text-5xl text-azul mb-5 font-bold">{name}</h4>
        <p className="text-2xl text-azul mb-16">
         {description.s}
        </p>
    </div>
  );
}

export default CustomersData;
