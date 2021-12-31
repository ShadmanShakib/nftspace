import React from "react";
import Card from "./Card";
import s from "./Featured.module.css";

function Featured() {
  return (
    <div className={s.root}>
      <h1 className={s.title}>Featured</h1>

      <div className={s.carousel}>
        <div className={s.carousel_track}>
          <div className={s.carouselCard}>
            <Card />
          </div>
        </div>
        <div className="float-left">
          <div className={s.carouselCard}>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
