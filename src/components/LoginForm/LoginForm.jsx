import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";
import { TextField, Button, Box, Typography } from "@mui/material";

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
    // <Formik
    //   initialValues={{
    //     email: "",
    //     password: "",
    //   }}
    //   onSubmit={handleSubmit}>
    //   <Form className={css.form} autoComplete="off">
    //     <label className={css.label}>
    //       Email
    //       <Field className={css.inputValue} type="email" name="email" />
    //     </label>
    //     <label className={css.label}>
    //       Password
    //       <Field className={css.inputValue} type="password" name="password" />
    //     </label>
    //     <button className={css.btnAdd} type="submit">
    //       Log In
    //     </button>
    //   </Form>
    // </Formik>
    <Box
      className={css.mainBox}
      sx={{
        backgroundColor: "#ffffff",
        padding: "36px",
        marginTop: "120px",
        borderRadius: "28px",
        display: "flex",
        justifyContent: "space-between",
      }}>
      <Box>
        <Typography variant="h4" sx={{ paddingTop: "34px", fontSize: "40px", marginBottom: "12px" }}>
          Sign in
        </Typography>
        <Typography variant="body1">to continue to Phonebook</Typography>
      </Box>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}>
        <Form className={css.form} autoComplete="off">
          <Field as={TextField} label="Email" type="email" name="email" autoFocus required />
          <Field
            as={TextField}
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            required
          />
          <Button
            variant="contained"
            size="large"
            type={"submit"}
            sx={{ width: "110px", marginLeft: "auto", borderRadius: "42px" }}>
            Next
          </Button>
        </Form>
      </Formik>
    </Box>
  );
}
