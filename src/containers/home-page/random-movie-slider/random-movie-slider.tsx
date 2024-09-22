"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import Image from "next/image";

import type { Movie } from "../../../types/movies";
import axios from "@utils/configs/axios";

import "./swiper.scss";
import "swiper/css";
import "swiper/css/pagination";

export function RandomMovieSlider() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    axios.get<Movie[]>("/movies/random").then((data) => {
      setMovies(data);
    });
  }, []);
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
