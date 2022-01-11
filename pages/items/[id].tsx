import React from "react";
import { Layout } from "@components/common";
import { ItemHeader } from "@components/section";
import { ItemCard, BuyCard } from "@components/ui/Cards";
import { ExpandBtn } from "@components/ui/Button";
import { BiStats } from "react-icons/bi";
import { MdLocalOffer, MdTimeline } from "react-icons/md";
function CryptoItem() {
  return (
    <div className="bg-primary-dark text-white">
      <Layout>
        <main className="flex flex-col max-w-screen-xl mx-auto w-full pb-10 ">
          <div className="lg:flex justify-center mx-5 ">
            <div className=" flex-grow lg:max-w-[43%]">
              <ItemCard />
            </div>
            <div className="lg:flex flex-col items-center lg:w-full lg:mx-6">
              <ItemHeader name="#4494" creator="Bored Ape Yacht Club" />
              <BuyCard />
              <div className="w-full">
                {/* Price History */}
                <ExpandBtn title="Price History" icon={<BiStats size={20} />}>
                  <div className="bg-white p-5">
                    <h1 className="font-semibold text-lg">Description</h1>
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reprehenderit, quisquam.
                    </p>
                  </div>
                </ExpandBtn>
                {/* Listing */}
                <ExpandBtn title="Listing" icon={<MdLocalOffer size={20} />} />
                {/* More from This Collection */}
                <ExpandBtn
                  title="More from this collection"
                  icon={<MdTimeline size={20} />}
                />
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}

export default CryptoItem;
