import React, { useState } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import style from "../../../styles/PhotoContainer.module.scss";
import { shimmer, toBase64 } from "../../utils/imageUtils";

const PhotoContainer: React.FC<{
  images: StaticImageData[] | string[];
  alt: string;
  id: number;
}> = ({ images, alt, id }) => {
  const [currentImage, setCurrentImage] = useState("");
  const [displayModal, setDisplayModal] = useState(false);

  const showFullimage = (e: React.MouseEvent) => {
    setDisplayModal((prev) => (prev = true));
    setCurrentImage((prev) => (prev = (e.target as HTMLImageElement).src));
  };
  const removeModal = (e: React.MouseEvent) => {
    if ((e.target as HTMLDivElement).classList.contains(style.modalcontainer)) {
      setDisplayModal((prev) => (prev = false));
      setCurrentImage((prev) => (prev = ""));
    }
  };
  return (
    <div className={style.container}>
      {images.map((img, i) => {
        return (
          <div
            className={style.photoContainer}
            style={{
              position: "relative",
              width: "500px",
              height: "300px",
              margin: "10px",
            }}
            key={i}
          >
            <Image
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
              layout="fill"
              objectFit="cover"
              src={img}
              alt={alt}
              onClick={showFullimage}
            />
          </div>
        );
      })}
      {displayModal && (
        <div onClick={removeModal} className={style.modalcontainer}>
          <div className={style.fullSizePhotoContainer}>
            <img
              className={style.fullphoto}
              src={currentImage}
              alt={"Full Image"}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoContainer;
