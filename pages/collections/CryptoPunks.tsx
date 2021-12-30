import React from "react";
import s from "../../styles/CollectionName.module.css";
import { Nav, Footer, DropDown } from "@components/common";
import { CollectionHeader, CollecitonBody } from "@components/collection";
import { FilterButton } from "@components/ui/Button";
function CryptoPunks() {
  return (
    <div className={s.main}>
      <Nav />
      <DropDown />
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
