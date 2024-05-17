import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";

import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then((reponse) => {
        toast.success("Success!!!");
      })
      .catch((error) => {
        toast.error("Log in error!!!");
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}>
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field className={css.inputValue} type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.inputValue} type="password" name="password" />
        </label>
        <button className={css.btnAdd} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
}
