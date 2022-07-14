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
  const [isLoading, setIsLoading] = useState(false);
  const handleUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const testData = [
    {
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      shortUrl: "https://hideuri.com/822D77",
    },
    {
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      shortUrl: "https://hideuri.com/822D77",
    },
    {
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      shortUrl: "https://hideuri.com/822D77",
    },
    {
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      shortUrl: "https://hideuri.com/822D77",
    },
  ];

  const shortenURL = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}?url=${userInput}`
      );
      const data = await res.json();
      if (res.ok) {
        setError("No Input Provided");
        setShortenedURL([
          ...shortenedURL,
          { url: userInput, shortUrl: data.result.full_short_link },
        ]);
      } else {
        setError(data.error);
        // setError("Something went wrong :/");
      }
      setIsLoading(false);
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
          isLoading={isLoading}
        />

        <GrayBgContainer>
          {/* {shortenedURL.length > 0
            ? shortenedURL.map((url: ShortenedURL, index: number) => (
                <Links link={url} key={index} />
              ))
            : null} */}
          {testData.length > 0
            ? testData.map((url: ShortenedURL, index: number) => (
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
