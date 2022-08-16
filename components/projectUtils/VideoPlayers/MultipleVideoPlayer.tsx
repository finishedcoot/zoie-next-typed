import React, { useState, useEffect } from "react";
import style from "../../../styles/MultipleVideo.module.scss";
import Image, { StaticImageData } from "next/image";

import ReactPlayer from "react-player";

const MultipleVideoPlayer: React.FC<{
  title: string;
  info1: string;
  info2: string;
  cover: string[] | StaticImageData[];
  video: string[];
}> = ({ title, info1, info2, cover, video }) => {
  const [hashWindow, setHashWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== undefined) {
      setHashWindow(true);
    }
  }, []);

  return (
    <div className={style.container}>
      <div className={style.first_container}>
        <div className={style.video_container}>
          <Image className={style.header} src={cover[0]} alt={title} />
        </div>
        <div className={style.info_container}>
          <p>{info1}</p>
          <h1>{title}</h1>
          <p>{info2}</p>
        </div>
      </div>
      {video.map((vid, id) => {
        return (
          <div
            className={
              id % 2 === 0 ? style.even_container : style.odd_container
            }
          >
            <div className={style.videos}>
              {hashWindow && (
                <ReactPlayer
                  controls
                  className={style.player}
                  width="100%"
                  height="100%"
                  url={vid}
                  light={cover[id] as string}
                />
              )}
            </div>
            {/* <h1 className={style.titels}>{props.vidtitle[id]}</h1> */}
          </div>
        );
      })}
    </div>
  );
};

export default MultipleVideoPlayer;
