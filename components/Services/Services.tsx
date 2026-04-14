"use client";

import Image from "next/image";
import { useLanguage } from "../../LanguageContext";
import styles from "./Services.module.css";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    { id: "restoration", img: "/images/service_restoration.png", title: t.services.restoration },
    { id: "steering", img: "/images/service_steering_wheel.png", title: t.services.steering },
    { id: "seats", img: "/images/service_seats.png", title: t.services.seats },
    { id: "ceiling", img: "/images/service_ceiling.png", title: t.services.ceiling },
  ];

  return (
    <section className={styles.services} id="services">
      <div className="container">
        <h2 className="section-title">{t.services.title}</h2>
        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={service.img} 
                  alt={service.title} 
                  fill 
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className={styles.info}>
                <h3>{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
