import React from "react";
import s from "./Categories.module.css";
import Card from "./Card";
function Categories() {
  return (
    <div>
      <h1 className={s.title}>Treding in all Categories</h1>
      <Card
        title="Path by Darien Brito"
        discription="Paths by Darien Brito - Art blocks palyground"
        image="https://lh3.googleusercontent.com/FP1qj_5rhAhe97BsyeIHkbbFu3qkQBPpq2nklDVZZ8xywpyYUZjxR9si0kkir-q-wWuI9YnClFb_1IjbE8iGfv9lyVNnlzQ26XmQAg=h200"
      />
    </div>
  );
}

export default Categories;
