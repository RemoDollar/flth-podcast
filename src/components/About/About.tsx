import React from "react";
import styles from "./About.module.scss";

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About FLTH Podcast</h2>

        <div className={styles.content}>
          <p>
            <strong>From Lowest To Highest (FLTH)</strong> is a faith-based
            podcast dedicated to sharing powerful, real-life testimonies of
            people who rose from nothing to something through the power of God.
          </p>
          <p>
            We bring on guests — from everyday people to influencers — who have
            experienced divine turnaround in their lives, careers, marriages,
            businesses, and more.
          </p>
          <p>
            Our mission is simple: To inspire hope, strengthen faith, and prove
            that no situation is too low for God to lift you to the highest.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
