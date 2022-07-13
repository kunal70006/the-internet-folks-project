import type { NextPage } from "next";
import Head from "next/head";
import { ChangeEvent, useState } from "react";
import { Footer } from "../components/Footer";
import GetStarted from "../components/GetStarted";
import Header from "../components/Header";
import LinkShortner from "../components/LinkShortner";
import Navbar from "../components/Navbar";
import Statistics from "../components/Statistics";
import BasicLayout from "../layout/Basic";
import { GrayBgContainer } from "../styles/Components";

const Home: NextPage = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [shortenedURL, setShortenedURL] = useState<string>("");
  const [error, setError] = useState<string>("");
  const handleUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const shortenURL = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
        body: `url=${userInput}`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
      });
      const data = await res.json();
      if (res.ok) {
        setShortenedURL(data.result_url);
      } else {
        setError(data.error);
      }
    } catch (error: any) {
      setError(error);
    }
  };

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
        <LinkShortner
          userInput={userInput}
          handleChange={handleUserInput}
          shortenURL={shortenURL}
        />
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
