import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Styles from "../../styles/DashbordSlide.module.scss";

const DashbordSlide: React.FC<{
  imageSrc: StaticImageData;
  title: string;
  active: boolean;
}> = ({ imageSrc, title, active }) => {
  return (
    <div
      className={`container relative ${Styles.slideContainer} ${
        active && Styles.active
      }`}
    >
      <Image
        layout="fill"
        src={imageSrc}
        objectFit={"cover"}
        objectPosition={"50% 44%"}
        quality={100}
      />
      <h1 className={Styles.title}>
        <Link href={"/Projects/QISHM"}>
          <span>{title}</span>
        </Link>
      </h1>
    </div>
  );
};

export default DashbordSlide;
