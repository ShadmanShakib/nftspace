import React from "react";
import { CategoryCard } from "@components/ui/Cards";
import s from "./TopCategories.module.css";
function TopCategories() {
  return (
    <div className={s.root}>
      <CategoryCard name="Collections" />
    </div>
  );
}

export default TopCategories;
