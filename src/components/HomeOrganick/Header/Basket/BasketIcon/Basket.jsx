// components/Basket/Basket.jsx
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { SlBasketLoaded } from "react-icons/sl";
import styles from "./Basket.module.css";

export const Basket = () => {
  const navigate = useNavigate();
  const items = useSelector((state) => state.basket.items);
  const itemsCount = items.reduce((total, item) => total + item.quantity, 0);

  const handleClick = () => {
    navigate("/basket");
  };

  return (
    <div className={styles.basketContainer}>
      <button className={styles.basketButton} onClick={handleClick}>
        <SlBasketLoaded className={styles.basketIcon} />
        <span className={styles.cartText}>Cart ({itemsCount})</span>
      </button>
    </div>
  );
};
