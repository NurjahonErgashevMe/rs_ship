import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);

function DetailsCarousel({ images }) {
  return (
    <div>
      <Swiper navigation pagination className="service-gallery">
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="single-service-photo bg-cover"
              style={{ backgroundImage: `url(${item})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default DetailsCarousel;
