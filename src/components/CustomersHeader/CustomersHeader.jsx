import "./customersHeader.css";

function CustomersHeader({ banner, name }) {
  return (
    <div className="customersHeader">
      <div className="container">
        <img src={banner} className="customer__header__banner" />
        <div className="customers__header__card">
          <span></span>
          <h4>{name}</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            repellendus nemo corrupti, animi saepe voluptatibus totam quo
            quisquam eum officia! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iste, autem?
          </p>
        </div>
      </div>
    </div>
  );
}

export default CustomersHeader;
