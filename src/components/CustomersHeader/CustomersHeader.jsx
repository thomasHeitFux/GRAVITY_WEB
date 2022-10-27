import "./customersHeader.css";

function CustomersHeader({ banner, name, description }) {
  return (
    <div className="customersHeader">
      <div className="customer__container">
        <img src={banner} className="customer__header__banner" />
        <div className="customers__header__card">
          <span></span>
          {/* <h4>{name}</h4> */}
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CustomersHeader;
