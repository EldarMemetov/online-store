import styles from "./ProductsRating.module.css";

export const ProductsRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 !== 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className={styles.ratingStars}>
      {"★".repeat(fullStars)}
      {halfStars === 1 && "☆"}
      {"☆".repeat(emptyStars)}
    </div>
  );
};
