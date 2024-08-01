import { useState } from "react";
import FormRegistration from "../FormRegistration/FormRegistration";
import LoginForm from "../LoginForm/LoginForm";
import styles from "./LogicalModal.module.css";

function LogicalModal({ toggleModal }) {
  const [activeTab, setActiveTab] = useState("registration");

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h1>{activeTab === "registration" ? "Registration" : "Login"}</h1>
          <button onClick={toggleModal} className={styles.closeButton}>
            X
          </button>
        </div>
        <div className={styles.tabContainer}>
          <button
            className={`${styles.tabButton} ${
              activeTab === "registration" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("registration")}
          >
            Register
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === "login" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
        </div>
        <div className={styles.formContainer}>
          {activeTab === "registration" ? (
            <FormRegistration toggleModal={toggleModal} />
          ) : (
            <LoginForm toggleModal={toggleModal} />
          )}
        </div>
      </div>
    </div>
  );
}

export default LogicalModal;
