import React from "react";
import styles from "../../styles/WorksCard.module.scss";
import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { shimmer, toBase64 } from "../utils/imageUtils";

const ProjectsCard: React.FC<{
  index: number;
  title: string;
  imgSrc: StaticImageData | string;
  longTitle: boolean | undefined;
  description: string;
}> = ({ index, title, imgSrc, longTitle }) => {
  let cleanTitle = title;
  if (cleanTitle.includes("_")) {
    cleanTitle = cleanTitle.replaceAll("_", " ");
  }

  return (
    <div
      className={styles.container}
      style={{
        marginLeft: `${index === 0 ? 0 : ""}`,
      }}
    >
      <Link href={`/projects/${title}`}>
        <div className={styles.modalContainer}>
          <h1 className={longTitle === true ? styles.longtitle : styles.title}>
            {cleanTitle}
          </h1>
        </div>
      </Link>
      <Image
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        alt={`Gallery of ${{ title }}`}
        className={styles.img}
        src={imgSrc}
        layout={"fill"}
        quality={100}
      />
    </div>
  );
};

export default ProjectsCard;
