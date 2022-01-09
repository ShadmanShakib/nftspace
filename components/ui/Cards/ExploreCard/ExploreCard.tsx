/* eslint-disable @next/next/no-img-element */
import React from "react";
import s from "./ExploreCard.module.css";
interface Props {
  title?: string;
  description?: string;
  image?: string;
  logo?: string;
  creator?: string;
}
function ExploreCard(props: Props) {
  const { title, description, image, logo, creator } = props;
  return (
    <main className={s.main}>
      <div className="relative w-full">
        <div className="h-52">
          <img className="w-full h-full rounded-t-md " src={image} alt="name" />
        </div>
        <img className={s.logo} src={logo} alt="logo" />
      </div>
      <div className={s.footer}>
        <h1 className="font-sembold text-xl">{title}</h1>
        <h3>
          by <span className="text-blue-600 font-semibold">{creator}</span>
        </h3>
        <p className={s.description}>{description}</p>
      </div>
    </main>
  );
}

export default ExploreCard;
