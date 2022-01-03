import React from "react";
import s from "./BuyCard.module.css";
import { BsClock } from "react-icons/bs";
import { Ethereum } from "@components/icons";
import { Button } from "@components/ui/Button";

const BuyCard: React.FC = () => {
  return (
    <div className={s.main}>
      <div className={s.header}>
        <BsClock size={20} className="text-gray-400 stroke-current" />
        sale ends July 1, 2022 at 11:17 pm (GMT)
      </div>
      <div className="">
        <h1>Current price</h1>
        <div className="">
          <Ethereum className="h-10 w-6" />
          <p>74.99</p>
          <span>($289,001.36)</span>
        </div>
        <Button title="Buy now" variant="primary" />
      </div>
    </div>
  );
};

export default BuyCard;
