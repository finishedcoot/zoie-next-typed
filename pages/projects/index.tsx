import React, { Suspense } from "react";
import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";

import data from "../../data/contents.json";
import Styles from "../../styles/Projects.module.scss";
import dynamic from "next/dynamic";
import { ProjectsTypes } from "../../types/types";
const PersonalSlide = dynamic(
  () => import("../../components/allProjectsPage/PersonalSlider"),
  {
    suspense: true,
  }
);
const WorksSlide = dynamic(
  () => import("../../components/allProjectsPage/WorkSlider"),
  {
    suspense: true,
  }
);

const index: NextPage<{ data: ProjectsTypes[] }> = ({ data }) => {
  return (
    <div>
      <Head>
        <title>ZOIE | PROJECTS</title>
        <meta name="description" content="ali zoie projects - ali zoie works" />
        {data.map((project, i) => (
          <meta
            key={i}
            name={`${project.title} - ali zoie`}
            content={`${project.title} - ali zoie`}
          />
        ))}
      </Head>
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
          <WorksSlide data={data} />
        </Suspense>
      </div>
    </div>
  );
};

export default index;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      data,
    },
  };
};
