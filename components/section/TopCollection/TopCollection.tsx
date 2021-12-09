import React from "react";
import TopList from "@constants/TopList";
import s from "./TopCollection.module.css";
import Card from "./Card";
export default function TopCollection() {
  return (
    <div className={s.root}>
      <h1 className={s.title}>Top Collection</h1>
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
      <div className={s.buttonbox}>
        <button className={s.button}>Go to ranking</button>
      </div>
    </div>
  );
}
