import React from "react";
import s from "../../styles/CollectionName.module.css";
import { Nav, DropDown } from "@components/common";
import { CollectionHeader, CollecitonBody } from "@components/collection";
import { FilterButton } from "@components/ui/Button";
import { FilterModal } from "@components/section";
import { useUI } from "@libs/hooks";
import cn from "classnames";
function CryptoPunks() {
  const { openFilterModal } = useUI();

  return (
    <div className={s.main}>
      <Nav />
      <DropDown />
      <FilterModal />
      {/* Body */}
      <div className="">
        <CollectionHeader />
        <CollecitonBody />
      </div>

      {/* Filter */}
      <FilterButton onClick={openFilterModal} />
    </div>
  );
}

export default CryptoPunks;
