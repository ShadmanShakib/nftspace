import React from "react";
import { CategoryCard } from "@components/ui/Cards";
import s from "./TopCategories.module.css";
function TopCategories() {
  return (
    <div className="">
      <h1 className="font-bold text-white text-2xl text-center mb-6">
        Browse by category
      </h1>
      <div className={s.root}>
        <CategoryCard name="Collections" />
      </div>
    </div>
  );
}

export default TopCategories;
