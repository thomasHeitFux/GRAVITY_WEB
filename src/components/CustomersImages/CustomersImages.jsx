import "./customersImages.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function CustomersImages({ img }) {
  const settings = {
    dots:true,
    infinite:true,
    speed:500,
    slidesToShow:4,
    slidesToScroll:4,
    lazyLoad: true,
    arrows: false
  }
  return (
    <Slider className="slider" {...settings}>
        {img.mockup.map((i) => {
          return (
            <div className="slider__item" key={img.mockup.indexOf(i)}>
              <img src={i}  />
            </div>
          );
        })}

    </Slider>
  );
}

export default CustomersImages;
