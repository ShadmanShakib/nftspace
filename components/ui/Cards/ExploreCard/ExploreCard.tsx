/* eslint-disable @next/next/no-img-element */
import React from "react";

function ExploreCard() {
  return (
    <div className="w-full rounded-md">
      <div className="h-52">
        <img
          className="w-full h-full rounded-md "
          src="https://lh3.googleusercontent.com/REykorDOFr9XZynNbKiAsVX5RpjdJUaws5VygZpBH0V9giWYKZGolHZJoVxY2tfU6K3pDC88pjYxSLRefQ-_tRxO1GfiF3ZOuQbr=h200"
          alt="name"
        />
      </div>
      <img
        className="h-12 w-12 rounded-full"
        src="https://lh3.googleusercontent.com/0LsJSNxzhiXQ-8TqwrMEJZuLgQnDTEweihqp32L_dXpkywpCIK4o8Fgs9JZDduK1Oj5Ek_xlBqd5lMIJoxSnWRi-GaknxnHINmy2H7Y=s100"
        alt="logo"
      />
    </div>
  );
}

export default ExploreCard;
