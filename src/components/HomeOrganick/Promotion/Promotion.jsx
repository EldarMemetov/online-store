import garden from "./img/garden.jpg";
import vegetables from "./img/vegetables.jpg";
import styles from "./Promotion.module.css";

export const Promotion = () => {
  return (
    <section className={styles.sectionPromotion}>
      <div>
        <ul className={styles.promotionList}>
          <li className={styles.promotionItem}>
            <img
              src={garden}
              alt="Garden Fresh Fruits"
              className={styles.promotionImage}
            />
            <div className={styles.promotionText}>
              <p className={styles.natural}>Natural!!</p>
              <p className={styles.textGetNext}>Get Garden Fresh Fruits</p>
            </div>
          </li>
          <li className={styles.promotionItem}>
            <img
              src={vegetables}
              alt="Vegetables Offer"
              className={styles.promotionImage}
            />
            <div className={styles.promotionText}>
              <p className={styles.naturalNext}>Offer!!</p>
              <p className={styles.textGet}>Get 10% off on Vegetables</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
