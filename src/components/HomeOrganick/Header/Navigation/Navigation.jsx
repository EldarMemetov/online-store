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
            to="/portfolio"
            className={({ isActive }) =>
              clsx(styles.navLink, { [styles.activeLink]: isActive })
            }
          >
            Portfolio
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
            to="/Blog"
            className={({ isActive }) =>
              clsx(styles.navLink, { [styles.activeLink]: isActive })
            }
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/basket"
            className={({ isActive }) =>
              clsx(styles.navLink, { [styles.activeLink]: isActive })
            }
          >
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
