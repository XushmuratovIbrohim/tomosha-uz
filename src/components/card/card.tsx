import cn from "clsx";
import Image from "next/image";
import Link from "next/link";

import styles from "./card.module.scss";

type Props = {
  img: string;
  title: string;
  description: string;
  variant: "horizantal" | "vertical";
  id: number;
  styles?: string;
};

export default function Card({ variant, img, title, description, id }: Props) {
  const classNames = cn({
    [styles.card]: true,
    [styles.horizantal]: variant === "horizantal",
    [styles.vertical]: variant === "vertical",
  });
  return (
    <li className={classNames}>
      <Link href={"/movies/" + id}>
        <div className={styles.img}>
          <Image
            width={0}
            height={0}
            sizes='100vw'
            src={img}
            alt={title}
          ></Image>
        </div>
      </Link>
      <div>
        <Link href={"/movies/" + id}><h4 className={styles.title}>{title}</h4></Link>
        <Link href={"/movies/" + id}><p className={styles.description}>{description}</p></Link>
      </div>
    </li>
  );
}
