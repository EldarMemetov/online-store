import styles from "./NewAbout.module.css";
import cabbage from "../ImgContent/Image_1.png";
import tomato from "../ImgContent/Image_2.png";

export default function NewAbout() {
  return (
    <section className={styles.newsSection}>
      <div>
        <div className={styles.newsHeader}>
          <p>News</p>
          <div className={styles.containerSmall}>
            <h2>Discover weekly content about organic food, & more</h2>
            <button className={styles.button}>More News</button>
          </div>
        </div>
        <div className={styles.newsContent}>
          <ul className={styles.newsList}>
            <li>
              <img src={cabbage} alt="cabbage" />
              <div className={styles.newsDetails}>
                <p>By Rachi Card</p>
                <h3>The Benefits of Vitamin D & How to Get It</h3>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
                <button className={styles.button}>Read More</button>
              </div>
            </li>
            <li>
              <img src={tomato} alt="tomato" />
              <div className={styles.newsDetails}>
                <p>By Rachi Card</p>
                <h3>Our Favourite Summertime Tomato</h3>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
                <button className={styles.button}>Read More</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
