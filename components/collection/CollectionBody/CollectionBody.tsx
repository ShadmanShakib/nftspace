import React from "react";
import s from "./CollectionBody.module.css";
import { SearchBox } from "@components/ui/Inputs";
import Header from "./Header";
import { AiFillAppstore } from "react-icons/ai";
import { GrStatusInfoSmall } from "react-icons/gr";
import { CollectionCard } from "@components/ui/Cards";
function CollectionBody() {
  return (
    <div className={s.main}>
      <Header />
      <div className={s.search}>
        <SearchBox />
      </div>
      <div className="px-3">
        <div className="w-full flex  my-3">
          <select className="flex-1 mr-2 focus:outline p-3 rounded-md  bg-gray-700 text-white border-0">
            <option value="single item"> Single Items</option>
            <option value="Bundles">Bundles</option>
          </select>

          <button className={s.btn_left}>
            <GrStatusInfoSmall color="white" size={16} />
          </button>
          <button className={s.btn_right}>
            <AiFillAppstore color="white" size={24} />
          </button>
        </div>
        <select className=" w-full focus:outline-none p-3 rounded-md  bg-gray-700 text-white border-0">
          <option value="Price: Low to High">Price: Low to High</option>
          <option value="Bundles">Bundles</option>
        </select>
      </div>
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
    </div>
  );
}

export default CollectionBody;
