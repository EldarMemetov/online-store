import styles from "./HeroBlog.module.css";

export function HeroBlog() {
  return (
    <section className={styles.heroBlogSection}>
      <div className={styles.overlay}></div>
      <div className={styles.overlaySecondary}></div>
      <div className={styles.heroBlogContent}>
        <h1>Recent News</h1>
      </div>
    </section>
  );
}
