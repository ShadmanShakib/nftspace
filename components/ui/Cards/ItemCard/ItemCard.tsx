/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FiHeart } from "react-icons/fi";
import { BsEyeFill } from "react-icons/bs";
import s from "./ItemCard.module.css";
function ItemCard() {
  return (
    <article className={s.main}>
      <div className={s.header}>
        <FiHeart className="text-gray-400 stroke-current" size={20} />
        <p className={s.likeCount}>115</p>
      </div>
      <img
        src="https://lh3.googleusercontent.com/ebEjooBuQozR9PBEmGBNdSN7sMkkj3KB17nEVexLg5_yyNg-cJhKB22jYIj5CwdTitU3lFldI1C-8mDTNnRw3TUL5UAMc9zaUkgIsw=w600"
        alt="item-image"
      />
      <div className={s.footer}>
        <h3>
          Owned by <span>samyau</span>
        </h3>
        <div className="flex items-center ">
          <BsEyeFill size={20} className="fill-current text-gray-400" />
          <p className={s.viewCount}>7.2k views</p>
        </div>
      </div>
    </article>
  );
}

export default ItemCard;
