import { SlBasketLoaded } from "react-icons/sl";
import styles from "./Basket.module.css";

export const Basket = () => {
  return (
    <div className={styles.basketContainer}>
      <button className={styles.basketButton}>
        <SlBasketLoaded className={styles.basketIcon} />
        <span className={styles.cartText}>Cart (0)</span>
      </button>
    </div>
  );
};
