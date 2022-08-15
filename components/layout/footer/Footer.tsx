import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../../styles/Footer.module.scss";
const Footer: React.FC = () => {
  const location = useRouter();

  return (
    <div
      className={styles.footer_container}
      style={
        location.pathname === "/"
          ? { position: "fixed", backgroundColor: "transparent" }
          : { position: "relative" }
      }
    >
      <div className={styles.copy_right}>
        <span>
          Copyright 2021 Ali Zoie | All Rights Reserved |
          <Link className={styles.footer_links} href={"/"}>
            Terms of Usea
          </Link>
          <Link className={styles.footer_links} href={"/"}>
            Privacy Policy
          </Link>
        </span>
      </div>
      <div className={styles.spacer}></div>
      <div className={styles.social_media}>
        <a
          className={styles.footer_links}
          href={"https://Twitter.com/alizoie"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={"/socialIcons/twitter.svg"}
            alt="Twitter"
            className={styles.social_icons}
          />
        </a>
        <a
          className={styles.footer_links}
          href={"https://Instagram.com/mazoie"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={"/socialIcons/instagram.svg"}
            alt="Instagram"
            className={styles.social_icons}
          />
        </a>
        <a
          className={styles.footer_links}
          href={"https://m.youtube.com/channel/UCvTvggm7hfqMp_j05OfBNpQ"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={"/socialIcons/youtube.svg"}
            className={styles.social_icons}
            alt="YouTube"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
