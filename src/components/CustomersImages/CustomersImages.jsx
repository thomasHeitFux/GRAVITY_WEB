import "./customersImages.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";

function CustomersImages(img) {
  console.log(Swiper);
  return (
    <ul>
      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
      >
        {img.img.mockup.map((i) => {
          return (
            <SwiperSlide>
              <img height="500px" src={i} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ul>
  );
}

export default CustomersImages;
