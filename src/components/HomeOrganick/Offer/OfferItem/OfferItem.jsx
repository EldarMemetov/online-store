import styles from "./OfferItem.module.css";

export function OfferItem({
  name,
  category,
  originalPrice,
  discountPrice,
  imageUrl,
}) {
  return (
    <div className={styles.offerItem}>
      <img src={imageUrl} alt={name} className={styles.image} />
      <div className={styles.info}>
        <p className={styles.category}>{category}</p>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.prices}>
          <span className={styles.originalPrice}>
            ${originalPrice.toFixed(2)}
          </span>
          <span className={styles.discountPrice}>
            ${discountPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
