import React from "react";
import PersonalCards from "./PersonalCard";
import CustomSlider from "../utils/CustomSlider";
import style from "../../styles/PersonalSlider.module.scss";
import { ProjectsTypes } from "../../types/types";

const PersonalSlide: React.FC<{ data: ProjectsTypes[] }> = ({ data }) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>PERSONAL</h2>
      <CustomSlider type={"personal"}>
        <React.Fragment>
          {data.map((project, i) => {
            return (
              project.type === "personal" && (
                <PersonalCards
                  key={i}
                  index={i}
                  imgSrc={project.img[0]}
                  title={project.title}
                  position={project.coverPostion && project.coverPostion}
                />
              )
            );
          })}
        </React.Fragment>
      </CustomSlider>
    </div>
  );
};

export default PersonalSlide;
