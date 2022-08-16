import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import styles from "../../styles/PersonalCard.module.scss";
import Link from "next/link";
import { shimmer, toBase64 } from "../utils/imagePlaceholder";

const PersonalCards: React.FC<{
  index: number;
  title: string;
  imgSrc: StaticImageData | string;
  position: string | null;
}> = ({ index, title, imgSrc, position }) => {
  return (
    <div
      data-index-number={index}
      className={styles.cardContainer}
      id={"personalSlide"}
      style={{
        marginLeft: `${index === 0 ? 0 : ""}`,
        position: "relative",
      }}
    >
      <Link href={`/Projects/${title}`}>
        <div className={styles.modalContainer}>
          <h1 className={styles.title}>{title}</h1>
        </div>
      </Link>
      <Image
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        alt={title}
        layout={"fill"}
        quality={100}
        className={styles.img}
        objectPosition={`20% ${position || "50%"}`}
        src={imgSrc}
      />
    </div>
  );
};

export default PersonalCards;
