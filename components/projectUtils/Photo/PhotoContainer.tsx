import React, { useState, Suspense } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import style from "../../../styles/PhotoContainer.module.scss";
import { shimmer, toBase64 } from "../../utils/imageUtils";
import dynamic from "next/dynamic";
import Loader from "../../utils/Loader";

const FullImage = dynamic(() => import("./FullImage"), {
  suspense: true,
  ssr: false,
});

const PhotoContainer: React.FC<{
  images: StaticImageData[] | string[];
  alt: string;
  id: number;
}> = ({ images, alt, id }) => {
  const [currentImage, setCurrentImage] = useState("");
  const [displayModal, setDisplayModal] = useState(false);

  const showFullimage = (e: React.MouseEvent) => {
    console.log("object");
    setDisplayModal((prev) => (prev = true));
    console.log(displayModal);
    setCurrentImage((prev) => (prev = (e.target as HTMLImageElement).src));
  };
  const removeModal = (e: React.MouseEvent) => {
    if ((e.target as HTMLDivElement).id === "modal") {
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
                shimmer(500, 300)
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
        <Suspense fallback={<Loader />}>
          <FullImage currentImage={currentImage} removeModal={removeModal} />
        </Suspense>
      )}
    </div>
  );
};

export default PhotoContainer;
