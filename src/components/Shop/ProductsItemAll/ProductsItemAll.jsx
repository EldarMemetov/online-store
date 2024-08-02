// components/ProductsItemAll/ProductsItemAll.jsx
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/nutrition/basketSlice";
import styles from "./ProductsItemAll.module.css";
import { RatingAllProducts } from "../RatingAllProducts/RatingAllProducts";

const ProductsItemAll = ({
  id,
  name,
  category,
  originalPrice,
  salePrice,
  imageUrl,
  rating,
}) => {
  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    const item = { id, name, imageUrl, salePrice };
    dispatch(addItem(item));
  };

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
      <button className={styles.buyButton} onClick={handleAddToBasket}>
        Add to Basket
      </button>
    </li>
  );
};

export default ProductsItemAll;
