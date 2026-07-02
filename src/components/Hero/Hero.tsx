import React from "react";
import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          FROM LOWEST
          <br />
          TO <span>HIGHEST</span>
        </h1>

        <p className={styles.subtitle}>
          Real stories. Real faith. Real transformation.
          <br />
          From Nothing to Something — through the power of God.
        </p>

        <div className={styles.ctaGroup}>
          <a href="#episodes" className={styles.primaryBtn}>
            Watch Latest Episodes
          </a>
          <a href="#submit" className={styles.secondaryBtn}>
            Share Your Testimony
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
