"use client";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { useLanguage } from "../../LanguageContext";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Image src="/logo.png" alt="MOS Detailing" width={220} height={75} className={styles.logo} />
            <p className={styles.tagline}>{t.hero.subtitle}</p>
          </div>
          <div className={styles.contacts}>
            <div className={styles.contactItem}>
              <MapPin size={16} className={styles.icon} />
              <p>{t.contacts.address}</p>
            </div>
            <div className={styles.contactItem}>
              <Phone size={16} className={styles.icon} />
              <p>+374 94 730058</p>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© {year} MOS Detailing. {t.footer.rights}.</p>
        </div>
      </div>
    </footer>
  );
}
