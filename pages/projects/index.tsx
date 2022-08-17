import React, { Suspense } from "react";
import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import data from "../../data/contents.json";
import Styles from "../../styles/Projects.module.scss";

import { ProjectsTypes } from "../../types/types";
import Loader from "../../components/utils/Loader";

const WorksSlider = dynamic(
  () => import("../../components/allProjectsPage/WorkSlider"),
  {
    suspense: true,
    ssr: false,
  }
);
const PersonalSlider = dynamic(
  () => import("../../components/allProjectsPage/PersonalSlider"),
  {
    suspense: true,
    ssr: false,
  }
);

const index: NextPage<{ data: ProjectsTypes[] }> = ({ data }) => {
  return (
    <div className="fullHeight">
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
        <Suspense fallback={<Loader />}>
          <PersonalSlider data={data} />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <WorksSlider data={data} />
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
