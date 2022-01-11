import React from "react";
import s from "./CollectionHeader.module.css";
import Image from "next/image";
import { FiMoreVertical } from "react-icons/fi";
import DropDown from "./DropDown";
import { VarifiedIcon } from "@components/icons";
import { Ethereum } from "@components/icons";
function CollectionHeader() {
  const [showDropDown, setShowDropDown] = React.useState(false);
  const logoImg =
    "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s130";
  return (
    <div className={s.main}>
      {/*eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="Banner Image"
        className={s.banner}
        src="https://lh3.googleusercontent.com/i5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8mhs=h600"
      ></img>
      <div className={s.bottom}>
        <div className={s.logo_container}>
          <Image
            width={120}
            height={120}
            className={s.logo}
            src="/images/ape.png"
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
        <div className="flex items-center mt-6">
          <h1 className={s.title}>Bored Ape Yacht Club</h1>
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
              <Ethereum className="h-6 w-4 mr-3" />
              <h1 className="text-center">761.2k</h1>
            </div>

            <p>volume traded</p>
          </div>
        </div>
        <div className=" text-center mt-6 px-6 text-gray-400">
          <span>
            The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape
            NFTs— unique digital collectibles living on the Ethereum blockchain.
            Your Bored Ape doubles as your Yacht Club membership card, and
            grants access to members-only benefits, the first of which is access
            to THE BATHROOM, a collaborative graffiti board. Future areas and
            perks can be unlocked by the community through roadmap activation.
            Visit www.BoredApeYachtClub.com for more details.
          </span>
        </div>
      </div>
    </div>
  );
}

export default CollectionHeader;
