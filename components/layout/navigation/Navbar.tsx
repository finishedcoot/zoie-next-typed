import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../../styles/Navbar.module.scss";
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
          >
            <img
              className={styles.homeLogo}
              src="/logo-white.svg"
              alt="zoie-logo"
            />
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
