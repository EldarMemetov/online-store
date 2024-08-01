import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              clsx(styles.navLink, { [styles.activeLink]: isActive })
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/HeroAbout"
            className={({ isActive }) =>
              clsx(styles.navLink, { [styles.activeLink]: isActive })
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Pages"
            className={({ isActive }) =>
              clsx(styles.navLink, { [styles.activeLink]: isActive })
            }
          >
            Pages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Shop"
            className={({ isActive }) =>
              clsx(styles.navLink, { [styles.activeLink]: isActive })
            }
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Projects"
            className={({ isActive }) =>
              clsx(styles.navLink, { [styles.activeLink]: isActive })
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/News"
            className={({ isActive }) =>
              clsx(styles.navLink, { [styles.activeLink]: isActive })
            }
          >
            News
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
