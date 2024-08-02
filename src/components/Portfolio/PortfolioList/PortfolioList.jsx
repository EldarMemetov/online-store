import citrus from "../imgPortfolio/portfolio1.png";
import carrot from "../imgPortfolio/portfolio2.png";
import betel from "../imgPortfolio/portfolio3.png";
import tomato from "../imgPortfolio/portfolio4.png";
import raspberry from "../imgPortfolio/portfolio5.png";
import orange from "../imgPortfolio/portfolio6.png";
import styles from "./PortfolioList.module.css";

export function PortfolioList() {
  return (
    <section className={styles.portfolioSection}>
      <div>
        <ul className={styles.portfolioList}>
          <li className={styles.portfolioItem}>
            <img
              src={citrus}
              alt="Green & Tasty Lemon"
              className={styles.portfolioImage}
            />
            <h3 className={styles.portfolioTitle}>Green & Tasty Lemon</h3>
            <p className={styles.portfolioCategory}>Fruits</p>
            <button className={styles.detailsButton}>More details</button>
          </li>
          <li className={styles.portfolioItem}>
            <img
              src={carrot}
              alt="Organic Carrot"
              className={styles.portfolioImage}
            />
            <h3 className={styles.portfolioTitle}>Organic Carrot</h3>
            <p className={styles.portfolioCategory}>Farmer</p>
            <button className={styles.detailsButton}>More details</button>
          </li>
          <li className={styles.portfolioItem}>
            <img
              src={betel}
              alt="Organic Betel Leaf"
              className={styles.portfolioImage}
            />
            <h3 className={styles.portfolioTitle}>Organic Betel Leaf</h3>
            <p className={styles.portfolioCategory}>Leaf</p>
            <button className={styles.detailsButton}>More details</button>
          </li>
          <li className={styles.portfolioItem}>
            <img
              src={tomato}
              alt="Natural Tomato"
              className={styles.portfolioImage}
            />
            <h3 className={styles.portfolioTitle}>Natural Tomato</h3>
            <p className={styles.portfolioCategory}>Fruits</p>
            <button className={styles.detailsButton}>More details</button>
          </li>
          <li className={styles.portfolioItem}>
            <img
              src={raspberry}
              alt="Black Raspberry"
              className={styles.portfolioImage}
            />
            <h3 className={styles.portfolioTitle}>Black Raspberry</h3>
            <p className={styles.portfolioCategory}>Farmer</p>
            <button className={styles.detailsButton}>More details</button>
          </li>
          <li className={styles.portfolioItem}>
            <img
              src={orange}
              alt="Honey Orange"
              className={styles.portfolioImage}
            />
            <h3 className={styles.portfolioTitle}>Honey Orange</h3>
            <p className={styles.portfolioCategory}>Farmer</p>
            <button className={styles.detailsButton}>More details</button>
          </li>
        </ul>
      </div>
    </section>
  );
}
