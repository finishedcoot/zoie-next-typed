import React from "react";
import Link from "next/link";
import styles from "../../../styles/SideDrawer.module.scss";
import SideDrawerButton from "./SideDrawerButton";

const SideDrawer: React.FC<{
  show: boolean;
  drawerClickHandler: () => void;
}> = (props) => {
  let drawerClasses = [styles.side_drawer];
  if (props.show) {
    drawerClasses = [styles.side_drawer, styles.open];
  }

  return (
    <div>
      <div className={styles.toolbar__toggle_button}>
        <SideDrawerButton show={props.show} click={props.drawerClickHandler} />
      </div>
      <nav className={drawerClasses.join(" ")}>
        <ul className={styles.side_drawer_link_list}>
          <li>
            <Link className={styles.side_drawer_links} href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={styles.side_drawer_links} href="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className={styles.side_drawer_links} href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideDrawer;
