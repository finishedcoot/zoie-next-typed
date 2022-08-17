import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../../styles/Footer.module.scss";
import Image from "next/image";
const Footer: React.FC = () => {
  const location = useRouter();

  return (
    <div
      className={styles.footer_container}
      style={
        location.pathname === "/" ? { backgroundColor: "transparent" } : {}
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
          <Image
            src={"/static/media/socialIcons/twitter.svg"}
            alt="Ali Zoie Twitter"
            className={styles.social_icons}
            width={24}
            height={24}
          />
        </a>
        <a
          className={styles.footer_links}
          href={"https://Instagram.com/mazoie"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/static/media/socialIcons/instagram.svg"}
            alt="Ali Zoie Instagram"
            className={styles.social_icons}
            width={24}
            height={24}
          />
        </a>
        <a
          className={styles.footer_links}
          href={"https://m.youtube.com/channel/UCvTvggm7hfqMp_j05OfBNpQ"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/static/media/socialIcons/youtube.svg"}
            className={styles.social_icons}
            alt="Ali Zoie YouTube"
            width={24}
            height={24}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
