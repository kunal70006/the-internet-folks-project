import type { NextPage } from "next";
import Head from "next/head";
import { ChangeEvent, useState } from "react";
import { Footer } from "../components/Footer";
import GetStarted from "../components/GetStarted";
import Header from "../components/Header";
import Links from "../components/Links";
import LinkShortner from "../components/LinkShortner";
import Navbar from "../components/Navbar";
import Statistics from "../components/Statistics";
import BasicLayout from "../layout/Basic";
import { CustomBtn, GrayBgContainer } from "../styles/Components";

interface ShortenedURL {
  url: string;
  shortUrl: string;
}

const Home: NextPage = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [shortenedURL, setShortenedURL] = useState<any>([]);
  const [error, setError] = useState<string>("No Input Provided");
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
        setError("No Input Provided");
        setShortenedURL([
          ...shortenedURL,
          { url: userInput, shortUrl: data.result_url },
        ]);
      } else {
        setError(data.error);
        // setError("Something went wrong :/");
      }
      setUserInput("");
    } catch (error: any) {
      setError("Something went wrong :/");
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
          error={error}
        />

        <GrayBgContainer>
          {shortenedURL.length > 0
            ? shortenedURL.map((url: ShortenedURL, index: number) => (
                <Links link={url} key={index} />
              ))
            : null}
          <Statistics />
        </GrayBgContainer>
        <GetStarted />
        <Footer />
      </BasicLayout>
    </>
  );
};

export default Home;
