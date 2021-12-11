import React from "react";
import s from "./Categories.module.css";
import Card from "./Card";
function Trending() {
  return (
    <div className={s.root}>
      <h1 className={s.title}>Treding in all Categories</h1>
      <Card
        title="Path by Darien Brito"
        discription="Paths by Darien Brito - Art blocks palyground"
        image="https://lh3.googleusercontent.com/o_J0Y2buN6O-k_BIEbGSuFBE9lf2UV8SkXwJpZzXX4CnhnCXpOqay--ZbbvyWc8CH7ok5P_xL4gUABwkOkU0pjC42dVmu9fZZ18Row=h200"
      />
    </div>
  );
}

export default Trending;
