import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../../../redux/auth/operations";
import toast from "react-hot-toast";
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

function LoginForm({ toggleModal }) {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .then(() => {
        toast.success("Login successful!");
        console.log("Login successful");
        actions.resetForm();
        toggleModal();
      })
      .catch((error) => {
        toast.error("Login failed. Please try again.");
        console.error("Login failed:", error);
      });
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={styles.form}>
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
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
