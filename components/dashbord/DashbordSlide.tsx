import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Styles from "../../styles/DashbordSlide.module.scss";
import { motion } from "framer-motion";

const DashbordSlide: React.FC<{
  imageSrc: StaticImageData;
  title: string;
  active: boolean;
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchMove: (e: React.TouchEvent) => void;
  onTouchEnd: (e: React.TouchEvent) => void;
}> = ({ imageSrc, title, active, onTouchStart, onTouchEnd, onTouchMove }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
      key={title}
      className={`container relative ${Styles.slideContainer} ${
        active && Styles.active
      }`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <Image
        layout="fill"
        src={imageSrc}
        objectFit={"cover"}
        objectPosition={"50% 44%"}
        alt={title}
        quality={window.innerWidth > 1023 ? 100 : 70}
      />
      <h1 className={Styles.title}>
        <Link href={`/projects/${title}`}>
          <span>{title.replaceAll("_", " ")}</span>
        </Link>
      </h1>
    </motion.div>
  );
};

export default DashbordSlide;
