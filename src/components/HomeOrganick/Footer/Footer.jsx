import styles from "./Footer.module.css";
import { CiInstagram } from "react-icons/ci";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contact}>
          <h4>Contact Us</h4>
          <div className={styles.contactItem}>
            <p className={styles.emailText}>Email:</p>
            <a href="mailto:needhelp@Organia.com">needhelp@Organia.com</a>
          </div>
          <div className={styles.contactItem}>
            <p className={styles.numberText}>Phone:</p>
            <p>666 888 888</p>
          </div>
          <div className={styles.contactItem}>
            <p className={styles.addressText}>Address:</p>
            <p>88 road, Borklyn Street, USA</p>
          </div>
        </div>

        <div className={styles.organick}>
          <h2 className={styles.organicText}>Organick</h2>
          <p className={styles.simply}>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing.
          </p>
          <ul className={styles.listIcon}>
            <li>
              <a href="https://instagram.com" className={styles.iconLink}>
                <CiInstagram className={styles.icon} />
              </a>
            </li>
            <li>
              <a href="https://facebook.com" className={styles.iconLink}>
                <FaFacebook className={styles.icon} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" className={styles.iconLink}>
                <FaTwitter className={styles.icon} />
              </a>
            </li>
            <li>
              <a href="https://telegram.org" className={styles.iconLink}>
                <BsTelegram className={styles.icon} />
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.utilityPages}>
          <h4>Utility Pages</h4>
          <ul>
            <li>
              <a href="/style-guide" className={styles.pages}>
                Style Guide
              </a>
            </li>
            <li>
              <a href="/404" className={styles.pages}>
                404 Not Found
              </a>
            </li>
            <li>
              <a href="/password-protected" className={styles.pages}>
                Password Protected
              </a>
            </li>
            <li>
              <a href="/licenses" className={styles.pages}>
                Licenses
              </a>
            </li>
            <li>
              <a href="/changelog" className={styles.pages}>
                Changelog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
