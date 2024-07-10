/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectCards } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "./Photos.css";
import { FaMapMarkerAlt } from "react-icons/fa"

// Import Photos
import New1 from "../assets/images/2023_1.jpg";

const Photos = () => {
  const images = [
    {
      id: 1,
      name: "test",
      src: New1,
      tag: "test",
    },
    // {
    //   id: 2,
    //   name: "excavating at Buen Suceso, Ecuador",
    //   src: New3,
    //   tag: "Buen Suceso, Ecuador",
    // },
  ];

  return (
    <div className="container max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full text-[#E7ECEF] text-2xl font-bold">
      <p className="pt-1 pb-2">
        Gallery
      </p>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="photo_container mySwiper"
        loop={true}
      >
        {images.map((image) => {

          return (
            <SwiperSlide key={image.id} className="photo_item">
              <img src={image.src} alt={image.name} />
              <div className="flex justify-center caption">

                <FaMapMarkerAlt className="mr-1 icon" /> <span> {image.tag}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Photos;
