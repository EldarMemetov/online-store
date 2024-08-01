import { PiTractorLight } from "react-icons/pi";
import { GiGreenhouse } from "react-icons/gi";
import imageAbout from "../imageAbout/imageAbout.png";
import styles from "./UsAbout.module.css";

export function UsAbout() {
  return (
    <section className={styles.sectionUs}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img src={imageAbout} alt="About Us" className={styles.image} />
        </div>
        <div className={styles.contentWrapper}>
          <p className={styles.title}>About Us</p>
          <h2 className={styles.heading}>We do Creative Things for Success</h2>
          <p className={styles.description}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the standard dummy text ever since the 1500s,
            when an unknown printer took a galley.
          </p>
          <p className={styles.description}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the standard dummy text ever since the 1500s,
            when an unknown printer took a galley.
          </p>
          <ul className={styles.featuresList}>
            <li className={styles.featureItem}>
              <PiTractorLight className={styles.icon} />
              <h3 className={styles.featureTitle}>
                Modern Agriculture Equipment
              </h3>
            </li>
            <li className={styles.featureItem}>
              <GiGreenhouse className={styles.icon} />
              <h3 className={styles.featureTitle}>
                No growth hormones are used
              </h3>
            </li>
          </ul>
          <button className={styles.button}>Explore More</button>
        </div>
      </div>
    </section>
  );
}
