import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import styles from "../../styles/PersonalCard.module.scss";
import Link from "next/link";

const PersonalCards: React.FC<{
  index: number;
  title: string;
  imgSrc: StaticImageData;
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
        alt={title}
        width={"100%"}
        height={"100%"}
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
