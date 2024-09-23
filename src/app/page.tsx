import dynamic from "next/dynamic";

import { SliderSkeleton } from "@containers/home-page/random-movie-slider/random-movie-slider";
import CardList from "@components/card-list/card-list";
import { getMovies, getMoviesByGenre } from "@/actions";
import { Genres } from "@/utils/constants/genres";

const RandomMovieSlider = dynamic(
  () =>
    import(
      "@containers/home-page/random-movie-slider/random-movie-slider"
    ).then((m) => m.RandomMovieSlider),
  {
    loading: () => <SliderSkeleton />,
  }
);

export default async function Home() {
  const movies = await getMovies({ page: 1, limit: 6 });
  const cartoons = await getMoviesByGenre(Genres.Multfilm, 1, 6);
  const horror = await getMoviesByGenre(Genres.Qorqinchli, 1, 6);
  const comedic = await getMoviesByGenre(Genres.Komediya, 1, 6);
  const melodrama = await getMoviesByGenre(Genres.Melodrama, 1, 6);
  const drama = await getMoviesByGenre(Genres.Drama, 1, 6);
  const romantic = await getMoviesByGenre(Genres.Romantika, 1, 6);
  const triller = await getMoviesByGenre(Genres.Triller, 1, 6);
  const fantastic = await getMoviesByGenre(Genres.Fantastika, 1, 6);
  const adventures = await getMoviesByGenre(Genres.Sarguzasht, 1, 6);
  const hitman = await getMoviesByGenre(Genres.Jangari, 1, 6);

  return (
    <>
      <RandomMovieSlider />
      <CardList title='Barcha Filmlar' data={movies} />
      <CardList title='Multifilmar' data={cartoons} />
      <CardList title='Qorqinchli Filmlar' data={horror} />
      <CardList title='Komediya Filmlar' data={comedic} />
      <CardList title='Melodrama Filmlar' data={melodrama} />
      <CardList title='Dramlar' data={drama} />
      <CardList title='Romantika Filmlar' data={romantic} />
      <CardList title='Trillerlar' data={triller} />
      <CardList title='Fantastika Filmlar' data={fantastic} />
      <CardList title='Sarguzasht Filmlar' data={adventures} />
      <CardList title='Jangari Filmlar' data={hitman} />  
    </>
  );
}
