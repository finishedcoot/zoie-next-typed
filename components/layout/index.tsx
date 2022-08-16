import React, { useState } from "react";
import Navbar from "./navigation/Navbar";
import Footer from "./footer/Footer";
import SideDrawer from "./navigation/SideDrawer";
import BackDrop from "../utils/BackDrop";
import Head from "next/head";

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
    <>
      <Head>
        <title>ZOIE</title>
        <meta
          name="description"
          content="ali zoie portfolio made by ardeshir laghai"
        />

        <link rel="icon" href="/logo-white.svg" />
      </Head>
      <Navbar welcome={welcome} />
      <SideDrawer
        show={sideDrawerOpen}
        drawerClickHandler={drawerToggleClickHandler}
      />
      {sideDrawerOpen && <BackDrop click={backDropClickHandler} />}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
