import React from "react";
import s from "./FilterModal.module.css";
import Header from "./Header";
import FilterDropDown from "./FilterDropDown";
import StatusContent from "./StatusContent";
import cn from "classnames";
import { useUI } from "@libs/hooks";
function FilterModal() {
  const { isFilterOpen, closeFilterModal } = useUI();
  const mainClass = cn(s.main, {
    [s.open]: isFilterOpen,
    [s.closed]: !isFilterOpen,
  });
  return (
    <div className={mainClass}>
      <aside>
        <Header onDone={closeFilterModal} />
        <FilterDropDown title="Status">
          <StatusContent />
        </FilterDropDown>
      </aside>
    </div>
  );
}

export default FilterModal;
