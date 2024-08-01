import styles from "./HeroShop.module.css";

export const HeroShop = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <div className={styles.overlaySecondary}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Shop</h1>
      </div>
    </section>
  );
};
