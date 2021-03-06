/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Hero.module.css";
import { LinkButton } from "@components/ui";
import { InfoIcon } from "@components/icons";
import Link from "next/link";
function Hero() {
  return (
    <div className={styles.main}>
      <div className={styles.bgOverlay} />
      <div className={styles.content}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>
            Discover, collect, and sell extraodinary NFTs
          </h1>
          <h2 className={styles.subtitle}>
            On the worlds first and largest NFT
            <br /> marketplace
          </h2>
          <div className={styles.buttons}>
            <LinkButton to="/Explore" varient="primary" title="Explore" />

            <div className="w-6" />
            <LinkButton to="/" varient="secondary" title="Create" />
          </div>
        </div>
        <div className={styles.card}>
          <Link href="/items/id" passHref>
            <img
              className={styles.image}
              alt="Feature Image"
              src="https://lh3.googleusercontent.com/LPL9OgXmxE9ZrxeN-cGj01hOQGFM6MoHGE1qEPapFKzVIaaF-erA9JLdoOXBVR2GIYjB4J6xX1BFL27kkyQewkTZtsP3CdPiqX-qow=s0"
            />
          </Link>
          {/* Card footer */}
          <div className={styles.cardfooter}>
            <div className="flex items-center">
              <img
                src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s130"
                alt="author"
              />
              <div className={styles.author}>
                <h1 className={styles.name}>CryptoPunk #4648</h1>
                <h2 className={styles.authorName}>CryptoPunks</h2>
              </div>
            </div>
            <button aria-label="Get featured" type="button">
              <InfoIcon className="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
