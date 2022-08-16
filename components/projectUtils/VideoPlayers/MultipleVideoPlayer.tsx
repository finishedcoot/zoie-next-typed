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
        <div className={style.info_container}>
          <p>{info1}</p>
          <h1>{title}</h1>
          <p>{info2}</p>
        </div>
      </div>
      {hashWindow && video.length === 1 ? (
        <div className={style.video_container}>
          <ReactPlayer
            controls
            width="100%"
            height="100%"
            url={video[0]}
            light={cover[0] as string}
          />
        </div>
      ) : (
        video.map((vid, id) => {
          return (
            <div key={id} className={style.even_container}>
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
            </div>
          );
        })
      )}
    </div>
  );
};

export default MultipleVideoPlayer;
