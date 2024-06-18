import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { toast } from "react-hot-toast";
import { TextField, Button, IconButton } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { closeModal } from "../../redux/modal/slice";

import MaskedInput from "../MaskedInput/MaskedInput";

import css from "./ContactForm.module.css";

// Валідація полів форми
const regex = {
  // Регулярні вираз для поля форми Number
  phoneNumber: /^[+]{1}[0-9]{2}[(]{1}[0-9]{3}[)]{1}[0-9]{3}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/,
};

// Об'єкт Yup валідації полів форми
const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .matches(regex.phoneNumber, "Number format: +38(000)000-00-00")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId(); // Створення ідентифікаторів
  const numberFieldId = useId(); // полів форми

  // Початкове значення полів форми
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
      .unwrap()
      .then((reponse) => {
        // toast.success("Success!!!");
      })
      .catch((error) => {
        toast.error("Error!!!");
      });
    dispatch(closeModal());
    actions.resetForm();
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
        <Form className={css.container}>
          <IconButton sx={{ width: "40px", marginLeft: "auto" }} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <div className={css.inputContainer}>
            <Field as={TextField} id={nameFieldId} label="Name" type="text" name="name" required />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.inputContainer}>
            <Field
              id={numberFieldId}
              label="Number"
              type="tel"
              name="number"
              component={MaskedInput}
              placeholder="+38(___)___-__-__"
              required
            />
            <ErrorMessage className={css.error} name="number" component="span" />
          </div>
          <Button
            variant="contained"
            size="large"
            type={"submit"}
            sx={{ width: "150px", marginLeft: "auto", marginRight: "auto", borderRadius: "42px" }}>
            Add contact
          </Button>
        </Form>
      </Formik>
    </>
  );
}
