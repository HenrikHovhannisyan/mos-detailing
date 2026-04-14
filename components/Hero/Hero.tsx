"use client";

import Link from "next/link";
import { useLanguage } from "../../LanguageContext";
import styles from "./Hero.module.css";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.content}`}>
        <h1 className={`${styles.title} fade-in`}>{t.hero.title}</h1>
        <p className={`${styles.subtitle} fade-in`} style={{ animationDelay: "0.2s" }}>
          {t.hero.subtitle}
        </p>
        <Link href="/works" className={`${styles.button} fade-in`} style={{ animationDelay: "0.4s" }}>
          {t.hero.button}
        </Link>
      </div>
    </section>
  );
}
