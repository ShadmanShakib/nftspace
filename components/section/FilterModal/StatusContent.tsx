import React from "react";
import s from "./FilterModal.module.css";
export default function StatusContent() {
  return (
    <div className="grid grid-cols-2 bg-gray-600">
      <button className={s.statusBtn}>Buy now</button>
      <button className={s.statusBtn}>On Auction</button>
      <button className={s.statusBtn}>New</button>
      <button className={s.statusBtn}>Has offers</button>
    </div>
  );
}
