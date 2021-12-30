import React from "react";
import { MdSearch } from "react-icons/md";
import s from "./SearchBox.module.css";
function SearchBox() {
  return (
    <div className={s.main}>
      <MdSearch color="white" size={25} />
      <input type="text" placeholder="Search" />
    </div>
  );
}

export default SearchBox;
