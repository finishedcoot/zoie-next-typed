import React from "react";
import Head from "next/head";
import type { NextPage } from "next";

const custom404: NextPage = () => {
  return (
    <div className="fullHeight">
      <Head>
        <title>ZOIE | 404</title>
        <meta name="description" content="ali zoie - page not found" />
      </Head>
      <div className={"centeredTextContainer"}>
        <h1>404 | SORRY THE PAGE YOU&#39RE LOOKING FOR IS NOT AVAILABLE</h1>
      </div>
    </div>
  );
};

export default custom404;
