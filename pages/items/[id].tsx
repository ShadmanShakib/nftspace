import React from "react";
import { Layout } from "@components/common";
import { ItemHeader } from "@components/section";
import { ItemCard, BuyCard } from "@components/ui/Cards";
import { ExpandBtn } from "@components/ui/Button";
import { BiStats } from "react-icons/bi";
function CryptoItem() {
  return (
    <div className="bg-primary-dark text-white">
      <Layout>
        <ItemHeader name="#4494" creator="Bored Ape Yacht Club" />
        <ItemCard />
        <BuyCard />
        <ExpandBtn title="Price History" icon={<BiStats size={20} />}>
          <div className="bg-white p-5">
            <h1 className="font-semibold text-lg">Description</h1>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, quisquam.
            </p>
          </div>
        </ExpandBtn>
      </Layout>
    </div>
  );
}

export default CryptoItem;
