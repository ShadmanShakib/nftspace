import React from "react";
import s from "./CollectionBody.module.css";
import { SearchBox } from "@components/ui/Inputs";
import Header from "./Header";
import { AiFillAppstore } from "react-icons/ai";
import { GrStatusInfoSmall } from "react-icons/gr";
import { CollectionCard } from "@components/ui/Cards";
function CollectionBody() {
  return (
    <main className={s.main}>
      <Header />
      {/* Buttons */}
      <div className="flex  flex-col xl:flex-row flex-nowrap justify-end   xl:items-center w-full">
        {/* Search Box */}

        <div className="flex-1">
          <SearchBox />
        </div>

        <select className="flex-1 my-3 xl:my-0 xl:mx-3 focus:outline p-3 rounded-md  bg-gray-700 text-white border-0">
          <option value="single item"> Single Items</option>
          <option value="Bundles">Bundles</option>
        </select>

        <select className=" flex-1  focus:outline-none p-3 rounded-md  bg-gray-700 text-white border-0">
          <option value="Price: Low to High">Price: Low to High</option>
          <option value="Bundles">Bundles</option>
        </select>

        <div className="flex  xl:ml-2">
          <button className={s.btn_left}>
            <GrStatusInfoSmall color="white" size={16} />
          </button>
          <button className={s.btn_right}>
            <AiFillAppstore color="white" size={24} />
          </button>
        </div>
      </div>
      {/* Cards */}
      <div className={s.cardBlock}>
        <CollectionCard
          name="CryptoPuncks #4569"
          creator="CryptoPuncks"
          img="https://lh3.googleusercontent.com/Ip6otmNTPvgjStLuni0Hv92wYndlt6mdkYYJs224_JzUzaTn-h-CH8FtMEFNSavHrD1LJnZl76-gq16nS0vV4zvT7keEZwbrTzjF=w415"
        />
        <CollectionCard
          name="CryptoPuncks #4569"
          creator="CryptoPuncks"
          img="https://lh3.googleusercontent.com/Ip6otmNTPvgjStLuni0Hv92wYndlt6mdkYYJs224_JzUzaTn-h-CH8FtMEFNSavHrD1LJnZl76-gq16nS0vV4zvT7keEZwbrTzjF=w415"
        />
        <CollectionCard
          name="CryptoPuncks #4569"
          creator="CryptoPuncks"
          img="https://lh3.googleusercontent.com/Ip6otmNTPvgjStLuni0Hv92wYndlt6mdkYYJs224_JzUzaTn-h-CH8FtMEFNSavHrD1LJnZl76-gq16nS0vV4zvT7keEZwbrTzjF=w415"
        />
        <CollectionCard
          name="CryptoPuncks #4569"
          creator="CryptoPuncks"
          img="https://lh3.googleusercontent.com/Ip6otmNTPvgjStLuni0Hv92wYndlt6mdkYYJs224_JzUzaTn-h-CH8FtMEFNSavHrD1LJnZl76-gq16nS0vV4zvT7keEZwbrTzjF=w415"
        />
      </div>
    </main>
  );
}

export default CollectionBody;
