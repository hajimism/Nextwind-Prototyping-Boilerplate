import Head from "next/head";

import { AboutPageView } from "./View";

import type { NextPage } from "next";

export const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>about</title>
        <meta
          name="description"
          content="Write page description here."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AboutPageView />
    </>
  );
};