import { useEffect, useState } from "react";
import styles from "./LoadingScreen.module.scss";
import logo from "../../assets/logo.png";

interface LoadingScreenProps {
  finish: boolean;
}

const LoadingScreen = ({ finish }: LoadingScreenProps) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (finish) {
      const timer = setTimeout(() => {
        setHide(true);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [finish]);

  if (hide) return null;

  return (
    <div className={`${styles.loadingScreen} ${finish ? styles.fadeOut : ""}`}>
      <div className={styles.content}>
        <img src={logo} alt="FLTH Podcast Logo" className={styles.logo} />

        <h1 className={styles.title}>
          FROM LOWEST <span>TO HIGHEST</span>
        </h1>

        <p className={styles.subtitle}>
          Real Stories • Real Faith • Real Transformation
        </p>

        <div className={styles.loader}>
          <div className={styles.progress}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
