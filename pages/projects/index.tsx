import React, { Suspense } from "react";
import type { NextPage, GetStaticProps } from "next";
import data from "../../data/contents.json";
import Styles from "../../styles/Projects.module.scss";
import dynamic from "next/dynamic";
import { ProjectsSlidesType } from "../../types/types";
const PersonalSlide = dynamic(
  () => import("../../components/allProjectsPage/PersonalSlider"),
  {
    suspense: true,
  }
);

const index: NextPage<{ data: ProjectsSlidesType[] }> = ({ data }) => {
  return (
    <div>
      <div className={Styles.container}>
        <Suspense
          fallback={
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          }
        >
          <PersonalSlide data={data} />
        </Suspense>
      </div>
    </div>
  );
};

export default index;

export const getStaticProps: GetStaticProps = (context) => {
  return {
    props: {
      data,
    },
  };
};
