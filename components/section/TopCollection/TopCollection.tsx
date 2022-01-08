import React from "react";
import TopList from "@constants/TopList";
import s from "./TopCollection.module.css";
import Card from "./Card";
import { LinkButton } from "@components/ui";
export default function TopCollection() {
  return (
    <div className={s.root}>
      <h1 className={s.title}>
        Top Collection over
        <span className="text-blue-600"> last 7 days</span>
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-6">
        {TopList.map((item, index) => {
          return (
            <Card
              id={item.id}
              image={item.image}
              key={index}
              title={item.name}
              sell={item.sell}
              up={item.up}
            />
          );
        })}
      </div>
      <div className={s.buttonbox}>
        <LinkButton varient="primary" title="Go To Ranking" to="/" />
      </div>
    </div>
  );
}
