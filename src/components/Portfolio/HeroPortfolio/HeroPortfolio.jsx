import styles from "./HeroPortfolio.module.css";

export function HeroPortfolio() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Portfolio Standard</h1>
      </div>
    </section>
  );
}
