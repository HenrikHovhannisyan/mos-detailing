"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "../../LanguageContext";
import styles from "./BeforeAfter.module.css";

export default function BeforeAfter() {
  const { t } = useLanguage();
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <section className={styles.section} id="before-after">
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">{t.beforeAfter.title}</h2>
          <p className={styles.subtitle}>{t.beforeAfter.subtitle}</p>
        </div>

        <div className={styles.comparisonWrapper}>
          <div className={styles.comparisonSlider} ref={containerRef}>
            {/* After Image (Background) */}
            <div className={styles.imageItem}>
              <Image 
                src="/images/ba_after.png" 
                alt="After" 
                fill 
                className={styles.image} 
              />
              <span className={`${styles.label} ${styles.labelAfter}`}>{t.beforeAfter.after}</span>
            </div>

            {/* Before Image (Overlay) */}
            <div 
              className={styles.imageOverlay} 
              style={{ width: `${sliderPos}%` }}
            >
              <div className={styles.imageContainer} style={{ width: containerWidth }}>
                <Image 
                  src="/images/ba_before.png" 
                  alt="Before" 
                  fill 
                  className={styles.image}
                />
              </div>
              <span className={`${styles.label} ${styles.labelBefore}`}>{t.beforeAfter.before}</span>
            </div>

            {/* Slider Switch */}
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPos} 
              onChange={handleSliderChange} 
              className={styles.slider}
            />
            
            {/* Slider Handle */}
            <div className={styles.handle} style={{ left: `${sliderPos}%` }}>
              <div className={styles.handleLine}></div>
              <div className={styles.handleCircle}>
                <div className={styles.arrows}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
