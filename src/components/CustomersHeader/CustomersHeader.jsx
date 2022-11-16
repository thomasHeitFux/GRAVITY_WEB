function CustomersHeader({ banner, name, description }) {
  return (
    <div id="customers" className="shadow-card h-[230px] sm:h-[368px] lg:h-[500px] flex justify-center items-center relative">
      <img
        src={banner}
        className="absolute top-0 h-full object-cover w-full"
      />
      <div className="rounded-3xl flex p-4 justify-center flex-col items-center relative sm:py-12 sm:px-6 bg-white lg:py-16">
        <span className="w-10 absolute bg-azul aspect-square rounded-full -top-6 sm:w-[68px] lg:-top-10 lg:w-20"></span>
        <p className="text-[10px] w-[125px] text-center text-azul sm:text-[15px] sm:w-[213px] lg:w-[420px] lg:text-[24px]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore
        </p>
      </div>
    </div>
  );
}

export default CustomersHeader;
