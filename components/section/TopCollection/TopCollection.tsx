import React from "react";
import TopList from "@constants/TopList";
import Card from "./Card";
export default function TopCollection() {
  return (
    <div>
      <h1>Top Collection</h1>
      {TopList.map((item, index) => {
        return (
          <Card
            key={index}
            title={item.name}
            description={item.description}
            image={item.image}
          />
        );
      })}
    </div>
  );
}
