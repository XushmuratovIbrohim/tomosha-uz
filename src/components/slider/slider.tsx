'use client'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import type { Movie } from "../../types/movies";

import "./slider.scss";
import "swiper/css";
import "swiper/css/pagination";


export default function SwiperSlider({ movies }: { movies: Movie[] }) {
  return (
    <Swiper
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
    >
      {movies?.map((movie) => (
        <SwiperSlide key={movie.id}>
          <Image
            src={movie.backdrop_path}
            alt={movie.title}
            width='1312'
            height='550'
          />
          <h3>{movie.title} {movie.age_restricted}+</h3>
          <p>{movie.year}, {movie.region}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}