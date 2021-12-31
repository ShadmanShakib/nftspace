import React from "react";
import Image from "next/image";
import s from "./CategoryCard.module.css";
function CategoryCard() {
  return (
    <div className={s.main}>
      <Image
        src="/images/domain-name.png"
        width={200}
        height={200}
        alt="Domain name"
      />
    </div>
  );
}

export default CategoryCard;
