import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./ScrollToTop.module.scss";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`${styles.scrollTop} ${visible ? styles.show : ""}`}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
