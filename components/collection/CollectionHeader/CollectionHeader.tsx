import React from "react";
import s from "./CollectionHeader.module.css";
import Image from "next/image";
import { FiMoreVertical } from "react-icons/fi";
import DropDown from "./DropDown";
import { VarifiedIcon } from "@components/icons";
import { Ethereum } from "@components/icons";
function CollectionHeader() {
  const [showDropDown, setShowDropDown] = React.useState(false);
  return (
    <div className={s.main}>
      {/*eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="Banner Image"
        className={s.banner}
        src="https://lh3.googleusercontent.com/48oVuDyfe_xhs24BC2TTVcaYCX7rrU5mpuQLyTgRDbKHj2PtzKZsQ5qC3xTH4ar34wwAXxEKH8uUDPAGffbg7boeGYqX6op5vBDcbA=h600"
      ></img>
      <div className={s.bottom}>
        <div className={s.logo_container}>
          <Image
            width={120}
            height={120}
            className={s.logo}
            src="/images/cryptopunk_logo.png"
            alt="logo"
          />
        </div>
        <div className={s.fresnel}>
          <div className="" />
          <div className="relative">
            <button
              onClick={() => setShowDropDown(!showDropDown)}
              className="border-2 p-2 rounded-md"
            >
              <FiMoreVertical size={20} />
            </button>
            {showDropDown && <DropDown />}
          </div>
        </div>
        <div className="flex items-center">
          <h1 className={s.title}>CryptoPunks</h1>
          <VarifiedIcon className="h-8 w-8 fill-current text-blue-700" />
        </div>
        {/* Stats Box */}
        <div className={s.statsbox}>
          <div className={s.box}>
            <h1> 10.0K </h1>
            <p>items</p>
          </div>
          <div className={s.box}>
            <h1>3.3K</h1>
            <p>owners</p>
          </div>
          <div className={s.box}>
            <h1>---</h1>
            <p>floor price</p>
          </div>
          <div className={s.box}>
            <div className={s.iconbox}>
              <Ethereum className="h-6 w-4" />
              <h1 className="text-center">761.2k</h1>
            </div>

            <p>volume traded</p>
          </div>
        </div>
        <div className=" text-center mt-6 px-6">
          <span>
            CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and
            became one of the inspirations for the ERC-721 standard. They have
            been featured in places like The New York Times, Christie’s of
            London, Art|Basel Miami, and The PBS NewsHour.
          </span>
        </div>
      </div>
    </div>
  );
}

export default CollectionHeader;