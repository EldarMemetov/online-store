import ProductsItemAll from "../ProductsItemAll/ProductsItemAll";
import styles from "./ProductsListAll.module.css";

const ProductsListAll = ({ items }) => {
  return (
    <section className={styles.productSection}>
      <div className={styles.productContainer}>
        <ul className={styles.productList}>
          {items.map((item) => (
            <ProductsItemAll key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductsListAll;
