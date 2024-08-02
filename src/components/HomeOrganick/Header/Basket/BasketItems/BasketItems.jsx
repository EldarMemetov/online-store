import { useDispatch } from "react-redux";
import { removeItem } from "../../../../redux/nutrition/basketSlice";
import styles from "./BasketItems.module.css";

export function BasketItems({ id, name, imageUrl, salePrice, quantity }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem({ id }));
  };

  const formattedPrice = salePrice ? salePrice.toFixed(2) : "0.00";

  return (
    <li className={styles.basketItem}>
      <img src={imageUrl} alt={name} className={styles.basketItemImage} />
      <div className={styles.basketItemDetails}>
        <h2 className={styles.basketItemName}>{name}</h2>
        <span className={styles.basketItemPrice}>${formattedPrice}</span>
        <span className={styles.basketItemQuantity}>Quantity: {quantity}</span>
      </div>
      <button className={styles.removeButton} onClick={handleRemove}>
        Remove
      </button>
    </li>
  );
}
