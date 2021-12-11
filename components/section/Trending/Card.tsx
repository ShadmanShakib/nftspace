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
      <div className={s.card_imgs}>
        <img className={s.card__image} src={image} alt={title} />
        <div className={s.card_artist}>
          <img
            className={s.card_logo}
            src="https://lh3.googleusercontent.com/0LsJSNxzhiXQ-8TqwrMEJZuLgQnDTEweihqp32L_dXpkywpCIK4o8Fgs9JZDduK1Oj5Ek_xlBqd5lMIJoxSnWRi-GaknxnHINmy2H7Y=s100"
            alt="author"
          />
        </div>
      </div>
      <div className={s.card_info}>
        <div className={s.card_title}>{title}</div>
        <div className={s.card_discription}>{discription}</div>
      </div>
    </div>
  );
}
