"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { mockImages } from "@/lib/mockImages";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export const ImageSlider = () => {
  return (
    <Swiper
      loop
      effect="fade"
      navigation
      pagination={{ type: "bullets" }}
      className="h-96 rounded-lg w-full relative "
      modules={[Navigation, Pagination, EffectFade, Autoplay]}
      autoplay
    >
      {mockImages.map((image) => {
        return (
          <SwiperSlide key={image.link}>
            <Image
              src={image.src}
              alt={image.alt}
              className="block h-full w-full object-cover relative"
            />
            <Link
              href={image.link}
              className="absolute bottom-8 md:right-[150px] right-[25px]  bg-black rounded-2xl p-3  hover:bg-red-500"
            >
              Mehr erfahren
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
