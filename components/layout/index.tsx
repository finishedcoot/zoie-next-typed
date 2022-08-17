import React, { useState } from "react";
import Navbar from "./navigation/Navbar";
import Footer from "./footer/Footer";
import Head from "next/head";
import dynamic from "next/dynamic";

const SideDrawer = dynamic(() => import("./navigation/SideDrawer"), {
  ssr: false,
});
const BackDrop = dynamic(() => import("../utils/BackDrop"), {
  ssr: false,
});

const Layout: React.FC<{
  welcome: boolean;
  children?: JSX.Element | JSX.Element[];
}> = ({ welcome, children }) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevState) => !prevState);
  };
  const backDropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <Head>
        <title>ZOIE</title>
        <meta
          name="description"
          content="ali zoie portfolio made by ardeshir laghai"
        />

        <link rel="icon" href="/static/media/logo-white.svg" />
      </Head>
      <Navbar welcome={welcome} />
      <SideDrawer
        show={sideDrawerOpen}
        drawerClickHandler={drawerToggleClickHandler}
      />
      {sideDrawerOpen && <BackDrop click={backDropClickHandler} />}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
