import { Link } from "react-scroll";
import styles from "./Hero.module.scss";
import heroBg from "../../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.subtitle}>
            REAL STORIES • REAL FAITH • REAL TRANSFORMATION
          </p>

          <h1 className={styles.title}>
            FROM <br />
            LOWEST <br />
            TO <span>HIGHEST</span>
          </h1>

          <p className={styles.description}>
            Your lowest point sometimes can be your greatest foundation.
          </p>

          <div className={styles.buttons}>
            <Link
              to="episodes"
              smooth={true}
              duration={700}
              offset={-80}
              className={styles.primary}
            >
              Watch Latest Episodes
            </Link>

            <Link
              to="submit"
              smooth={true}
              duration={700}
              offset={-80}
              className={styles.secondary}
            >
              Share Your Story
            </Link>
          </div>
        </div>

        <div className={styles.right}>
          <img
            src={heroBg}
            alt="FLTH Podcast Host"
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
