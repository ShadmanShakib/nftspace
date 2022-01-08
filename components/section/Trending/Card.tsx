/* eslint-disable @next/next/no-img-element */
import React from "react";
import s from "./Categories.module.css";
interface Props {
  title: string;
  description: string;
  img: string;

  creator: string;
}
export default function Card(props: Props) {
  const { title, description, img } = props;
  return (
    <div className={s.card}>
      <div className={s.card_imgs}>
        <img className={s.card__image} src={img} alt={title} />
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
        <div className={s.card_discription}>{description}</div>
      </div>
    </div>
  );
}
