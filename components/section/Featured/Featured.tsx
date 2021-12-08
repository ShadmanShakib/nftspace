import React from "react";
import Card from "./Card";
import s from "./Featured.module.css";

function Featured() {
  return (
    <div className={s.root}>
      <h1 className={s.title}>Featured</h1>
      <Card />
    </div>
  );
}

export default Featured;
