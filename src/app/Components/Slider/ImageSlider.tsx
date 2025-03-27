"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { mockImages } from "@/lib/mockImages";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export const ImageSlider = () => {
  return (
    <Swiper
      navigation
      className="h-96 rounded-lg w-full relative "
      modules={[Navigation, Pagination]}
    >
      {mockImages.map((image) => {
        return (
          <SwiperSlide key={image.link}>
            <Link
              href={image.link}
              className="flex h-full w-full items-center justify-center"
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="block h-full w-full object-cover"
              />
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
