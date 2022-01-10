import React from "react";
import s from "./ExplorePageHeader.module.css";
import { EXPLORE_DATA } from "@constants/ExploreData";

function ExplorePageHeader() {
  return (
    <main className={s.main}>
      {EXPLORE_DATA.map((item, inx) => {
        return (
          <h1 key={inx}>
            <span className={s.item}>{item}</span>
          </h1>
        );
      })}
    </main>
  );
}

export default ExplorePageHeader;
