import { StaticImageData } from "next/image";

export type DashbordSlidesType = {
  id: number;
  title: string;
  imageSrc: StaticImageData;
};

export type ProjectsSlidesType = {
  index: number;
  type: string;
  img: StaticImageData[];
  title: string;
  coverPostion: string | null;
};
