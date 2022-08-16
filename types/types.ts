import { StaticImageData } from "next/image";

export type DashbordSlidesType = {
  id: number;
  title: string;
  imageSrc: StaticImageData;
};

export type ProjectsPageSlides = {
  id: number;
  type: string;
  title: string;
  subject: string;
  desc: string[];
  img: StaticImageData[] | string[];
  videocover: StaticImageData[] | string[] | null;
  coverPostion: string;
  video: string[] | boolean;
  longTitle?: boolean | undefined;
};
