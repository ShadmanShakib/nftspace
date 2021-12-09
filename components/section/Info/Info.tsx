import React from "react";
import { InfoData } from "@constants/index";
import s from "./Info.module.css";
import Card from "./Card";
function Info() {
  return (
    <div>
      <h1>Creat and sell your own NFTs</h1>
      {InfoData.map((item) => {
        return <Card key={item.id} {...item} />;
      })}
    </div>
  );
}

export default Info;
