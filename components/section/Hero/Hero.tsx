import React from "react";
import styles from "./Hero.module.css";
import { LinkButton } from "@components/ui";
function Hero() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>
        Discover, collect, and sell extraodinary NFTs
      </h1>
      <h2 className={styles.subtitle}>
        On the worlds first and largest NFT
        <br /> marketplace
      </h2>
      <div className={styles.buttons}>
        <LinkButton varient="primary">Explore</LinkButton>
        <div className="w-6" />
        <LinkButton varient="secondary">Create</LinkButton>
      </div>
    </div>
  );
}

export default Hero;
