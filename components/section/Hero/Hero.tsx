import React from "react";
import styles from "./Hero.module.css";
import { LinkButton } from "@components/ui";
function Hero() {
  return (
    <div className={styles.main}>
      <h1>Discover, collect, and sell extraodinary NFTs</h1>
      <span className="">On the worlds first and largest NFT marketplace</span>
      <div>
        <LinkButton varient="primary">Explore</LinkButton>
        <LinkButton varient="secondary">Create</LinkButton>
      </div>
    </div>
  );
}

export default Hero;
