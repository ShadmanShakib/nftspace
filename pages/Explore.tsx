import React from "react";
import type { NextPage } from "next";
import s from "../styles/Explore.module.css";
import { Nav, Footer, DropDown } from "@components/common";
import { ExplorePageHeader } from "@components/section";
import { ExploreCard } from "@components/ui";
import { ExploreList } from "@constants/index";
const Explore: NextPage = () => {
  return (
    <div className="bg-primary-dark overflow-hidden">
      <Nav />
      <DropDown />
      <main className={s.main}>
        <h1 className={s.title}>Explore Collections</h1>
        <ExplorePageHeader />
        <div className="py-10 px-2 grid grid-cols-1 gap-6 place-items-center  xl:grid-cols-3">
          {ExploreList.map((item, index) => (
            <ExploreCard key={index} {...item} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Explore;
