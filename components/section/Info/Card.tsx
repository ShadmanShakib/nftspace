/* eslint-disable @next/next/no-img-element */
import React from "react";
import s from "./Info.module.css";
interface Props {
  title: string;
  description: string;
  url?: string;
}
export default function Card(props: Props) {
  const { title, description, url } = props;
  return (
    <div className={s.card}>
      <img src={url} alt="" className="" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}
