import React, { useEffect, useRef, useState } from "react";
import style from "../../styles/CustomSlider.module.scss";

const NewSlider: React.FC<{
  type: string;
  children?: JSX.Element | JSX.Element[];
}> = ({ children, type }) => {
  const [numberToShow, setNumberToShow] = useState(5);
  const [current, setCurrent] = useState(0);
  const [cardsAmount, setCardsAmount] = useState(0);
  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (slider.current != null) {
      const slideWidth =
        slider.current.firstElementChild?.getBoundingClientRect().width;
      setCardsAmount(slider.current.children.length);

      slider.current.scrollTo(current * (slideWidth! + 50), 0);
      if (current < 0) {
        setCurrent(0);
      }
    }
  }, [current]);

  useEffect(() => {
    if (type !== "works") {
      setNumberToShow(1);
      return;
    }
    window.addEventListener("resize", handleResize, false);
    if (window.innerWidth < 426) {
      setNumberToShow(1);
      return;
    }
    if (window.innerWidth < 721) {
      setNumberToShow(2);
      return;
    }
    if (window.innerWidth < 1025) {
      setNumberToShow(3);
      return;
    }
  }, []);

  const goNext = () => {
    if (current >= cardsAmount - 1) {
      return;
    }
    setCurrent((prev) => prev + numberToShow);
  };
  const goPrev = () => {
    if (current === 0) {
      return;
    }
    setCurrent((prev) => prev - numberToShow);
  };

  const handleResize = () => {
    if (window.innerWidth < 426) {
      setNumberToShow(1);
      return;
    }
    if (window.innerWidth < 721) {
      setNumberToShow(2);
      return;
    }
    if (window.innerWidth < 1025) {
      setNumberToShow(3);
      return;
    }
  };

  return (
    <div className={style.container}>
      {cardsAmount > numberToShow && (
        <button
          onClick={goPrev}
          className={`${style.arrowButton} ${style.leftArrow} ${
            current === 0 ? style.notActive : ""
          }`}
        ></button>
      )}
      <div
        ref={slider}
        className={` ${
          type === "works" && cardsAmount >= numberToShow && style.multipleCard
        }
           ${
             type !== "works" && cardsAmount > numberToShow && style.singleCard
           }   ${cardsAmount < numberToShow && style.unfilledSlider}`}
      >
        {children}
      </div>
      {cardsAmount > numberToShow && (
        <button
          onClick={goNext}
          className={`${style.arrowButton} ${style.rightArrow} ${
            current >= cardsAmount - 1 ? style.notActive : ""
          }`}
        ></button>
      )}
    </div>
  );
};

export default NewSlider;
