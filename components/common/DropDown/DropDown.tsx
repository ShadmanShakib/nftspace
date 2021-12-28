import React from "react";
import s from "./DropDown.module.css";
import { SearchIcon, ExploreIcon } from "@components/icons";
import { useUI } from "libs/hooks";
import cn from "classnames";
import Item from "./Item";
function DropDown() {
  const { isOpen } = useUI();
  const rootClass = cn(s.root, {
    [s.open]: isOpen,
    [s.closed]: !isOpen,
  });
  return (
    <div className={rootClass}>
      <div className={s.searchbox}>
        <SearchIcon className={s.icon} />
        <input type="text" placeholder="Search" />
      </div>
      <div className={s.items}>
        <Item title="Explore" />
        <Item title="Stats" />
        <Item title="Resources" />
      </div>
      <button className={s.btn}>Connect wallet</button>
    </div>
  );
}

export default DropDown;
