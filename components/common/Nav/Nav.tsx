import React from "react";
import styles from "./Nav.module.css";
import { MenuIcon, SearchIcon, CloseIcon, WalletIcon } from "@components/icons";
import { useUI } from "libs/hooks";
export default function Nav() {
  const { isOpen, toggleMenu } = useUI();
  return (
    <div className="relative h-16">
      <div className={styles.main}>
        <div className={styles.logo}>
          <h1 className="font-bold text-lg text-white">NFTSpace</h1>
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
          <WalletIcon className="h-6  w-6 m-5" />
        </div>
        <div onClick={toggleMenu} className={styles.menuicon}>
          {isOpen ? (
            <CloseIcon className="fill-current " />
          ) : (
            <MenuIcon className="fill-current" />
          )}
        </div>
      </div>
    </div>
  );
}
