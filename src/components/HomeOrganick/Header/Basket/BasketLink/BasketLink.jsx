import { useSelector } from "react-redux";
import { BasketItems } from "../BasketItems/BasketItems";
import styles from "./BasketLink.module.css";

export function BasketLink() {
  const items = useSelector((state) => state.basket.items);

  const totalPrice = items.reduce(
    (total, item) => total + (item.salePrice || 0) * (item.quantity || 1),
    0
  );

  return (
    <section className={styles.basketListContainer}>
      <h1>Your Basket</h1>
      {items.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <>
          <ul className={styles.basketList}>
            {items.map((item) => (
              <BasketItems key={item.id} {...item} />
            ))}
          </ul>
          <div className={styles.basketSummary}>
            <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
          </div>
        </>
      )}
    </section>
  );
}
