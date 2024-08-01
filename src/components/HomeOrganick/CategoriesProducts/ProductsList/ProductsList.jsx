import { useState } from "react";
import CategoriesProducts from "../ProductsItems/ProductsItems";
import styles from "./ProductsList.module.css";

const ProductList = ({ items }) => {
  const [visibleCount, setVisibleCount] = useState(3);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const displayedItems = items.slice(0, visibleCount);

  return (
    <section className={styles.productSection}>
      <div className={styles.productContainer}>
        <ul className={styles.productList}>
          {displayedItems.map((item) => (
            <CategoriesProducts key={item.id} {...item} />
          ))}
        </ul>
        {visibleCount < items.length && (
          <button className={styles.loadMoreButton} onClick={loadMore}>
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default ProductList;
