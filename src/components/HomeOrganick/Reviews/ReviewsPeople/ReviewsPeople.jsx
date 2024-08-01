import styles from "./ReviewsPeople.module.css";
import { IoMdPerson } from "react-icons/io";

export function ReviewsPeople({ name, role, photoUrl, testimonial }) {
  return (
    <div className={styles.reviewCard}>
      {photoUrl ? (
        <img src={photoUrl} alt={name} className={styles.photo} />
      ) : (
        <div className={styles.noImage}>
          <IoMdPerson size={50} />
        </div>
      )}
      <p className={styles.testimonial}>
        {testimonial || "No testimonial provided"}
      </p>
      <h3 className={styles.name}>{name || "Anonymous"}</h3>
      <p className={styles.role}>{role || "No role specified"}</p>
    </div>
  );
}
