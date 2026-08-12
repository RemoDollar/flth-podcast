import React from "react";
import styles from "./Footer.module.scss";

import { FaInstagram, FaTiktok, FaYoutube, FaHeart } from "react-icons/fa";

import { Link } from "react-scroll";

import logo from "../../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top */}

        <div className={styles.top}>
          {/* Brand */}

          <div className={styles.brand}>
            <img src={logo} alt="From Lowest To Highest Podcast" />

            <h3>From Lowest To Highest</h3>

            <p>
              Real stories of faith, resilience and transformation that inspire
              people to keep moving forward.
            </p>
          </div>

          {/* Navigation */}

          <div className={styles.links}>
            <h4>Explore</h4>

            <Link to="home" smooth duration={600} offset={-80}>
              Home
            </Link>

            <Link to="episodes" smooth duration={600} offset={-80}>
              Episodes
            </Link>

            <Link to="submit" smooth duration={600} offset={-80}>
              Submit Story
            </Link>

            <Link to="about" smooth duration={600} offset={-80}>
              About
            </Link>

            <Link to="guest" smooth duration={600} offset={-80}>
              Be A Guest
            </Link>
          </div>

          {/* Social */}

          <div className={styles.social}>
            <h4>Connect</h4>

            <a
              href="https://www.instagram.com/flthpodcast?utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
              Instagram
            </a>

            <a
              href="https://vt.tiktok.com/ZSQcYHSxn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
              TikTok
            </a>

            <a
              href="https://youtube.com/@lthpodcast?si=u_5v08k8fAQDSpfb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
              YouTube
            </a>
          </div>
        </div>

        {/* Quote */}

        <div className={styles.quote}>
          <p>
            “Every testimony has the power to change a life. Maybe yours is
            next.”
          </p>
        </div>

        {/* Bottom */}

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} From Lowest To Highest Podcast. All
            Rights Reserved.
          </p>

          <p>
            Built with <FaHeart className={styles.heart} /> to inspire the
            world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
