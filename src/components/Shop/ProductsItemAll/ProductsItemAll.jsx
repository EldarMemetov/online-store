import styles from "./ProductsItemAll.module.css";
import { RatingAllProducts } from "../RatingAllProducts/RatingAllProducts";

const ProductsItemAll = ({
  name,
  category,
  originalPrice,
  salePrice,
  imageUrl,
  rating,
}) => {
  return (
    <li className={styles.productCard}>
      <img src={imageUrl} alt={name} className={styles.productImage} />
      <h2 className={styles.productName}>{name}</h2>
      <p className={styles.productCategory}>{category}</p>
      <div className={styles.productPrice}>
        {salePrice ? (
          <>
            <span className={styles.originalPrice}>${originalPrice}</span>
            <span className={styles.salePrice}>${salePrice}</span>
          </>
        ) : (
          <span>${originalPrice}</span>
        )}
      </div>
      <RatingAllProducts rating={rating} />
      <button className={styles.buyButton}>Buy</button>
    </li>
  );
};

export default ProductsItemAll;
