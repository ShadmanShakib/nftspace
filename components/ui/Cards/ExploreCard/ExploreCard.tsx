/* eslint-disable @next/next/no-img-element */
import React from "react";
import s from "./ExploreCard.module.css";
function ExploreCard() {
  return (
    <div className={s.main}>
      <div className="relative w-full">
        <div className="h-52">
          <img
            className="w-full h-full rounded-md "
            src="https://lh3.googleusercontent.com/REykorDOFr9XZynNbKiAsVX5RpjdJUaws5VygZpBH0V9giWYKZGolHZJoVxY2tfU6K3pDC88pjYxSLRefQ-_tRxO1GfiF3ZOuQbr=h200"
            alt="name"
          />
        </div>
        <img
          className={s.logo}
          src="https://lh3.googleusercontent.com/0LsJSNxzhiXQ-8TqwrMEJZuLgQnDTEweihqp32L_dXpkywpCIK4o8Fgs9JZDduK1Oj5Ek_xlBqd5lMIJoxSnWRi-GaknxnHINmy2H7Y=s100"
          alt="logo"
        />
      </div>
      <div className={s.footer}>
        <h1 className="font-sembold text-xl">NameLess</h1>
        <h3>by nameless</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          lobortis ut dolor ac fringilla. Sed id metus mauris.
        </p>
      </div>
    </div>
  );
}

export default ExploreCard;
