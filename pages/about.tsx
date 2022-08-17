import React from "react";
import Head from "next/head";
import type { NextPage } from "next";

import style from "../styles/AboutPage.module.scss";

const About: NextPage = () => {
  return (
    <div className="fullHeight">
      <Head>
        <title>ZOIE | About</title>
        <meta
          name="description"
          content="about ali zoie - ali zoie information"
        />
      </Head>
      <div className={style.aboutContainer}>
        <h1>MORE INFO WILL BE ADDED SOON</h1>
      </div>
    </div>
  );
};

export default About;
