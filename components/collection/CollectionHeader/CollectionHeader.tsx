import React from "react";
import s from "./CollectionHeader.module.css";
import Image from "next/image";
import { FiMoreVertical } from "react-icons/fi";
import DropDown from "./DropDown";
function CollectionHeader() {
  const [showDropDown, setShowDropDown] = React.useState(false);
  return (
    <div>
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
        <h1 className={s.title}>CryptoPunks</h1>
      </div>
    </div>
  );
}

export default CollectionHeader;
