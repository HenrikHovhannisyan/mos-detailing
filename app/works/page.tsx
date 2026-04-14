"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useLanguage } from "../../LanguageContext";
import styles from "./Works.module.css";

export default function WorksPage() {
  const { t } = useLanguage();
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const galleryImages = [
    "/images/hero_bg.png",
    "/images/service_restoration.png",
    "/images/service_steering_wheel.png",
    "/images/service_seats.png",
    "/images/service_ceiling.png",
    "/images/hero_bg.png", // Repeats for grid demo
    "/images/service_restoration.png",
    "/images/service_steering_wheel.png",
  ];

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.hero}>
        <div className="container">
          <Link href="/" className={styles.backBtn}>← {t.works.back}</Link>
          <h1 className={styles.title}>{t.works.title}</h1>
        </div>
      </div>

      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.grid}>
            {galleryImages.map((img, index) => (
              <div 
                key={index} 
                className={styles.item}
                onClick={() => setSelectedImg(img)}
              >
                <Image 
                  src={img} 
                  alt="Gallery Work" 
                  fill 
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.hover}>
                  <span className={styles.plus}>+</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImg && (
        <div className={styles.lightbox} onClick={() => setSelectedImg(null)}>
          <div className={styles.lightboxContent}>
            <Image 
              src={selectedImg} 
              alt="Zoomed Work" 
              fill 
              className={styles.lightboxImg}
            />
          </div>
          <button className={styles.closeBtn}>×</button>
        </div>
      )}

      <Footer />
    </main>
  );
}
