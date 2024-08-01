import styles from "./SearchInput.module.css";

export function SearchInput() {
  return (
    <div className={styles.searchContainer}>
      <label></label>

      <div className={styles.inputWrapper}>
        <input
          type="text"
          id="search"
          className={styles.searchInput}
          placeholder="Search..."
        />
      </div>
    </div>
  );
}
