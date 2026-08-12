import React from "react";
import styles from "./About.module.scss";
import portrait from "../../assets/cyril-portrait.png";

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <p className={styles.subtitle}>ABOUT THE PODCAST</p>

          <h2 className={styles.title}>
            More Than <span>Conversations</span>
          </h2>

          <p className={styles.description}>
            From Lowest To Highest Podcast exists to remind people that their
            current circumstances do not define their future. Every episode
            shares authentic stories of faith, resilience and transformation,
            proving that with God, purpose and perseverance, a new beginning is
            always possible.
          </p>
        </div>

        <div className={styles.portraitSection}>
          <div className={styles.imageWrapper}>
            <img
              src={portrait}
              alt="Cyril - Host of From Lowest To Highest Podcast"
              className={styles.portrait}
            />
          </div>

          <blockquote className={styles.quote}>
            “Hope is not just a feeling.
            <br />
            It is a decision.”
          </blockquote>
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.card}>
            <span className={styles.cardNumber}>01</span>

            <h3>Our Vision</h3>

            <p>
              To become the voice that reminds people why they should never give
              up. We envision a world where no young person feels forgotten,
              where one inspiring conversation can transform uncertainty into
              confidence and remind people that their dreams remain possible.
              From Nigeria to the world, we exist to be a place of hope, truth
              and lasting encouragement.
            </p>
          </div>

          <div className={styles.card}>
            <span className={styles.cardNumber}>02</span>

            <h3>Our Mission</h3>

            <p>
              From Lowest To Highest Podcast is more than interviews—it is a
              family. Through honest conversations and real-life testimonies, we
              help people rediscover hope, purpose and the courage to move
              forward. Our mission is to inspire action, strengthen faith and
              encourage every listener to believe that their story is still
              being written.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
