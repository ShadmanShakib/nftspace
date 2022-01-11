import React from "react";
import s from "./BuyCard.module.css";
import { BsClock, BsWallet } from "react-icons/bs";
import { Ethereum } from "@components/icons";
import { Button } from "@components/ui/Button";
import { IoWalletSharp } from "react-icons/io5";
import cn from "classnames";
const BuyCard: React.FC = () => {
  const clockIcon = cn(s.icon, s.icon_clock);
  return (
    <div className={s.main}>
      {/* Header Sectoin */}
      <div className={s.header}>
        <BsClock size={20} className={clockIcon} />
        <p className={s.title}>sale ends July 1, 2022 at 11:17 pm (GMT)</p>
      </div>
      {/* Context section */}
      <div className={s.content}>
        <h1 className="text-gray-400">Current price</h1>
        <div className="flex  items-center my-2">
          <Ethereum className="h-6 w-6 mr-4" />
          <p className="text-3xl font-bold mr-2">74.99</p>
          <span className="text-gray-400">($289,001.36)</span>
        </div>
        <div className="flex flex-col">
          <Button
            title="Buy now"
            variant="primary"
            icon={<IoWalletSharp size={20} />}
          />
          <div className="h-2"></div>
          <Button title="Make offer" variant="secondary" />
        </div>
      </div>
    </div>
  );
};

export default BuyCard;
