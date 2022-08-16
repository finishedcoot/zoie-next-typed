import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import style from "../../../styles/VideoPlayer.module.scss";
import { StaticImageData } from "next/image";

const VideoPlayer: React.FC<{
  video: string;
  cover: string | StaticImageData;
  title: string;
  info1: string;
  info2: string;
}> = ({ video, cover, title, info1, info2 }) => {
  const [hashWindow, setHashWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== undefined) {
      setHashWindow(true);
    }
  }, []);

  return (
    <div className={style.container}>
      <div className={style.video_container}>
        {hashWindow && (
          <ReactPlayer
            controls
            width="100%"
            height="100%"
            url={video}
            light={cover as string}
          />
        )}
      </div>
      <div className={style.info_container}>
        <p>{info1}</p>
        <h1>{title}</h1>
        <p>{info2}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
