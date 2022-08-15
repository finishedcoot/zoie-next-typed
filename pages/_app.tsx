import React, { useState, useEffect } from "react";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  const [firstVisit, setFirstVisit] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const userFirstVisit = sessionStorage.getItem("Has_visited");

    if (userFirstVisit !== "True") {
      console.log("use effect loop");
      setFirstVisit(true);
      sessionStorage.setItem("Has_visited", "True");
    }
    setTimeout(() => {
      setFirstVisit(false);
    }, 4000);
  }, []);
  return (
    <Layout welcome={nav}>
      <Component {...pageProps} firstVisit={firstVisit} />
    </Layout>
  );
}

export default MyApp;
