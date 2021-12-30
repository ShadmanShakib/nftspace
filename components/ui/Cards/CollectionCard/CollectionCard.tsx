/* eslint-disable @next/next/no-img-element */
import React from "react";
import { VarifiedIcon, Ethereum } from "@components/icons";
import s from "./CollectionCard.module.css";
interface Props {
  name: string;
  creator: string;
  img: string;
}
function CollectionCard(props: Props) {
  const { name, creator, img } = props;
  return (
    <div className={s.main}>
      <img alt="" src={img} />
      <div className={s.bottom}>
        <div className={s.topline}>
          <div className={s.creator}>
            <p>{creator}</p>
            <VarifiedIcon className="h-4 w-4 fill-current text-blue-700" />
          </div>
          <div className={s.price}>
            <h3 className="mr-2 text-gray-300">last: </h3>
            <Ethereum className="h-4 w-4" />
            <h4 className="text-white ">33</h4>
          </div>
        </div>
        <h1>{name}</h1>
      </div>
    </div>
  );
}

export default CollectionCard;
