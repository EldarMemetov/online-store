import spicy from "../imageAbout/spicy.png";
import feesd from "../imageAbout/feesd.png";
import fruits from "../imageAbout/fruits.png";
import vegetable from "../imageAbout/vegetable.png";
import styles from "./OfferAbout.module.css";

export function OfferAbout() {
  return (
    <section className={styles.offerSection}>
      <div className={styles.offerContainer}>
        <div className={styles.offerHeading}>
          <p className={styles.offerTitle}>What we offer</p>
          <h2 className={styles.offerSubtitle}>Fresh & Organic Produce</h2>
        </div>
        <ul className={styles.offerList}>
          <li className={styles.offerItem}>
            <img src={spicy} alt="Spicy" className={styles.offerImage} />
            <p className={styles.offerText}>Spicy</p>
          </li>
          <li className={styles.offerItem}>
            <img src={feesd} alt="Nuts & Feesd" className={styles.offerImage} />
            <p className={styles.offerText}>Nuts & Feesd</p>
          </li>
          <li className={styles.offerItem}>
            <img src={fruits} alt="Fruits" className={styles.offerImage} />
            <p className={styles.offerText}>Fruits</p>
          </li>
          <li className={styles.offerItem}>
            <img
              src={vegetable}
              alt="Vegetable"
              className={styles.offerImage}
            />
            <p className={styles.offerText}>Vegetable</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
