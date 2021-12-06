import React from "react";
import styles from "./Nav.module.css";
import { MenuIcon, SearchIcon, CloseIcon, WalletIcon } from "@components/icons";
export default function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="	https://opensea.io/static/images/logos/opensea.svg"
          alt="logo"
        />
        <h1>SpeacNFT</h1>
      </div>
      <div className={styles.searchbox}>
        <SearchIcon className="menuicon" />
        <input
          type="text"
          placeholder="Search items, collection, and accounts"
        />
      </div>
      <div className={styles.menu}>
        <h1 className={styles.menuItem}>Explore</h1>
        <h1 className={styles.menuItem}>Stats</h1>
        <h1 className={styles.menuItem}>Accounts</h1>
        <h1 className={styles.menuItem}>Create</h1>
        <WalletIcon className="h-6  w-6" />
      </div>
      <div onClick={() => setIsOpen(!isOpen)} className={styles.menuicon}>
        {isOpen ? (
          <MenuIcon className="fill-current" />
        ) : (
          <CloseIcon className="fill-current" />
        )}
      </div>
    </div>
  );
}
