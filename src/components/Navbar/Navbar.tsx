import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#home" className={styles.logo}>
          <img
            src="/src/assets/logo.png"
            alt="From Lowest To Highest Podcast"
            style={{ height: "55px" }}
          />
        </a>

        <ul className={styles.desktopLinks}>
          <li>
            <a href="#home" className={styles.link}>
              Home
            </a>
          </li>
          <li>
            <a href="#episodes" className={styles.link}>
              Episodes
            </a>
          </li>
          <li>
            <a href="#testimonies" className={styles.link}>
              Testimonies
            </a>
          </li>
          <li>
            <a href="#about" className={styles.link}>
              About
            </a>
          </li>
          <li>
            <a href="#submit" className={styles.link}>
              Share Your Story
            </a>
          </li>
        </ul>

        <a href="#submit" className={styles.ctaBtn}>
          Be A Guest
        </a>

        <button
          className={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={isMenuOpen ? styles.bar1Active : styles.bar1}></span>
          <span className={isMenuOpen ? styles.bar2Active : styles.bar2}></span>
          <span className={isMenuOpen ? styles.bar3Active : styles.bar3}></span>
        </button>
      </div>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#home" className={styles.mobileLink} onClick={closeMenu}>
            Home
          </a>
          <a href="#episodes" className={styles.mobileLink} onClick={closeMenu}>
            Episodes
          </a>
          <a
            href="#testimonies"
            className={styles.mobileLink}
            onClick={closeMenu}
          >
            Testimonies
          </a>
          <a href="#about" className={styles.mobileLink} onClick={closeMenu}>
            About
          </a>
          <a href="#submit" className={styles.mobileLink} onClick={closeMenu}>
            Share Your Story
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
