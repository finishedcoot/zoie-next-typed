import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import qishm from "../public/dashbord/1.jpg";
import belleDeJour from "../public/dashbord/2.jpg";
import kan from "../public/dashbord/3.jpg";
import avina from "../public/dashbord/4.jpg";
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
    { id: 1, title: "QISHM", imageSrc: qishm },
    {
      id: 2,
      title: "BELLE_DE_JOUR",
      imageSrc: belleDeJour,
    },
    {
      id: 3,
      title: "KAN",
      imageSrc: kan,
    },
    {
      id: 4,
      title: "AVINA",
      imageSrc: avina,
    },
  ];
  return {
    props: {
      slides,
    },
  };
};
