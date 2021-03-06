import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Nav, Footer, DropDown } from "@components/common";
import {
  Hero,
  Featured,
  TopCollection,
  TopCategories,
  Info,
  Trending,
} from "@components/section";
const Home: NextPage = () => {
  return (
    <div className="bg-slate-900">
      <Head>
        <title>NFTSpace Best NFT marketplace</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className=" overflow-hidden">
        <DropDown />
        <Hero />
        <Featured />
        <TopCollection />
        <Trending />
        <Info />
        <TopCategories />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
