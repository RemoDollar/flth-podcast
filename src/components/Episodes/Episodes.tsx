import React from "react";
import styles from "./Episodes.module.scss";
import { episodes } from "../../data/episodes";

const Episodes: React.FC = () => {
  return (
    <section id="episodes" className={styles.episodes}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <p className={styles.subtitle}>LATEST EPISODES</p>

          <h2 className={styles.title}>
            Real Stories That <span>Inspire</span>
          </h2>

          <p className={styles.description}>
            Every episode shares authentic testimonies of faith, resilience and
            transformation. Watch inspiring conversations that remind you your
            story is not over.
          </p>
        </div>

        <div className={styles.grid}>
          {episodes.map((episode) => (
            <article key={episode.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={episode.image}
                  alt={episode.title}
                  className={styles.image}
                />

                <div className={styles.overlay}>
                  <div className={styles.playButton}>▶</div>
                </div>
              </div>

              <div className={styles.content}>
                <h3>{episode.title}</h3>

                <p>{episode.description}</p>

                <div className={styles.meta}>
                  <span>⏱ {episode.duration}</span>
                  <span>📅 {episode.date}</span>
                </div>

                <div className={styles.tags}>
                  {episode.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className={styles.buttons}>
                  <a
                    href={episode.tiktok}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.tiktok}
                  >
                    TikTok
                  </a>

                  <a
                    href={episode.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.youtube}
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Episodes;
