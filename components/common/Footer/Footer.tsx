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
      {/* Top section of Footer */}
      <div className={s.top_section}>
        <div className={s.top_leftside}>
          <h1 className={s.title}>Stay conected</h1>
          <p>
            Join our weekly newslatter to learn every about NFT and future of
            web
          </p>
          <div className={s.inputGroup}>
            <input
              className={s.inputField}
              type="text"
              placeholder="Enter your email"
            />
            <button className={s.btn}>Subscribe</button>
          </div>
        </div>
        <div className="">
          <h1 className="text-center font-semibold text-xl mt-6">
            Get in Touch
          </h1>
          <div className={s.social}>
            <a href="https://www.youtube.com/channel/UCzK0N1yGkd0IH95x3zQ1FcQ">
              <YouTube className={s.icon} />
            </a>
            <Reddit className={s.icon} />
            <a href="https://www.twitter.com/shadmanshakib_">
              <Twitter className={s.icon} />
            </a>
            <Instagram className={s.icon} />
            <Discord className={s.icon} />
          </div>
        </div>
      </div>
      {/* Divider Line */}
      <div className={s.line} />
      {/* bottom content */}

      <div className={s.bottom_section}>
        {/* About NFTSpace */}
        <div className={s.nftSpace}>
          <h1 className="font-semibold text-xl ">NFTSpace</h1>
          <h1 className=" text-left mt-2 text-gray-400">
            NFTSpace is a decentralized platform for NFTs. We are a community of
            NFT enthusiasts and developers. We are building a new way of
            interacting with NFTs.
          </h1>
        </div>

        <div className={s.grid_section}>
          <h1 className={s.gridTitle}>Marketplace</h1>
          <div>All</div>
          <div>NFTs</div>
          <div> New</div>
          <div> Art</div>
          <div>Collectibles</div>
          <div> Domain</div>
          <div>Names</div>
        </div>
        <div className={s.grid_section}>
          <h1 className={s.gridTitle}> My Account </h1>
          <div className="">Profile</div>
          <div className="">Favorites</div>
          <div className="">My Collections</div>
          <div className="">Settings</div>
        </div>
        <div className={s.grid_section}>
          <h1 className={s.gridTitle}> Stats</h1>
          <div className="">Rankings</div>
          <div className="">Activity</div>
        </div>
        <div className={s.grid_section}>
          <h1 className={s.gridTitle}>Resources</h1>
          <div className="">FAQ</div>
          <div className="">Terms</div>
          <div className="">Privacy</div>
          <div className="">Contact</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
