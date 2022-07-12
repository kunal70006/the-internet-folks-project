import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/Footer";
import GetStarted from "../components/GetStarted";
import Header from "../components/Header";
import LinkShortner from "../components/LinkShortner";
import Navbar from "../components/Navbar";
import Statistics from "../components/Statistics";
import BasicLayout from "../layout/Basic";
import { GrayBgContainer } from "../styles/Components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TIF Project</title>
        <meta name="description" content="TIF Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BasicLayout>
        <Navbar />
        <Header />
        <LinkShortner />
        <GrayBgContainer>
          <Statistics />
        </GrayBgContainer>
        <GetStarted />
        <Footer />
      </BasicLayout>
    </>
  );
};

export default Home;
