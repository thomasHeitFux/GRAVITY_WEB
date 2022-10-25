import "./customersData.css";

function CustomersData({name, description}) {
  return (
    <div className="container customers__data">
      <div className="customers__data__one">
        <h4>{name}</h4>
        <p>
         {description.s}
        </p>
      </div>
    </div>
  );
}

export default CustomersData;
