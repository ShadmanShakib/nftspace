import React from "react";
import { Nav, Footer, DropDown } from "@components/common";
import { CollectionHeader } from "@components/collection";
function CryptoPunks() {
  return (
    <div className="">
      <Nav />
      <DropDown />
      {/* Body */}
      <div className="">
        <CollectionHeader />
      </div>
      <Footer />
    </div>
  );
}

export default CryptoPunks;
