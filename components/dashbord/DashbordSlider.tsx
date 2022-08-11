import React from "react";
import DashbordSlide from "./DashbordSlide";
import qishm from "../../public/dashbord/1.jpg";
import belleDeJour from "../../public/dashbord/2.jpg";
import kan from "../../public/dashbord/3.jpg";
import avina from "../../public/dashbord/4.jpg";

const DashbordSlider: React.FC = (props) => {
  const slides = [
    {
      title: "QISHM",
      imageSrc: qishm,
      active: false,
    },
    {
      title: "BELLE DE JOUR",
      imageSrc: belleDeJour,
      active: true,
    },
    {
      title: "KAN",
      imageSrc: kan,
      active: false,
    },
    {
      title: "AVINA",
      imageSrc: avina,
      active: false,
    },
  ];

  return (
    <div className="fullScreen">
      {slides.map(
        (slide) =>
          slide.active && (
            <DashbordSlide
              imageSrc={slide.imageSrc}
              title={slide.title}
              active={slide.active}
            />
          )
      )}
    </div>
  );
};

export default DashbordSlider;
