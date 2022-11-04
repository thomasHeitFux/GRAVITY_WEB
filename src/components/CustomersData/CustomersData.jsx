import "./customersData.css";

function CustomersData({name, description}) {
  return (
    <div className="ml-10 my-10 lg:ml-20">
        <h4 className="text-2xl lg:text-5xl text-azul lg:mb-5 font-bold">{name}</h4>
        <p className="lg:text-2xl text-azul lg:mb-16">
         {description.s}
        </p>
    </div>
  );
}

export default CustomersData;
