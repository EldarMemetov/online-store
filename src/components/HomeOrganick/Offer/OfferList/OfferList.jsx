import { OfferItem } from "../OfferItem/OfferItem";
import styles from "./OfferList.module.css";
import offers from "../offerData/offerData.json";

export function OfferList() {
  return (
    <section className={styles.offerListSection}>
      <p className={styles.subtitle}>Offer</p>
      <div className={styles.offerListHeader}>
        <h2 className={styles.title}>We Offer Organic For You</h2>
        <button className={styles.buttonClick}>View All Product</button>
      </div>
      <div className={styles.offerList}>
        {offers.map((offer) => (
          <OfferItem
            key={offer.name}
            name={offer.name}
            category={offer.category}
            originalPrice={offer.originalPrice}
            discountPrice={offer.discountPrice}
            imageUrl={offer.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}
