/* eslint-disable @next/next/no-img-element */
import React from "react";
import s from "./Categories.module.css";
interface Props {
  title: string;
  discription: string;
  image: string;
}
export default function Card(props: Props) {
  const { title, discription, image } = props;
  return (
    <div className={s.card}>
      <img src={image} alt={title} />
      <div className={s.card_title}>{title}</div>
      <div className={s.card_discription}>{discription}</div>
      <div className={s.card_image}></div>
    </div>
  );
}
