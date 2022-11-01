import "./customersHeader.css";

function CustomersHeader({ banner, name, description }) {
  return (
    <div className="customers__header__card">
        <img src={banner} className="w-screen relative" />
        <div className="absolute w-80 right-40 top-60 bg-white p-10 rounded-3xl">
          <span></span>
          <p className="mt-5">
            {description}
          </p>
        </div>
      </div>

  );
}

export default CustomersHeader;
