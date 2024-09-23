import axios from "@utils/configs/axios";
import { Movie } from "@/types";

export const getMovies = async ({
  page = 1,
  limit = 6,
}: {
  page?: number;
  limit?: number;
}) => {
  const data = await axios.get<Movie[], Movie[]>("/movies", {
    params: {
      page,
      pageSize: limit,
    },
  });
  return data;
};

export const getMoviesByGenre = async (id: number, page = 1, limit = 6) => {
  const data = await axios.get<Movie[], Movie[]>(`/movies/genres/${id}`, {
    params: {
      page,
      pageSize: limit,
    },
  });
  return data;
};

export const getRandomMovies = async () => {
  const data = await axios.get<Movie[], Movie[]>("/movies/random");
  return data;
};


export const getMovie = async (id: string) => {
  const data = await axios.get<Movie, Movie>(`/movies/${id}`);
  return data;
}