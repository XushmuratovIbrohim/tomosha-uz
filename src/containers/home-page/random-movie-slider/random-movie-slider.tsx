import SwiperSlider from "@components/slider/slider";
import { getRandomMovies } from "@/actions";
import Skeleton from "react-loading-skeleton";
3;

export async function RandomMovieSlider() {
  const movies = await getRandomMovies();

  return (
    <section className='mb-[130px]'>
      <SwiperSlider movies={movies} />
    </section>
  );
}

export const SliderSkeleton = () => (
  <Skeleton
    count={1}
    height="550"
    width="1312"
    className='rounded-[10px] mb-[70px]'
    baseColor='#fff'
    highlightColor='#292929'
  />
);
