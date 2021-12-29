import React from "react";
import type { NextPage } from "next";
import { EXPLORE_DATA } from "@constants/ExploreData";
import s from "../styles/Explore.module.css";
import { Nav, Footer, DropDown } from "@components/common";
import { ExplorePageHeader } from "@components/section";
import { ExploreCard } from "@components/ui";
const Explore: NextPage = () => {
  return (
    <div className="">
      <Nav />
      <DropDown />
      <h1 className={s.title}>Explore Collections</h1>
      <ExplorePageHeader />
      <div className="py-10 px-2">
        <ExploreCard />
      </div>
      <Footer />
    </div>
  );
};

export default Explore;