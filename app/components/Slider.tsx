"use client";
import dynamic from "next/dynamic";
import React from "react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination"; // Add this line to import pagination styles
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Links = [
"https://drive.google.com/thumbnail?id=10H9p9LwrPmOBh1lLtWh9PaYSy99K67Tr&sz=w1000",
"https://drive.google.com/thumbnail?id=10H9p9LwrPmOBh1lLtWh9PaYSy99K67Tr&sz=w1000",
];

const Slider = () => {
  return (
      <div className="  ">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
        >
          {Links.map((value: string, index: number) => (
            <SwiperSlide key={index}>
              <Link href={value}>
                <img
                  className="w-full h-auto object-contain "
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
