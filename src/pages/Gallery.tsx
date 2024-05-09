// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import photo1 from "../assets/gallery/gal (1).jpg";
import photo2 from "../assets/gallery/gal (2).jpg";
import photo3 from "../assets/gallery/gal (3).jpg";
import photo4 from "../assets/gallery/gal (4).jpg";
import photo5 from "../assets/gallery/gal (5).jpg";
import photo6 from "../assets/gallery/gal (6).jpg";
import photo7 from "../assets/gallery/gal (7).jpg";

const galleryData = [
  {
    id: 1,
    img: photo1,
  },
  {
    id: 2,
    img: photo2,
  },
  {
    id: 3,
    img: photo3,
  },
  {
    id: 4,
    img: photo4,
  },
  {
    id: 5,
    img: photo5,
  },
  {
    id: 6,
    img: photo6,
  },
  {
    id: 7,
    img: photo7,
  },
];

const Gallery = () => {
  return (
    <div className="my-14 ">
      <h1>Our Recent Events' Gallery</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        freeMode={{
          enabled: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper">
        {galleryData.map((photo) => (
          <SwiperSlide key={photo.id}>
            <img
              className="rounded-lg h-[100px] w-full md:h-[270px] lg:h-[400px]"
              src={photo.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
