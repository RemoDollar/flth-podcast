import React, { useState } from "react";
import styles from "./SubmitStory.module.scss";

const SubmitStory: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    setLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/mzdlnjvq", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section id="submit" className={styles.submitStory}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <p className={styles.subtitle}>SHARE YOUR STORY</p>

          <h2 className={styles.title}>
            Your Story Could <span>Inspire Thousands</span>
          </h2>

          <p className={styles.description}>
            Every testimony has the power to encourage someone who is struggling
            today. Whether your journey is about faith, perseverance, business,
            education, healing or personal transformation, we'd love to hear it.
          </p>

          <p className={styles.notice}>
            Selected stories may be featured across FLTH Podcast's social media
            platforms to encourage people around the world.
          </p>
        </div>

        <div className={styles.formCard}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Full Name</label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email Address</label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="country">Country</label>

              <input
                id="country"
                type="text"
                name="country"
                placeholder="Your country"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="story">Your Story</label>

              <textarea
                id="story"
                name="story"
                rows={8}
                placeholder="Tell us your testimony or experience..."
                required
              />
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={loading}
            >
              {loading ? "Sending..." : "Share My Story"}
            </button>

            {status === "success" && (
              <div className={styles.status}>
                <strong>✓ Story Submitted Successfully!</strong>

                <p>
                  Thank you for trusting FLTH Podcast with your testimony. Our
                  team has received your story and may contact you if it is
                  selected to inspire others through our podcast or social media
                  platforms.
                </p>
              </div>
            )}

            {status === "error" && (
              <div className={styles.error}>
                <strong>✕ Submission Failed</strong>

                <p>
                  We couldn't send your story at the moment. Please check your
                  internet connection and try again.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubmitStory;
