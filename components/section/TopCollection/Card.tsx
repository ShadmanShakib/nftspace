/* eslint-disable @next/next/no-img-element */
import React from "react";
import s from "./TopCollection.module.css";
interface Props {
  title: string;
  description: string;
  image: string;
}
function Card(props: Props) {
  const { title, description, image } = props;
  return (
    <div className={s.card}>
      <h1>{title}</h1>
      <p>{description}</p>

      <img src={image} alt="" />
    </div>
  );
}

export default Card;
