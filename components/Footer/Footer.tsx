"use client";

import Image from "next/image";
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
            <Image src="/logo.png" alt="MOS Detailing" width={120} height={40} className={styles.logo} />
            <p className={styles.tagline}>{t.hero.subtitle}</p>
          </div>
          <div className={styles.contacts}>
            <p>{t.contacts.address}</p>
            <p>+374 94 730058</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© {year} MOS Detailing. {t.footer.rights}.</p>
        </div>
      </div>
    </footer>
  );
}
