import Link from "next/link";

import Card from "../card/card";
import { Genres } from "@utils/constants/genres";
import type { Movie } from "../../types/movies";

import styles from "./card-list.module.scss";

type Props = {
  data: Movie[];
  title: string;
};

export default function CardList({ data, title }: Props) {
  return (
    <section className={styles.wrapper}>
      <Link href='movies' className={styles.title}>
        {title} »
      </Link>
      {data.length === 0 ? (
        <h1>Bunday filmlar topilmadi:(</h1>
      ) : (
        <ul className={styles.list}>
          {data.map((movie) => {
            const genresWithWords = movie.genres.map((genre) => {
              return Genres[genre];
            });
            return (
              <Card
                key={movie.id}
                id={movie.id}
                variant='vertical'
                img={movie.poster_path}
                title={movie.title}
                description={genresWithWords.join(", ")}
              />
            );
          })}
        </ul>
      )}
    </section>
  );
}
