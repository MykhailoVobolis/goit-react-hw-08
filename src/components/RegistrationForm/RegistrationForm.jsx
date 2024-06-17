import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { TextField, Button, Box, Typography } from "@mui/material";

import { register } from "../../redux/auth/operations";

import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then((reponse) => {
        // toast.success("Success!!!");
      })
      .catch((error) => {
        toast.error("Registration error!!!");
      });
    actions.resetForm();
  };

  return (
    <div className={css.container}>
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
          <Typography
            variant="h4"
            sx={{ paddingTop: "34px", fontSize: "40px", marginBottom: "12px", maxWidth: "400px" }}>
            Create a Phonebook Account
          </Typography>
          <Typography variant="body1">Enter your name and email</Typography>
        </Box>

        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}>
          <Form className={css.form} autoComplete="off">
            <Field as={TextField} label="Username" type="text" name="name" autoFocus required />
            <Field as={TextField} label="Email" type="email" name="email" required />
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
    </div>
  );
}
