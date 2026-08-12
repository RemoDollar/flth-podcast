import React, { useState } from "react";
import styles from "./BeAGuest.module.scss";

const BeAGuest: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    setLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/mbdvnzqy", {
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
    <section id="guest" className={styles.beGuest}>
      <div className={styles.container}>
        {/* LEFT SIDE */}

        <div className={styles.left}>
          <p className={styles.subtitle}>BE A GUEST</p>

          <h2 className={styles.title}>
            Your Story Could
            <span> Change Lives</span>
          </h2>

          <p className={styles.description}>
            Every extraordinary journey deserves to be heard. If you've overcome
            adversity, built something meaningful, discovered purpose, or have
            wisdom that could encourage others, we'd love to hear from you.
          </p>

          <div className={styles.features}>
            <div className={styles.featureCard}>
              <div className={styles.icon}>🎙</div>

              <div>
                <h4>Inspire Thousands</h4>

                <p>Encourage people around the world through your testimony.</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.icon}>🌍</div>

              <div>
                <h4>Reach New Audiences</h4>

                <p>Share your message with listeners searching for hope.</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.icon}>❤️</div>

              <div>
                <h4>Leave a Legacy</h4>

                <p>Your experience could become someone else's breakthrough.</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.icon}>🚀</div>

              <div>
                <h4>Build Your Platform</h4>

                <p>
                  Introduce your work, mission and purpose to a wider audience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className={styles.right}>
          <div className={styles.formCard}>
            <h3>Guest Application</h3>

            <p>
              Complete the application below. If your story is selected, our
              production team will contact you to schedule a podcast interview.
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <input type="text" name="name" placeholder="Full Name" required />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />

              <input type="tel" name="phone" placeholder="Phone Number" />

              <input
                type="text"
                name="country"
                placeholder="Country"
                required
              />

              <input
                type="text"
                name="occupation"
                placeholder="Occupation / Industry"
              />

              <input
                type="text"
                name="social"
                placeholder="Instagram / LinkedIn (optional)"
              />

              <textarea
                name="about"
                rows={4}
                placeholder="Tell us about yourself..."
                required
              />

              <textarea
                name="reason"
                rows={5}
                placeholder="Why would you like to be featured on FLTH Podcast?"
                required
              />

              <textarea
                name="impact"
                rows={4}
                placeholder="What message do you hope people will remember after hearing your story?"
              />

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>

              {status === "success" && (
                <div className={styles.status}>
                  <strong>✓ Application Received!</strong>

                  <p>
                    Thank you for applying to be a guest on FLTH Podcast. Our
                    production team has received your application and will
                    carefully review it. If your story is selected, we'll reach
                    out to schedule your interview.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className={styles.error}>
                  <strong>✕ Submission Failed</strong>

                  <p>
                    Something went wrong while submitting your application.
                    Please check your internet connection and try again.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeAGuest;
