// src/components/UserProfile/UserProfile.jsx
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../../redux/auth/selectors";
import { logOut } from "../../../../redux/auth/operations";
import { Link } from "react-router-dom";
import styles from "./UserProfile.module.css";

export function UserProfile() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <section className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <h1 className={styles.welcomeMessage}>Hello, {user.name}!</h1>
        <button
          className={styles.logoutButton}
          type="button"
          onClick={() => dispatch(logOut())}
        >
          Logout
        </button>
      </div>
      <div className={styles.profileInfo}>
        <p className={styles.infoText}>
          Were currently working on enhancing your profile. Thank you for your
          patience!
        </p>
        <p className={styles.infoText}>
          In the meantime, feel free to browse our{" "}
          <Link to="/shop" className={styles.shopLink}>
            Shop
          </Link>{" "}
          for the latest products and offers.
        </p>
        <p className={styles.infoText}>Happy shopping!</p>
      </div>
    </section>
  );
}
