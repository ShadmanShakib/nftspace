/* eslint-disable @next/next/no-img-element */
import React from "react";
import s from "./Featured.module.css";
interface Props {
  tabIndex?: number;
}
function Card(props: Props) {
  return (
    <div tabIndex={props.tabIndex} className={s.card}>
      <img
        src="https://storage.opensea.io/static/promocards/rhymeslikedimez-promo.jpeg"
        alt="featured"
      />
      <div className={s.cardfooter}>
        <h3>Rhyme Slikedimez</h3>
        <p>Meet me on cloud nine, an art series</p>
        <button>live</button>
      </div>
    </div>
  );
}

export default Card;
