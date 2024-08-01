import styles from "./ReviewsList.module.css";
import reviews from "../ReviewsData/ReviewsData.json";
import { SwiperConfig } from "../SwiperConfig/SwiperConfig";

export function ReviewsList() {
  return (
    <section className={styles.reviewsSection}>
      <div className={styles.reviewsContainer}>
        <p className={styles.subtitle}>Testimonial</p>
        <h2 className={styles.title}>What Our Customer Saying?</h2>
        <SwiperConfig reviews={reviews} />
      </div>
      <div className={styles.statsContainer}>
        <ul className={styles.ulList}>
          <li className={styles.statItem}>
            <div className={styles.circle}>
              <h3>100%</h3>
              <p className={styles.statDescription}>Organic</p>
            </div>
          </li>
          <li className={styles.statItem}>
            <div className={styles.circle}>
              <h3>285</h3>
              <p className={styles.statDescription}>Active Product</p>
            </div>
          </li>
          <li className={styles.statItem}>
            <div className={styles.circle}>
              <h3>350+</h3>
              <p className={styles.statDescription}>Organic Orchads</p>
            </div>
          </li>
          <li className={styles.statItem}>
            <div className={styles.circle}>
              <h3>25+</h3>
              <p className={styles.statDescription}>Years of Farming</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
