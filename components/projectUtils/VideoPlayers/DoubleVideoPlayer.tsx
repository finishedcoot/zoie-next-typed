import React, { useEffect, useState } from "react";
import style from "../../../styles/DoubleVideoPlayer.module.scss";
import ReactPlayer from "react-player";

const DoubleVideoPlayer: React.FC<{
  title: string;
  info1: string;
  info2: string;
  video: string[];
  cover: string[];
}> = ({ title, info2, info1, video, cover }) => {
  const [playingVideo1, setPlayingVideo1] = useState(false);
  const [playingVideo2, setPlayingVideo2] = useState(false);

  const [hashWindow, setHashWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== undefined) {
      setHashWindow(true);
    }
  }, []);

  const positonTheFirstVideo = () => {
    setPlayingVideo1((prev) => (prev = true));
  };
  const returnTheFirstVideo = () => {
    setPlayingVideo1((prev) => (prev = false));
  };

  const positonTheSecondVideo = () => {
    setPlayingVideo2((prev) => (prev = true));
  };
  const returnTheSecondVideo = () => {
    setPlayingVideo2((prev) => (prev = false));
  };
  const setPlayerNormal = (e: React.MouseEvent) => {
    if (!(e.target as HTMLDivElement).classList.contains(style.playingvideo)) {
      setPlayingVideo1((prev) => (prev = false));
      setPlayingVideo2((prev) => (prev = false));
    }
  };

  return (
    <div onClick={setPlayerNormal} className={style.container}>
      <div className={`${style.video_container}  `}>
        <div
          className={`${style.videos1} ${
            playingVideo1 ? style.playingvideo : ""
          }`}
        >
          {hashWindow && (
            <ReactPlayer
              controls
              className={style.player}
              width="100%"
              height="100%"
              url={video[0]}
              light={cover[0]}
              onPlay={positonTheFirstVideo}
              onPause={returnTheFirstVideo}
            />
          )}
        </div>

        <div
          className={`${style.videos2} ${
            playingVideo2 ? style.playingvideo : ""
          }`}
        >
          {hashWindow && (
            <ReactPlayer
              controls
              className={style.player}
              width="100%"
              height="100%"
              url={video[1]}
              light={cover[1]}
              onPlay={positonTheSecondVideo}
              onPause={returnTheSecondVideo}
            />
          )}
        </div>
      </div>{" "}
      <div className={style.info_container}>
        <p>{info1}</p>
        <h1>{title}</h1>
        <p>{info2}</p>
      </div>
    </div>
  );
};

export default DoubleVideoPlayer;
