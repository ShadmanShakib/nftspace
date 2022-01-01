import React from "react";
import s from "./ItemHeader.module.css";
import { VarifiedIcon } from "@components/icons";
function ItemHeader() {
  return (
    <div className={s.main}>
      <div className="flex items-center">
        <h1>Cryptopunks</h1>
        <VarifiedIcon className={s.icon} />
      </div>
      <div className={s.titleSection}>
        <h1 className={s.title}>CryptoPunk #5670</h1>
      </div>
    </div>
  );
}

export default ItemHeader;
