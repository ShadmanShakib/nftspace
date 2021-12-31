import React from "react";

function PriceContent() {
  return (
    <div className="flex flex-col px-3 bg-neutral-700 py-3   ">
      <select className="flex-1 py-3 rounded-md mb-4 outline-none px-3 text-white bg-neutral-600  ">
        <option value="usd">United States Dollar (USD)</option>
        <option value="eth">Ether (ETH)</option>
      </select>
      <div className="flex items-center ">
        <input
          className="py-2 px-2 mr-3 rounded-md bg-neutral-600 text-white outline-none border-[1px] border-gray-900"
          type="text"
          placeholder="Min"
        />
        <input
          className="py-2 px-2 mr-3 rounded-md bg-neutral-600 text-white outline-none border-[1px] border-gray-900"
          type="text"
          placeholder="Max"
        />
      </div>
      <button className="py-2 px-3 border-gray-300 mt-3 rounded-md w-40 font-bold text-gray-400 border-[1px]">
        Apply
      </button>
    </div>
  );
}

export default PriceContent;
