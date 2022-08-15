import React from "react";
import style from "../../styles/BackDrop.module.scss";

const BackDrop: React.FC<{ click: () => void }> = (props) => {
  return <div className={style.backdrop} onClick={props.click}></div>;
};

export default BackDrop;
