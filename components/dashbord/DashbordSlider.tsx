import React, { useEffect, useState } from "react";
import styles from "../../styles/DashbordSlider.module.scss";
import { DashbordSlidesType } from "../../types/types";
import { StaticImageData } from "next/image";
import dynamic from "next/dynamic";
const DashbordSlide = dynamic(() => import("./DashbordSlide"), {
  suspense: false,
  ssr: false,
});

const DashbordSlider: React.FC<{ Slides: DashbordSlidesType[] }> = ({
  Slides,
}) => {
  const [current, setCurrent] = useState<number | undefined>(1);
  const [touchPoint, setTouchPoints] = useState(0);
  const [touchInitialXPos, setTouchInitialXPos] = useState(0);
  const [touchPosDiffrence, setTouchPosDiffrence] = useState(0);

  const slides = Slides;
  /*
  Handling Next and Prev functions
 */
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

  /*
  Handling AutoChange Feature
 */
  useEffect(() => {
    if (current! > 4) {
      setCurrent(1);
    }
    const interval = setInterval(goNext, 8000);
    return () => clearInterval(interval);
  }, [current]);

  /*
    Handling Slides By Dots
  */
  const chooseSlide = (e: React.MouseEvent<HTMLElement>) => {
    const chosenSlide = parseInt(e.currentTarget.dataset.indexnumber!);
    setCurrent(chosenSlide);
  };

  /*
    Handling Touch Events
  */
  const touchStart = (e: React.TouchEvent) => {
    console.log(e.touches[0]);
    if (e.changedTouches.length === 1 || e.changedTouches.length === 2) {
      setTouchPoints(e.changedTouches.length);
      setTouchInitialXPos(e.touches[0].clientX);
    }
  };
  const touchMeasure = (e: React.TouchEvent) => {
    const currentTouchPos = e.touches[0].clientX;
    setTouchPosDiffrence(currentTouchPos - touchInitialXPos);
  };
  const touchEnded = (e: React.TouchEvent) => {
    if (touchPosDiffrence > 150) {
      goPrev();
      setTouchInitialXPos(0);
      setTouchPosDiffrence(0);
      return;
    }
    if (touchPosDiffrence < -150) {
      goNext();
      setTouchInitialXPos(0);
      setTouchPosDiffrence(0);
    }
  };

  return (
    <div
      className={`fullScreen ${styles.sliderContainer}`}
      onTouchStart={touchStart}
      onTouchMove={touchMeasure}
      onTouchEnd={touchEnded}
    >
      <button
        className={`${styles.arrowButton} ${styles.leftArrow}`}
        onClick={goPrev}
      ></button>
      {slides.map((slide) => (
        <DashbordSlide
          key={slide.title}
          imageSrc={slide.imageSrc as StaticImageData}
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
