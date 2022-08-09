import { useEffect, useState } from "react";
import styles from "../../styles/WelcomeScreen.module.css";

const WelcomeScreen = () => {
  // Removing welcome screen
  const [removeWelcomeScreen, setRemoveWelcomeScreen] = useState(false);

  useEffect(() => {
    const welcomingClass = setTimeout(() => {
      setRemoveWelcomeScreen(true);
    }, 3500);
    return () => clearTimeout(welcomingClass);
  }, [removeWelcomeScreen]);

  return (
    <div>
      <div
        className={`${styles.container} ${
          removeWelcomeScreen && styles.remove
        }`}
      ></div>
      <div className={`${styles.text} ${removeWelcomeScreen && styles.remove}`}>
        <h3>KINDLY USE THE DESKTOP VERSION FOR A BETTER EXPERIENCE</h3>
      </div>
    </div>
  );
};

export default WelcomeScreen;
