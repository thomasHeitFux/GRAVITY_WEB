// import Card from '../ServicesCard/ServicesCard'
// import Images from "../../assets/imagenes"
import "./AboutCards.css";

function AboutCards() {
  return (
    <div className=" flex flex-col items-center gap-3 mt-7 sm:flex-row sm:justify-center sm:gap-8 lg:gap-32" id="AbautCards">
      <li className="w-80 h-28 card_container flex rounded-3xl justify-center items-center gap-2 sm:flex-col sm:w-72 sm:h-80 sm:justify-start lg:w-80 lg:h-96">
        <div className="bg-white rounded-full w-16 h-16 sm:w-36 sm:h-36 sm:mt-5"></div>
        <div className="w-56">
          <h4 className="card_about_title text-sm bold sm:text-2xl sm:text-center lg:text-4xl">
            Mision
          </h4>
          <p className="text-white text-xs sm:text-sm sm:text-center lg:text-lg">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore
          </p>
        </div>
      </li>
      <li className="w-80 h-28 card_container flex rounded-3xl justify-center items-center gap-2 sm:flex-col sm:w-72 sm:h-80 sm:justify-start lg:w-80 lg:h-96">
        <div className="bg-white rounded-full w-16 h-16 sm:w-36 sm:h-36 sm:mt-5"></div>
        <div className="w-56 ">
          <h4 className="card_about_title text-sm bold sm:text-2xl sm:text-center lg:text-4xl">
            Vision
          </h4>
          <p className="text-white text-xs sm:text-sm sm:text-center lg:text-lg">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore
          </p>
        </div>
      </li>
    </div>
  );
}

export default AboutCards;
