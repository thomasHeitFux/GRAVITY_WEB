import "./customersHeader.css";

function CustomersHeader({ banner, name, description }) {
  return (
    <div className="shadow-card relative top-0 right-0">

        <img src={banner} className="relative h-80 object-cover w-full lg:h-5/6 lg:w-screen" />

        <div className="absolute rounded-3xl w-40 top-6 right-4 lg:w-80 lg:right-40 lg:top-60 bg-white lg:p-10 ">
          <span className="w-10 absolute aspect-square right-16 my-2 -top-6 lg:-top-10 rounded-full lg:right-32 bg-black lg:w-20"></span>
          <p className="text-xs p-6 mt-2 text-azul lg:mt-5 lg:text-base">
            {description}
          </p>
        </div>

      </div>
  );
}

export default CustomersHeader;
