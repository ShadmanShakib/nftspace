import React from "react";
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
    </div>
  );
}

export default Footer;
