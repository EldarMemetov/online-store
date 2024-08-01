import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./InputSubscrible.module.css";
import Loader from "../../../library/Spinner/Spinner";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
});

const InputSubscribe = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (values, actions) => {
    setIsSubmitting(true);
    console.log("Submitted email:", values.email);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowMessage(true);
      actions.resetForm();
    }, 2000);
  };

  return (
    <div className={styles.inputSubscribeContainer}>
      <Loader isLoading={isSubmitting} />
      <h2 className={styles.heading}>Subscribe to our Newsletter</h2>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={styles.form}>
            <div className={styles.containerForm}>
              <Field
                name="email"
                type="email"
                placeholder="Your Email Address"
                className={styles.inputField}
              />
              <ErrorMessage
                name="email"
                component="span"
                className={styles.spanError}
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Subscribe
            </button>
          </Form>
        )}
      </Formik>
      {showMessage && (
        <div className={styles.thankYouMessage}>
          Thank you for subscribing! We have received your email.
        </div>
      )}
    </div>
  );
};

export default InputSubscribe;
