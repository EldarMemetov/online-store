import styles from "./HomeOrganick.module.css";

export const HomeOrganick = () => {
  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <p className={styles.foodText}>100% Natural Food</p>
        <h1 className={styles.ChooseText}>
          Choose the best healthier way of life
        </h1>
        <button className={styles.buttonExplore}>Explore Now</button>
      </div>
    </div>
  );
};
