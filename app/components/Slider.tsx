"use client";
import dynamic from "next/dynamic";
import React from "react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination"; 
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Links = [
  "https://drive.google.com/thumbnail?id=10H9p9LwrPmOBh1lLtWh9PaYSy99K67Tr&sz=w1000",
  "https://drive.google.com/thumbnail?id=10H9p9LwrPmOBh1lLtWh9PaYSy99K67Tr&sz=w1000",
];

const Slider = () => {
  return (
    <div className="md:pt-20 pt-16">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="h-[1000px]" // Set height of the Swiper here
      >
        {Links.map((value: string, index: number) => (
          <SwiperSlide key={index} className="h-full"> {/* Ensure full height for the slide */}
            <Link href={"/"}>
              <img
                className="w-full h-full object-cover" // Make the image fill the entire height
                src={value}
                alt={`Slide ${index}`}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
