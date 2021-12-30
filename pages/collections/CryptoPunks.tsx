import React from "react";
import s from "../../styles/CollectionName.module.css";
import { Nav, DropDown } from "@components/common";
import { CollectionHeader, CollecitonBody } from "@components/collection";
import { FilterButton } from "@components/ui/Button";
import { FilterModal } from "@components/section";
function CryptoPunks() {
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
      <FilterButton />
    </div>
  );
}

export default CryptoPunks;
