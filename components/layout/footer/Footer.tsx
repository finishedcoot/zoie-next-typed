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
        <span>Copyright 2022 Ali Zoie |</span>
        <span>
          <Link className={styles.footer_links} href={"/"}>
            Terms of Use
          </Link>
        </span>
        <span>
          <Link className={styles.footer_links} href={"/"}>
            Privacy Policy
          </Link>
        </span>
      </div>
      <div className={styles.spacer}></div>
      <div className={styles.social_media}>
        <a
          className={styles.social_links}
          href={"https://Twitter.com/alizoie"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.social_icons}>
            <Image
              src={"/static/media/socialIcons/twitter.svg"}
              alt="Ali Zoie Twitter"
              layout="fill"
            />
          </div>
        </a>
        <a
          className={styles.social_links}
          href={"https://Instagram.com/mazoie"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.social_icons}>
            <Image
              src={"/static/media/socialIcons/instagram.svg"}
              alt="Ali Zoie Instagram"
              layout="fill"
            />
          </div>
        </a>
        <a
          className={styles.social_links}
          href={"https://m.youtube.com/channel/UCvTvggm7hfqMp_j05OfBNpQ"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.social_icons}>
            <Image
              src={"/static/media/socialIcons/youtube.svg"}
              alt="Ali Zoie YouTube"
              layout="fill"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
