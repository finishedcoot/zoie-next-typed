import React, { useState, useEffect } from "react";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
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
    <motion.div
      key={router.route}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Layout welcome={nav}>
        <Component {...pageProps} firstVisit={firstVisit} />
      </Layout>
    </motion.div>
  );
}

export default MyApp;
