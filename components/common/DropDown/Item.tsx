import React from "react";
import { RightArrow } from "@components/icons";
interface Props {
  icon?: any;
  title: string;
}

export default function Item(props: Props) {
  return (
    <button className="flex w-full items-center justify-between py-2 ">
      <div className="flex itemx-center">
        <div className="icon">{props.icon}</div>
        <div className="text-gray-300 font-semibold text-lg">{props.title}</div>
      </div>
      <RightArrow className="h-5 w-5 fill-current text-gray-300" />
    </button>
  );
}
