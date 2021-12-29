import React from "react";
import s from "./CollectionHeader.module.css";
import {
  BsTwitter,
  BsDiscord,
  BsFillFlagFill,
  BsWindowSidebar,
} from "react-icons/bs";
export default function DropDown() {
  return (
    <div className={s.dropdown}>
      <div className={s.items}>
        <BsWindowSidebar className="mx-3" size={20} />
        <h1>Website</h1>
      </div>
      <div className={s.items}>
        <BsDiscord className="mx-3" size={20} />
        <h1>Discord</h1>
      </div>
      <div className={s.items}>
        <BsTwitter className="mx-3" size={20} />
        <h1>Twitter</h1>
      </div>
      <div className={s.items}>
        <BsFillFlagFill className="mx-3" size={20} />
        <h1>Report</h1>
      </div>
    </div>
  );
}
