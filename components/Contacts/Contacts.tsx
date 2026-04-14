"use client";
import { Phone, MapPin, Camera, MessageCircle, Send, Navigation } from "lucide-react";
import { useLanguage } from "../../LanguageContext";
import styles from "./Contacts.module.css";

export default function Contacts() {
  const { t } = useLanguage();

  const phone = "+374 94 730058"; 
  const phoneClean = phone.replace(/\s/g, "");

  const openNavigator = () => {
    window.open(`https://yandex.ru/maps/?rtext=~40.153783,44.502863`, "_blank");
  };

  return (
    <section className={styles.contacts} id="contacts">
      <div className="container">
        <h2 className="section-title">{t.contacts.title}</h2>
        <div className={styles.grid}>
          <div className={styles.info}>
            <div className={styles.item}>
              <div className={styles.iconBox}>
                <Phone size={24} />
              </div>
              <div className={styles.itemContent}>
                <p className={styles.label}>{t.contacts.phone}</p>
                <a href={`tel:${phoneClean}`} className={styles.value}>{phone}</a>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.iconBox}>
                <MapPin size={24} />
              </div>
              <div className={styles.itemContent}>
                <p className={styles.label}>{t.contacts.addressLabel}</p>
                <p className={styles.value}>{t.contacts.address}</p>
              </div>
            </div>
            <div className={styles.socials}>
              <a href="https://instagram.com" target="_blank" rel="noopener" className={styles.socialLink}>
                <Camera size={20} />
                <span>Instagram</span>
              </a>
              <a href="https://wa.me/37494730058" target="_blank" rel="noopener" className={styles.socialLink}>
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </a>
              <a href="https://t.me/mosdetailing" target="_blank" rel="noopener" className={styles.socialLink}>
                <Send size={20} />
                <span>Telegram</span>
              </a>
            </div>
            <button className={styles.navBtn} onClick={openNavigator}>
              <Navigation size={20} />
              {t.contacts.getRoute}
            </button>
          </div>
          <div className={styles.map}>
            <iframe 
              src="https://yandex.ru/map-widget/v1/?ll=44.502863,40.153783&z=17&pt=44.502863,40.153783,pm2rdm" 
              width="100%" 
              height="450" 
              frameBorder="0"
              style={{ filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)", borderRadius: "8px" }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
