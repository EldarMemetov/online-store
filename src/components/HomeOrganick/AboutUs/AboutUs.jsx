import AboutImg from "./img/imegeAbout.png";
import organic from "./img/organic.svg";
import quality from "./img/quality.svg";
import styles from "./AboutUs.module.css";
import { useNavigate } from "react-router-dom";

export function AboutUs() {
  const navigate = useNavigate();
  const handleShopNowClick = () => {
    navigate("/shop");
  };
  return (
    <section className={styles.aboutUsSection}>
      <div className={styles.container}>
        <img src={AboutImg} alt="" className={styles.aboutImage} />
        <ul className={styles.content}>
          <li className={styles.listItem}>
            <div className={styles.SmallContainer}>
              <p className={styles.aboutText}>About Us</p>
              <h2 className={styles.heading}>
                We Believe in Working Accredited Farmers
              </h2>
              <p className={styles.description}>
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the standard dummy text ever since the
                1500s, when an unknown printer took a galley.
              </p>
            </div>
          </li>
          <li className={styles.listItem}>
            <img src={organic} alt="" className={styles.icon} />
            <div>
              <h2 className={styles.itemHeading}>Organic Foods Only</h2>
              <p className={styles.itemText}>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
            </div>
          </li>
          <li className={styles.listItem}>
            <img src={quality} alt="" className={styles.icon} />
            <div>
              <h2 className={styles.itemHeading}>Quality Standards</h2>
              <p className={styles.itemText}>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
            </div>
          </li>
          <li className={styles.listItem}>
            <button className={styles.shopButton} onClick={handleShopNowClick}>
              Shop Now
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}
