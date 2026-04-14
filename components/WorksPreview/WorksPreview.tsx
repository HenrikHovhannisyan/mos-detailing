"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../LanguageContext";
import styles from "./WorksPreview.module.css";

export default function WorksPreview() {
  const { t } = useLanguage();

  const works = [
    { id: 1, img: "/images/hero_bg.png" },
    { id: 2, img: "/images/service_restoration.png" },
    { id: 3, img: "/images/service_steering_wheel.png" },
    { id: 4, img: "/images/service_seats.png" },
  ];

  return (
    <section className={styles.works}>
      <div className="container">
        <h2 className="section-title">{t.works.title}</h2>
        <div className={styles.grid}>
          {works.map((work) => (
            <div key={work.id} className={styles.item}>
              <Image 
                src={work.img} 
                alt="Work" 
                fill 
                className={styles.image} 
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className={styles.overlay}>
                <Link href="/works" className={styles.viewBtn}>+</Link>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.moreWrap}>
          <Link href="/works" className={styles.moreBtn}>
            {t.works.viewMore}
          </Link>
        </div>
      </div>
    </section>
  );
}
