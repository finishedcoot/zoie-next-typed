import React from "react";
import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import data from "../../data/contents.json";
import { ProjectsTypes } from "../../types/types";
import styles from "../../styles/ProjectPage.module.scss";
import VideoPlayer from "../../components/projectUtils/VideoPlayers/SingleVideoPlayer";
import DoubleVideoPlayer from "../../components/projectUtils/VideoPlayers/DoubleVideoPlayer";
import MultipleVideoPlayer from "../../components/projectUtils/VideoPlayers/MultipleVideoPlayer";
import PhotoHeader from "../../components/projectUtils/Photo/PhotoHeader";
import PhotoContainer from "../../components/projectUtils/Photo/PhotoContainer";
import Link from "next/link";

const prjectPage: NextPage<{ project: ProjectsTypes }> = ({ project }) => {
  let cleanTitle = project.title;
  if (cleanTitle.includes("_")) {
    cleanTitle = cleanTitle.replaceAll("_", " ");
  }
  return (
    <div>
      <div className={styles.container}>
        <Link href="/projects">
          <a className={styles.back}>&#8249; Back To Projects</a>
        </Link>
        {project.video ? (
          project.video.length < 2 ? (
            <VideoPlayer
              video={project.video[0]}
              cover={project.videocover![0]}
              title={cleanTitle}
              info1={project.desc[0]}
              info2={project.desc[1]}
            />
          ) : project.video.length === 2 ? (
            <DoubleVideoPlayer
              video={project.video}
              cover={project.videocover as string[]}
              title={cleanTitle}
              info1={project.desc[0]}
              info2={project.desc[1]}
            />
          ) : (
            <MultipleVideoPlayer
              title={cleanTitle}
              info1={project.desc[0]}
              info2={project.desc[1]}
              video={project.video}
              cover={project.videocover as string[]}
            />
          )
        ) : (
          <PhotoHeader
            title={cleanTitle}
            info1={project.desc[0]}
            info2={project.desc[1]}
          />
        )}

        <PhotoContainer
          id={project.id}
          images={project.img}
          alt={project.title}
        />
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
