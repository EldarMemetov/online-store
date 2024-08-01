// src/components/About/HeroAboutMain/HeroAboutMain.jsx
import styles from "./HeroAboutMain.module.css";

export function HeroAboutMain() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.backgroundImage1}></div>
      <div className={styles.backgroundImage2}></div>
      <div>
        <h1 className={styles.heroTitle}>About Us</h1>
      </div>
    </section>
  );
}
