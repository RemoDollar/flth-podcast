import React from "react";
import styles from "./Episodes.module.scss";

const Episodes: React.FC = () => {
  return (
    <section id="episodes" className={styles.episodes}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Latest Episodes</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.thumbnail}></div>
            <h3>Episode 1: From Prison to Pulpit</h3>
            <p>A former inmate shares how God turned his life around.</p>
            <a href="#" className={styles.watchBtn}>
              Watch Now
            </a>
          </div>

          <div className={styles.card}>
            <div className={styles.thumbnail}></div>
            <h3>Episode 2: The Business Miracle</h3>
            <p>How a small shop became a thriving enterprise through faith.</p>
            <a href="#" className={styles.watchBtn}>
              Watch Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Episodes; // ← Make sure this line is at the bottom
