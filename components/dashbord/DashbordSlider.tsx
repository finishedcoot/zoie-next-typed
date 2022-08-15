import React, { useState } from "react";
import { StaticImageData } from "next/image";
import DashbordSlide from "./DashbordSlide";
import qishm from "../../public/dashbord/1.jpg";
import belleDeJour from "../../public/dashbord/2.jpg";
import kan from "../../public/dashbord/3.jpg";
import avina from "../../public/dashbord/4.jpg";
import styles from "../../styles/DashbordSlider.module.scss";

const DashbordSlider: React.FC = (props) => {
  const [current, setCurrent] = useState<number | undefined>(1);

  const activationCheck = function (this: any) {
    return this.id === current;
  };

  const slides: {
    id: number;
    title: string;
    imageSrc: StaticImageData;
    active: () => boolean;
  }[] = [
    { id: 1, title: "QISHM", imageSrc: qishm, active: activationCheck },
    {
      id: 2,
      title: "BELLE DE JOUR",
      imageSrc: belleDeJour,
      active: activationCheck,
    },
    {
      id: 3,
      title: "KAN",
      imageSrc: kan,
      active: activationCheck,
    },
    {
      id: 4,
      title: "AVINA",
      imageSrc: avina,
      active: activationCheck,
    },
  ];
  const goNext = () => {
    if (current === 4) {
      setCurrent(1);
      return;
    }
    console.log(current);
    setCurrent((prev) => ++prev!);
  };
  const goPrev = () => {
    if (current === 1) {
      setCurrent(4);
      return;
    }
    setCurrent((prev) => --prev!);
  };

  const chooseSlide = (e: React.MouseEvent<HTMLElement>) => {
    const chosenSlide = parseInt(e.currentTarget.dataset.indexnumber!);
    setCurrent(chosenSlide);
  };

  return (
    <div className={`fullScreen ${styles.sliderContainer}`}>
      <button
        className={`${styles.arrowButton} ${styles.leftArrow}`}
        onClick={goPrev}
      ></button>
      {slides.map((slide) => (
        <DashbordSlide
          key={slide.title}
          imageSrc={slide.imageSrc}
          title={slide.title}
          active={slide.active()}
        />
      ))}
      <button
        className={`${styles.arrowButton} ${styles.rightArrow}`}
        onClick={goNext}
      ></button>
      <div className={styles.dotsContainer}>
        {slides.map((slide) => (
          <span
            className={`${styles.dot} ${slide.active() && styles.activeDot}`}
            key={slide.id}
            onClick={chooseSlide}
            data-indexnumber={slide.id}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default DashbordSlider;
