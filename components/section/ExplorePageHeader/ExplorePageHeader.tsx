import React from "react";
import s from "./ExplorePageHeader.module.css";
import { EXPLORE_DATA } from "@constants/ExploreData";

function ExplorePageHeader() {
  return (
    <ul className={s.main}>
      {EXPLORE_DATA.map((item, inx) => {
        return (
          <li key={inx}>
            <span className={s.item}>{item}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default ExplorePageHeader;
