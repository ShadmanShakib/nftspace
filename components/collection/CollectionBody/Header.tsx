import React from "react";
import s from "./CollectionBody.module.css";
import { AiOutlineAppstore, AiOutlineRise } from "react-icons/ai";
export default function Header() {
  return (
    <div className={s.menu}>
      <div className={s.menuitem}>
        <AiOutlineAppstore className="mr-2" size={20} />
        <h1>Items</h1>
      </div>
      <div className={s.menuitem}>
        <AiOutlineRise className="mr-2" size={20} />
        <h1> Activity</h1>
      </div>
    </div>
  );
}
