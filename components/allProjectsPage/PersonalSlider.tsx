import React, { Suspense } from "react";
import CustomSlider from "../utils/CustomSlider";
import style from "../../styles/PersonalSlider.module.scss";
import { ProjectsTypes } from "../../types/types";
import dynamic from "next/dynamic";
import Loader from "../utils/Loader";

const PersonalCards = dynamic(() => import("./PersonalCard"), {
  suspense: true,
  ssr: false,
});

const PersonalSlide: React.FC<{ data: ProjectsTypes[] }> = ({ data }) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>PERSONAL</h2>
      <CustomSlider type={"personal"}>
        <React.Fragment>
          {data.map((project, i) => {
            return (
              project.type === "personal" && (
                <Suspense key={Math.random() * 100} fallback={<Loader />}>
                  <PersonalCards
                    key={i}
                    index={i}
                    imgSrc={project.img[0]}
                    title={project.title}
                    position={project.coverPostion && project.coverPostion}
                  />
                </Suspense>
              )
            );
          })}
        </React.Fragment>
      </CustomSlider>
    </div>
  );
};

export default PersonalSlide;
