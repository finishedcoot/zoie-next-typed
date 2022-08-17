import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../../styles/Navbar.module.scss";
import Image from "next/image";
import Logo from "../../../public/static/media/logo-white.svg";

const Navbar: React.FC<{
  welcome: boolean;
}> = ({ welcome }) => {
  const location = useRouter();

  return (
    <header className={`${styles.toolbar} `}>
      <nav className={styles.toolbar__navigation}>
        <div className={styles.toolbar__logo}>
          <Link
            className={`${welcome ? styles.firstTime : styles.home_link}`}
            href="/"
            scroll={false}
          >
            <a
              style={{
                position: "relative",
                width: "100px",
                height: "70px",
                display: "block",
              }}
            >
              <Image
                layout="fill"
                objectFit="contain"
                className={styles.homeLogo}
                src={Logo}
                alt="zoie-logo"
              />
            </a>
          </Link>
        </div>
        <div className={styles.spacer}> </div>
        <div className={styles.toolbar_navigation_items}>
          <ul className={`${welcome ? styles.firstTime : ""}`}>
            <li>
              <Link
                className={`${styles.nav} ${
                  location.pathname === "/projects" ? styles.active : ""
                }`}
                href="/projects"
                scroll={false}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.nav} ${
                  location.pathname === "/contact" ? styles.active : ""
                }`}
                href="/contact"
                scroll={false}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.nav} ${
                  location.pathname === "/about" ? styles.active : ""
                }`}
                href="/about"
                scroll={false}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
