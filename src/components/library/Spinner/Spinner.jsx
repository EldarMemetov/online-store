import { Hourglass } from "react-loader-spinner";
import styles from "./Spinner.module.css";

const Spinner = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className={styles.loaderOverlay}>
      <Hourglass
        visible={true}
        height={80}
        width={80}
        ariaLabel="hourglass-loading"
        colors={["#306cce", "#72a1ed"]}
      />
    </div>
  );
};

export default Spinner;
