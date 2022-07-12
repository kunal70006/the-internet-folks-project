import type { NextPage } from "next";
import Head from "next/head";
import BasicLayout from "../layout/Basic";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TIF Project</title>
        <meta name="description" content="TIF Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BasicLayout>
        <h1>hello</h1>
      </BasicLayout>
    </>
  );
};

export default Home;
