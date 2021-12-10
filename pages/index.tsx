import type { NextPage } from "next";
import Head from "next/head";
import { Nav } from "@components/common";
import {
  Hero,
  Featured,
  TopCollection,
  TopCategories,
  Info,
  Categories,
} from "@components/section";
const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Hero />
      <Featured />
      <TopCollection />
      <TopCategories />
      <Categories />
      <Info />
    </div>
  );
};

export default Home;
