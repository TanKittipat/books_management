import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import book1 from "../assets/backgrounds/book1.jpg";
import book2 from "../assets/backgrounds/book2.jpg";
import book3 from "../assets/backgrounds/book3.jpg";
import book4 from "../assets/backgrounds/book4.jpg";

const SwiperComponent = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 10500,
        disableOnInteraction: false,
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img className="h-screen w-screen object-cover" src={book1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-screen w-screen object-cover" src={book2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-screen w-screen object-cover" src={book3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-screen w-screen object-cover" src={book4} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
