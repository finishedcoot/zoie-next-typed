import React from "react";
import style from "../../../styles/FullImage.module.scss";

const FullImage: React.FC<{
  removeModal: (e: React.MouseEvent) => void;
  currentImage: string;
}> = ({ removeModal, currentImage }) => {
  return (
    <div onClick={removeModal} className={style.modalcontainer} id="modal">
      <div className={style.fullSizePhotoContainer}>
        <img
          className={style.fullphoto}
          src={currentImage}
          alt={"Full Image"}
        />
      </div>
    </div>
  );
};

export default FullImage;
