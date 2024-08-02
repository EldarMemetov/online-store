import { useNavigate } from "react-router-dom";
import styles from "./ProductsItems.module.css";
import { ProductsRating } from "../ProductsRating/ProductsRating";

const ProductsItems = ({
  name,
  category,
  price,
  discountedPrice,
  image,
  rating,
}) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/Shop`);
  };

  return (
    <li className={styles.productCard}>
      <img src={image} alt={name} className={styles.productImage} />
      <h2 className={styles.productName}>{name}</h2>
      <p className={styles.productCategory}>{category}</p>
      <div className={styles.productPrice}>
        {discountedPrice ? (
          <>
            <span className={styles.originalPrice}>${price.toFixed(2)}</span>
            <span className={styles.discountedPrice}>
              ${discountedPrice.toFixed(2)}
            </span>
          </>
        ) : (
          <span>${price.toFixed(2)}</span>
        )}
      </div>
      <ProductsRating rating={rating} />
      <button className={styles.buyButton} onClick={handleProductClick}>
        Go to product
      </button>
    </li>
  );
};

export default ProductsItems;
