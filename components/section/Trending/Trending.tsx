import React from "react";
import s from "./Categories.module.css";
import Card from "./Card";
import { TredingList } from "@constants/index";
function Trending() {
  return (
    <div className={s.root}>
      <h1 className={s.title}>
        Treding in <span className="text-blue-600">all Categories</span>
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {TredingList.map((item, index) => {
          return <Card key={index} {...item} />;
        })}
      </div>
    </div>
  );
}

export default Trending;
