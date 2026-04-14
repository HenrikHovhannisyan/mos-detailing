"use client";

import Image from "next/image";
import { useLanguage } from "../../LanguageContext";
import styles from "./About.module.css";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/hero_bg.png"
              alt="About MOS Detailing"
              fill
              className={styles.image}
              sizes="(max-width: 991px) 100vw, 50vw"
            />
            <div className={styles.imageOverlay}></div>
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>{t.about.title}</h2>
            <div className={styles.divider}></div>
            <p className={styles.text}>{t.about.text}</p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.number}>100%</span>
                <span className={styles.label}>{t.about.quality}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>10+</span>
                <span className={styles.label}>{t.about.years}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
