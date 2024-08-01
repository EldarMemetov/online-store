import aboutNext from "../imageAbout/aboutNext.png";
import { SlBasket } from "react-icons/sl";
import { GiThreeLeaves } from "react-icons/gi";
import { MdOutlineSettingsPhone } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import styles from "./AboutMarket.module.css";

export function AboutMarket() {
  return (
    <section className={styles.sectionAboutMarket}>
      <div className={styles.contentWrapper}>
        <div className={styles.textSection}>
          <p className={styles.whyChooseUs}>Why Choose us?</p>
          <h2 className={styles.mainTitle}>
            We do not buy from the open market & traders.
          </h2>
          <p className={styles.description}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the standard the 1500s, when an unknown
          </p>
          <ul className={styles.featuresList}>
            <li className={styles.featureItem}>
              <h3 className={styles.featureTitle}>100% Natural Product</h3>
              <p className={styles.featureDescription}>
                Simply dummy text of the printing and typesetting industry Lorem
                Ipsum
              </p>
            </li>
            <li className={styles.featureItem}>
              <h3 className={styles.featureTitle}>Increases resistance</h3>
              <p className={styles.featureDescription}>
                Filling, and temptingly healthy, our Biona Organic Granola with
                Wild Berries is just the thing
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.imageWrapper}>
          <img src={aboutNext} alt="About Us" className={styles.aboutImage} />
        </div>
      </div>
      <div className={styles.serviceWrapper}>
        <ul className={styles.servicesList}>
          <li className={styles.serviceItem}>
            <SlBasket className={styles.icon} />
            <h2 className={styles.serviceTitle}>Return Policy</h2>
            <p className={styles.serviceDescription}>
              Simply dummy text of the printing and typesetting industry.
            </p>
          </li>
          <li className={styles.serviceItem}>
            <GiThreeLeaves className={styles.icon} />
            <h2 className={styles.serviceTitle}>100% Fresh</h2>
            <p className={styles.serviceDescription}>
              Simply dummy text of the printing and typesetting industry.
            </p>
          </li>
          <li className={styles.serviceItem}>
            <MdOutlineSettingsPhone className={styles.icon} />
            <h2 className={styles.serviceTitle}>Support 24/7</h2>
            <p className={styles.serviceDescription}>
              Simply dummy text of the printing and typesetting industry.
            </p>
          </li>
          <li className={styles.serviceItem}>
            <MdOutlinePayments className={styles.icon} />
            <h2 className={styles.serviceTitle}>Secured Payment</h2>
            <p className={styles.serviceDescription}>
              Simply dummy text of the printing and typesetting industry.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
