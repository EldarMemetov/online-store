import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./FormRegistration.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../../../redux/auth/operations";
import toast from "react-hot-toast";
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

function FormRegistration({ toggleModal }) {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .then(() => {
        toast.success("Login successful!");
        console.log("Registration successful");
        actions.resetForm();
        toggleModal();
      })
      .catch((error) => {
        toast.error("Registration failed. Please try again.");
        console.error("Registration failed:", error);
      });
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" className={styles.field} />
            <ErrorMessage
              name="name"
              component="span"
              className={styles.error}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" className={styles.field} />
            <ErrorMessage
              name="email"
              component="span"
              className={styles.error}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" className={styles.field} />
            <ErrorMessage
              name="password"
              component="span"
              className={styles.error}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormRegistration;
