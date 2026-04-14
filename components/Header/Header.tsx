"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "../../LanguageContext";
import styles from "./Header.module.css";

export default function Header() {
  const { t, locale, setLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContent}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="MOS Detailing" width={150} height={50} priority className={styles.logoImg} />
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
          <Link href="/" onClick={() => setMenuOpen(false)}>{t.nav.home}</Link>
          <a href="#about" onClick={() => setMenuOpen(false)}>{t.nav.about}</a>
          <Link href="/works" onClick={() => setMenuOpen(false)}>{t.nav.works}</Link>
          <a href="#contacts" onClick={() => setMenuOpen(false)}>{t.nav.contacts}</a>
          
          <div className={styles.langSwitch}>
            <button 
              className={locale === "am" ? styles.activeLang : ""} 
              onClick={() => setLocale("am")}
            >AM</button>
            <button 
              className={locale === "ru" ? styles.activeLang : ""} 
              onClick={() => setLocale("ru")}
            >RU</button>
            <button 
              className={locale === "en" ? styles.activeLang : ""} 
              onClick={() => setLocale("en")}
            >EN</button>
          </div>
        </nav>

        <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
          <span className={menuOpen ? styles.lineOpen : ""}></span>
          <span className={menuOpen ? styles.lineOpen : ""}></span>
          <span className={menuOpen ? styles.lineOpen : ""}></span>
        </button>
      </div>
    </header>
  );
}
