import React from "react";
import s from "./FilterModal.module.css";
import Header from "./Header";
import FilterDropDown from "./FilterDropDown";
function FilterModal() {
  return (
    <div className={s.main}>
      <aside>
        <Header />
        <FilterDropDown title="Status">
          <Header />
        </FilterDropDown>
      </aside>
    </div>
  );
}

export default FilterModal;
