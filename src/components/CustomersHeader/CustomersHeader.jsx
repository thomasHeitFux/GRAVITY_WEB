import "./customersHeader.css";

function CustomersHeader({ banner, name, description }) {
  return (
    <div className="customers__header__card shadow-card">
        <img src={banner} className="relative h-80 object-cover w-full lg:h-5/6 lg:w-screen" />
        <div className="absolute rounded-3xl right-0 lg:w-80 lg:right-40 lg:top-60 bg-white lg:p-10 ">
          <span className="w-10 rounded-full right-20 bg-black lg:w-20"></span>
          <p className="lg:mt-5 text-azul lg:text-base">
            {description}
          </p>
        </div>
      </div>

  );
}

export default CustomersHeader;
