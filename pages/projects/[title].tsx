import React, { Suspense } from "react";
import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import data from "../../data/contents.json";
import { ProjectsTypes } from "../../types/types";
import styles from "../../styles/ProjectPage.module.scss";
import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";
import Loader from "../../components/utils/Loader";
const DoubleVideoPlayer = dynamic(
  () => import("../../components/projectUtils/VideoPlayers/DoubleVideoPlayer"),
  {
    suspense: true,
    ssr: false,
  }
);
const MultipleVideoPlayer = dynamic(
  () =>
    import("../../components/projectUtils/VideoPlayers/MultipleVideoPlayer"),
  {
    suspense: true,
    ssr: false,
  }
);
const PhotoContainer = dynamic(
  () => import("../../components/projectUtils//Photo/PhotoContainer"),
  {
    suspense: true,
    ssr: false,
  }
);

const prjectPage: NextPage<{ project: ProjectsTypes }> = ({ project }) => {
  let cleanTitle = project.title;
  if (cleanTitle.includes("_")) {
    cleanTitle = cleanTitle.replaceAll("_", " ");
  }
  return (
    <div>
      <Head>
        <title>ZOIE </title>
        <meta name={`${cleanTitle}`} content={`${cleanTitle} ali zoie`} />
        <meta
          name={`${cleanTitle} photos`}
          content={`${cleanTitle}'s photos`}
        />
        <meta
          name={`${cleanTitle} photos`}
          content={`${cleanTitle}'s images`}
        />
        <meta
          name={`${cleanTitle} photos`}
          content={`${cleanTitle}'s photos by ali zoie`}
        />
        <meta
          name={`${cleanTitle} photos`}
          content={`${cleanTitle}'s images by ali zoie`}
        />
      </Head>
      <div className={styles.container}>
        <Link href="/projects">
          <a className={styles.back}>&#8249; Back To Projects</a>
        </Link>
        {project.video.length === 2 ? (
          <Suspense fallback={<Loader />}>
            <DoubleVideoPlayer
              video={project.video as string[]}
              cover={project.videocover as string[]}
              title={cleanTitle}
              info1={project.desc[0]}
              info2={project.desc[1]}
            />
          </Suspense>
        ) : (
          <Suspense fallback={<Loader />}>
            <MultipleVideoPlayer
              title={cleanTitle}
              info1={project.desc[0]}
              info2={project.desc[1]}
              video={project.video as string[]}
              cover={project.videocover as string[]}
            />
          </Suspense>
        )}
        <Suspense fallback={<Loader />}>
          <PhotoContainer
            id={project.id}
            images={project.img}
            alt={project.title}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default prjectPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const projectTitle = context.params?.title;

  const prjectContent = data.find((project) => project.title === projectTitle);

  return {
    props: {
      project: prjectContent,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const projectsPaths = data.map((project) => ({
    params: { title: project.title },
  }));

  return {
    paths: projectsPaths,
    fallback: false,
  };
};
