import { Link } from "react-scroll";
import styles from "./Navbar.module.scss";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={700}
          offset={-80}
          className={styles.logo}
        >
          <img src={logo} alt="FLTH Podcast Logo" />
        </Link>

        {/* Navigation */}
        <nav className={styles.navLinks}>
          <Link
            to="home"
            smooth={true}
            duration={700}
            offset={-80}
            spy={true}
            activeClass={styles.active}
          >
            Home
          </Link>

          <Link
            to="episodes"
            smooth={true}
            duration={700}
            offset={-80}
            spy={true}
            activeClass={styles.active}
          >
            Episodes
          </Link>

          <Link
            to="submit"
            smooth={true}
            duration={700}
            offset={-80}
            spy={true}
            activeClass={styles.active}
          >
            Submit Story
          </Link>

          <Link
            to="about"
            smooth={true}
            duration={700}
            offset={-80}
            spy={true}
            activeClass={styles.active}
          >
            About
          </Link>
        </nav>

        {/* Social Media Links */}
        <div className={styles.socials}>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/flthpodcast?utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="FLTH Podcast on Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="https://vt.tiktok.com/ZSQcYHSxn/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="FLTH Podcast on TikTok"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
              <path d="M15.5 3c.3 2.1 1.5 3.6 3.5 4.1v3.1c-1.4-.1-2.6-.5-3.6-1.2v6.5c0 3.3-2.3 5.5-5.6 5.5-3 0-5.3-2.1-5.3-5 0-3.1 2.5-5.3 5.8-5.1v3.1c-1.5-.1-2.7.7-2.7 2 0 1.1.9 1.9 2.1 1.9 1.3 0 2.4-.8 2.4-2.5V3h3.4Z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/@lthpodcast?si=u_5v08k8fAQDSpfb"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="FLTH Podcast on YouTube"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.7V8.3l6.2 3.7-6.2 3.7Z" />
            </svg>
          </a>
        </div>

        {/* CTA Button */}
        <Link
          to="guest"
          smooth={true}
          duration={700}
          offset={-80}
          className={styles.guestBtn}
        >
          Be A Guest
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
