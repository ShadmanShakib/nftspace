import React from "react";
import { CategoryCard } from "@components/ui/Cards";
import s from "./TopCategories.module.css";
function BrowseCategory() {
  return (
    <div className={s.root}>
      <h1 className={s.title}>Browse by category</h1>
      <div className={s.cardBox}>
        <CategoryCard name="Art" />
        <CategoryCard name="Collectables" />
        <CategoryCard name="Domain names" />
        <CategoryCard name="Sports" />
        <CategoryCard name="Photography" />
        <CategoryCard name="Music" />
        <CategoryCard name="Treding Cards" />
        <CategoryCard name="Untility " />
        <CategoryCard name="Virtual world" />
      </div>
    </div>
  );
}

export default BrowseCategory;
