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
    slidesToScroll:4
  }
  return (
    <Slider {...settings}>
        {img.mockup.map((i) => {
          return (
            <div>
              <img src={i} width="381px" key={img.mockup.indexOf(i)} />
            </div>
          );
        })}

    </Slider>
  );
}

export default CustomersImages;
