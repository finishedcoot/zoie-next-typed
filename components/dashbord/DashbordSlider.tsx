import React, { useEffect, useState } from "react";
import DashbordSlide from "./DashbordSlide";
import styles from "../../styles/DashbordSlider.module.scss";
import { DashbordSlidesType } from "../../types/types";

const DashbordSlider: React.FC<{ Slides: DashbordSlidesType[] }> = ({
  Slides,
}) => {
  const [current, setCurrent] = useState<number | undefined>(1);

  const slides = Slides;
  const goNext = () => {
    if (current === 4) {
      setCurrent(1);
      return;
    }
    setCurrent((prev) => prev! + 1);
  };
  const goPrev = () => {
    if (current! <= 1) {
      setCurrent(4);
      return;
    }
    setCurrent((prev) => prev! - 1);
  };
  useEffect(() => {
    if (current! > 4) {
      setCurrent(1);
    }
    const interval = setInterval(goNext, 6000);
    return () => clearInterval(interval);
  }, [current]);
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
          active={slide.id === current}
        />
      ))}
      <button
        className={`${styles.arrowButton} ${styles.rightArrow}`}
        onClick={goNext}
      ></button>
      <div className={styles.dotsContainer}>
        {slides.map((slide) => (
          <span
            className={`${styles.dot} ${
              slide.id === current && styles.activeDot
            }`}
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

export async function getStaticProps() {}
