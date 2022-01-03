import React from "react";
import { Layout } from "@components/common";
import { ItemHeader } from "@components/section";
import { ItemCard, BuyCard } from "@components/ui/Cards";
function CryptoItem() {
  return (
    <div className="bg-primary-dark text-white">
      <Layout>
        <ItemHeader name="#4494" creator="Bored Ape Yacht Club" />
        <ItemCard />
        <BuyCard />
      </Layout>
    </div>
  );
}

export default CryptoItem;
