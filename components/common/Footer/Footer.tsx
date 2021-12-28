import React from "react";
import {
  Reddit,
  Twitter,
  Instagram,
  Discord,
  YouTube,
} from "@components/icons";
import s from "./Footer.module.css";
function Footer() {
  return (
    <div className={s.root}>
      <h1 className={s.title}>Stay conected</h1>
      <p>
        Join our weekly newslatter to learn every about NFT and future of web
      </p>
      <div className={s.inputGroup}>
        <input
          className={s.inputField}
          type="text"
          placeholder="Enter your email"
        />
        <button className={s.btn}>Subscribe</button>
      </div>
      <div className={s.social}>
        <Reddit className={s.icon} />
        <Twitter className={s.icon} />
        <Instagram className={s.icon} />
        <Discord className={s.icon} />
        <YouTube className={s.icon} />
      </div>
      <div className=" h-0.5 w-full bg-black" />
      <div className="">
        <div>
          <div>Marketplace</div>
          <div>All</div>
          <div>NFTs</div>
          <div> New</div>
          <div> Art</div>
          <div>Collectibles</div>
          <div> Domain</div>
          <div>Names</div>
        </div>
        <div className="">
          <div className=""> My Account </div>
          <div className="">Profile</div>
          <div className="">Favorites</div>
          <div className="">My Collections</div>
          <div className="">Settings</div>
        </div>
        <div className="">
          <div className=""> Stats</div>
          <div className="">Rankings</div>
          <div className="">Activity</div>
        </div>
        <div className="">Resources</div>
      </div>
    </div>
  );
}

export default Footer;
