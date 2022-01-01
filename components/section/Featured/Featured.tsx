import React from "react";
import Card from "./Card";
import s from "./Featured.module.css";

function Featured() {
  return (
    <div className={s.root}>
      <h1 className={s.title}>Featured</h1>
      {/* Carousel */}
      <div className="flex flex-col items-center ">
        <div className="flex overflow-scroll  mt-10 snap-x snap-mandatory   w-[360px] touch-pan-x  ">
          <div className="w-[360px] mr-2 relative snap-start ">
            <Card />
          </div>
          <div className="w-[360px] snap-start">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
