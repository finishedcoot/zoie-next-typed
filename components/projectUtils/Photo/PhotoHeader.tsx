import React from "react";
import style from "../../../styles/PhotoHeader.module.scss";

const PhotoHeader: React.FC<{
  title: string;
  info1: string;
  info2: string;
}> = ({ title, info1, info2 }) => {
  return (
    <div className={style.container}>
      <div className={style.info_container}>
        <p>{info1}</p>
        <h1>{title}</h1>
        <p>{info2}</p>
      </div>
    </div>
  );
};

export default PhotoHeader;
