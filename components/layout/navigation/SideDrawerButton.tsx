import React from "react";
import styles from "../../../styles/DrawerToggleButton.module.scss";

const DrawerToggleButton: React.FC<{ show: boolean; click: () => void }> = ({
  show = false,
  click,
}) => {
  let burgerAnimation;

  if (show) {
    burgerAnimation = `${styles.open}`;
  } else {
    burgerAnimation = "";
  }

  return (
    <button
      className={`${styles.toggle_button} ${burgerAnimation}`}
      onClick={click}
    >
      <div className={styles.toggle_button_line}></div>
    </button>
  );
};

export default DrawerToggleButton;
