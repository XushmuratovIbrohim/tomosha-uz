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
    height='768px'
    className='mb-[70px] rounded-[150px]'
    baseColor='#292929'
    highlightColor='#5555'
  />
);
