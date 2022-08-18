import React, { useState, useEffect } from "react";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { motion, AnimatePresence } from "framer-motion";

import Router from "next/router";

//Quick but not stable fix for the route changing and animation issue(It's because of css modules)
const routeChange = () => {
  // Temporary fix to avoid flash of unstyled content
  // during route transitions. Keep an eye on this
  // issue and remove this code when resolved:
  // https://github.com/vercel/next.js/issues/17464

  const tempFix = () => {
    const allStyleElems = document.querySelectorAll('style[media="x"]');
    allStyleElems.forEach((elem) => {
      elem.removeAttribute("media");
    });
  };
  tempFix();
};

Router.events.on("routeChangeComplete", routeChange);
Router.events.on("routeChangeStart", routeChange);

function MyApp({ Component, pageProps, router }: AppProps) {
  const [firstVisit, setFirstVisit] = useState(false);

  useEffect(() => {
    // some browsers (like safari) may require a timeout to delay calling this
    // function after a page has loaded; otherwise, it may not update the position
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }, [router.pathname]);

  useEffect(() => {
    const userFirstVisit = sessionStorage.getItem("Has_visited");

    if (userFirstVisit !== "True") {
      console.log("use effect loop");
      setFirstVisit(true);
      setTimeout(() => {
        setFirstVisit((prev) => (prev = false));
      }, 4000);
    } else {
      setFirstVisit(false);
    }
    sessionStorage.setItem("Has_visited", "True");
  }, []);
  return (
    <Layout welcome={firstVisit}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
          key={router.route}
        >
          <Component
            {...pageProps}
            firstVisit={firstVisit}
            key={router.route}
          />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
