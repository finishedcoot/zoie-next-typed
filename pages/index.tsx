import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import DashbordSlider from "../components/dashbord/DashbordSlider";
import WelcomeScreen from "../components/dashbord/WelcomeScreen";
import { DashbordSlidesType } from "../types/types";

const Home: NextPage<{ firstVisit: boolean; slides: DashbordSlidesType[] }> = ({
  firstVisit,
  slides,
}) => {
  return (
    <div>
      <Head>
        <title>ZOIE</title>
        <meta
          name="description"
          content="ali zoie portfolio made by ardeshir laghai"
        />

        <link rel="icon" href="/logo-white.svg" />
      </Head>
      {firstVisit && <WelcomeScreen />}
      <DashbordSlider Slides={slides} />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const slides: DashbordSlidesType[] = [
    { id: 1, title: "QISHM", imageSrc: "/static/media/dashbord/1.jpg" },
    {
      id: 2,
      title: "BELLE_DE_JOUR",
      imageSrc: "/static/media/dashbord/2.jpg",
    },
    {
      id: 3,
      title: "KAN",
      imageSrc: "/static/media/dashbord/3.jpg",
    },
    {
      id: 4,
      title: "AVINA",
      imageSrc: "/static/media/dashbord/4.jpg",
    },
  ];
  return {
    props: {
      slides,
    },
  };
};
