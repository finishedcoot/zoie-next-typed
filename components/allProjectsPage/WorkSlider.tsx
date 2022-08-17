import React from "react";
import styles from "../../styles/WorksSlider.module.scss";
import { ProjectsTypes } from "../../types/types";
import WorksCard from "./WorksCard";
import CustomSlider from "../utils/CustomSlider";

const WorksSlider: React.FC<{ data: ProjectsTypes[] }> = ({ data }) => {
  const fashionProjects: ProjectsTypes[] = [];
  const commercialProjects: ProjectsTypes[] = [];
  const advertismentProjects: ProjectsTypes[] = [];
  const interiorAndBuildingsProjects: ProjectsTypes[] = [];
  const realEstateProjects: ProjectsTypes[] = [];
  const weddingProjects: ProjectsTypes[] = [];

  data.forEach((element) => {
    switch (element.subject) {
      case "fashion":
        fashionProjects.push(element);
        break;
      case "commercial":
        commercialProjects.push(element);
        break;
      case "advertisment":
        advertismentProjects.push(element);
        break;
      case "interior_and_buildings":
        interiorAndBuildingsProjects.push(element);
        break;
      case "real_estate":
        realEstateProjects.push(element);
        break;
      case "WEDDING":
        weddingProjects.push(element);
        break;
    }
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>WORK</h1>
      {/* FASHION */}
      <h2 className={styles.topic}>FASHION</h2>
      <CustomSlider type={"works"}>
        {fashionProjects.map((project, i) => {
          return (
            <WorksCard
              key={i}
              index={i}
              imgSrc={project.img[0]}
              title={project.title}
              description={project.desc[0]}
              longTitle={project.longTitle}
            />
          );
        })}
      </CustomSlider>
      {/* COMMERCIAL */}
      <div className={styles.container}>
        <h2 className={styles.topic}>COMMERCIAL</h2>
        <CustomSlider type={"works"}>
          {commercialProjects.map((project, i) => {
            return (
              <WorksCard
                key={i}
                index={i}
                imgSrc={project.videocover![0]}
                title={project.title}
                description={project.desc[0]}
                longTitle={project.longTitle}
              />
            );
          })}
        </CustomSlider>
      </div>
      {/* ADVERTISING */}
      <div className={styles.container}>
        <h2 className={styles.topic}>ADVERTISING</h2>
        <CustomSlider type={"works"}>
          {advertismentProjects.map((project, i) => {
            return (
              <WorksCard
                key={i}
                index={i}
                imgSrc={project.img[0]}
                title={project.title}
                description={project.desc[0]}
                longTitle={project.longTitle}
              />
            );
          })}
        </CustomSlider>
      </div>
      {/* INTERIOR */}
      <div className={styles.container}>
        <h2 className={styles.topic}>INTERIOR & EXTERIOR</h2>
        <CustomSlider type={"works"}>
          {interiorAndBuildingsProjects.map((project, i) => {
            return (
              <WorksCard
                key={i}
                index={i}
                imgSrc={project.img[0]}
                title={project.title}
                description={project.desc[0]}
                longTitle={project.longTitle}
              />
            );
          })}
        </CustomSlider>
      </div>
      {/* REAL ESTATE */}
      <div className={styles.container}>
        <h2 className={styles.topic}>REAL ESTATE</h2>
        <CustomSlider type={"works"}>
          {realEstateProjects.map((project, i) => {
            return (
              <WorksCard
                key={i}
                index={i}
                imgSrc={project.videocover![0]}
                title={project.title}
                description={project.desc[0]}
                longTitle={project.longTitle}
              />
            );
          })}
        </CustomSlider>
      </div>
      {/* WEDDING*/}

      <div className={styles.container}>
        <h2 className={styles.single_topic}>WEDDING</h2>
        <CustomSlider type={"works"}>
          <React.Fragment>
            {weddingProjects.map((project, i) => {
              return (
                project.subject === "WEDDING" && (
                  <WorksCard
                    key={i}
                    index={i}
                    imgSrc={project.videocover![0]}
                    title={project.title}
                    description={project.desc[0]}
                    longTitle={project.longTitle}
                  />
                )
              );
            })}
          </React.Fragment>
        </CustomSlider>
      </div>
    </div>
  );
};

export default WorksSlider;
