import imageCompany from "../imageCompany/image.png";
import styles from "./ListCampany.module.css";

export function ListCompany() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            src={imageCompany}
            alt="Company Image"
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.subtitle}>Eco Friendly</p>
          <h2 className={styles.title}>Econis is a Friendly Organic Store</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <h3 className={styles.itemTitle}>Start with Our Company First</h3>
              <p className={styles.itemText}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </li>
            <li className={styles.listItem}>
              <h3 className={styles.itemTitle}>Learn How to Grow Yourself</h3>
              <p className={styles.itemText}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </li>
            <li className={styles.listItem}>
              <h3 className={styles.itemTitle}>Farming Strategies of Today</h3>
              <p className={styles.itemText}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
