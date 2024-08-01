import { FaFacebook, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import bacardo from "../imageAbout/bacardo.jpg";
import loreno from "../imageAbout/loreno.jpg";
import riga from "../imageAbout/riga.png";
import styles from "./ExpertAbout.module.css";

export function ExpertAbout() {
  return (
    <section className={styles.expertSection}>
      <div className={styles.expertHeading}>
        <p className={styles.expertTitle}>Team</p>
        <h2 className={styles.expertSubtitle}>Our Organic Experts</h2>
        <p className={styles.expertDescription}>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the standard dummy text ever since the 1500s, when an
          unknown printer took a galley.
        </p>
      </div>
      <ul className={styles.expertList}>
        <li className={styles.expertItem}>
          <img
            src={bacardo}
            alt="Giovani Bacardo"
            className={styles.expertImage}
          />
          <div>
            <h3 className={styles.expertName}>Giovani Bacardo</h3>
            <p className={styles.expertRole}>Farmer</p>
          </div>
          <div className={styles.socialIcons}>
            <FaFacebook className={styles.socialIcon} />
            <FaInstagram className={styles.socialIcon} />
            <FaTelegramPlane className={styles.socialIcon} />
          </div>
        </li>
        <li className={styles.expertItem}>
          <img
            src={loreno}
            alt="Marianne Loreno"
            className={styles.expertImage}
          />
          <div>
            <h3 className={styles.expertName}>Marianne Loreno</h3>
            <p className={styles.expertRole}>Designer</p>
          </div>
          <div className={styles.socialIcons}>
            <FaFacebook className={styles.socialIcon} />
            <FaInstagram className={styles.socialIcon} />
            <FaTelegramPlane className={styles.socialIcon} />
          </div>
        </li>
        <li className={styles.expertItem}>
          <img src={riga} alt="Riga Pelore" className={styles.expertImage} />
          <div>
            <h3 className={styles.expertName}>Riga Pelore</h3>
            <p className={styles.expertRole}>Farmer</p>
          </div>
          <div className={styles.socialIcons}>
            <FaFacebook className={styles.socialIcon} />
            <FaInstagram className={styles.socialIcon} />
            <FaTelegramPlane className={styles.socialIcon} />
          </div>
        </li>
      </ul>
    </section>
  );
}
