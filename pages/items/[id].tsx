import React from "react";
import { Layout } from "@components/common";
import { ItemHeader } from "@components/section";
function CryptoItem() {
  return (
    <div className="bg-primary-dark text-white">
      <Layout>
        <ItemHeader />
        <h1 className="">CryptoItem</h1>
      </Layout>
    </div>
  );
}

export default CryptoItem;
