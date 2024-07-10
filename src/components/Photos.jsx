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
import {FaMapMarkerAlt} from "react-icons/fa"

// Import Photos
import Me1 from "../assets/images/selfie2.jpg";
import Me2 from "../assets/images/selfie1.jpg";
import Me3 from "../assets/images/selfie3.jpg";
import Me4 from "../assets/images/selfie4.jpg";
import Ls1 from "../assets/images/1.jpg";
import Ls2 from "../assets/images/2.jpg";
import Ls3 from "../assets/images/3.jpg";
import Ls4 from "../assets/images/4.jpg";
import FieldWork from "../assets/images/field.jpg";
import New1 from "../assets/images/2023_1.jpg";
import New2 from "../assets/images/2023_2.jpg";
import New3 from "../assets/images/2023_3.jpg";

const Photos = () => {
  const images = [
    {
      id: 1,
      name: "Selfie 2",
      src: Me1,
      tag: "Antigua Guatemala, Guatemala",
    },
    {
      id: 2,
      name: "Landscape 1",
      src: Ls1,
      tag: "Dos Mangas, Ecuador",
    },
    {
      id: 3,
      name: "Selfie 1",
      src: Me2,
      tag: "Charlotte, North Carolina",
    },
    {
      id: 4,
      name: "Landscape 2",
      src: Ls2,
      tag: "Copacabana, Bolivia",
    },
    {
      id: 5,
      name: "Selfie 3",
      src: Me3,
      tag: "Dos Mangas, Ecuador",
    },
    {
      id: 6,
      name: "Landscape 3",
      src: Ls3,
      tag: "Illiampu, Lake Titicaca, Bolivia",
    },
    {
      id: 7,
      name: "Selfie 4",
      src: Me4,
      tag: "Dos Mangas, Ecuador",
    },
    {
      id: 8,
      name: "Landscape 4",
      src: Ls4,
      tag: "Lake Titicaca, Bolivia",
    },
    {
      id: 9,
      name: "Field work",
      src: FieldWork,
      tag: "Dos Mangas, Ecuador",
    },
    {
      id: 10,
      name: "giving a talk at Universidad San Francisco Quito",
      src: New1,
      tag: "Universidad San Francisco, Quito, Ecuador",
    },
    {
      id: 11,
      name: "PARCC 2023 field school",
      src: New2,
      tag: "PARCC 2023 Field School",
    },
    {
      id: 12,
      name: "excavating at Buen Suceso, Ecuador",
      src: New3,
      tag: "Buen Suceso, Ecuador",
    },
  ];

  return (
    <div className="container max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full text-[#E7ECEF] text-2xl font-bold">
         <p className="pt-1 pb-2">
            // Field Work Photos
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
              <img  src={image.src} alt={image.name} />
              <div className="flex justify-center caption">

             <FaMapMarkerAlt className="mr-1 icon"/> <span> {image.tag}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Photos;
