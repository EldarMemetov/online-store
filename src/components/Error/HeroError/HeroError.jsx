import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./HeroError.module.css";

export function HeroError() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.heroErrorContainer}>
      <div className={styles.content}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.errorMessage}>Page not found</h2>
        <p className={styles.errorDescription}>
          The page you are looking for does not exist or has been moved
        </p>
        <button className={styles.homeButton} onClick={handleHomeClick}>
          Go to Homepage <FaRegArrowAltCircleRight />
        </button>
      </div>
    </div>
  );
}
