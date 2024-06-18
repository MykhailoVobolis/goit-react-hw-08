import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { toast } from "react-hot-toast";
import { TextField, Button, IconButton } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { useDispatch, useSelector } from "react-redux";
import { selectCurrentContact } from "../../redux/contacts/selectors";
import { addCurrentContact } from "../../redux/contacts/slice";
import { closeModal } from "../../redux/modal/slice";
import { editContact } from "../../redux/contacts/operations";

import MaskedInput from "../MaskedInput/MaskedInput";

import css from "./EditForm.module.css";

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

export default function EditForm() {
  const nameFieldId = useId(); // Створення ідентифікаторів
  const numberFieldId = useId(); // полів форми

  const dispatch = useDispatch();
  const curentContact = useSelector(selectCurrentContact);
  const handleClose = () => {
    dispatch(addCurrentContact(null));
    dispatch(closeModal());
  };

  // Початкове значення полів форми
  const initialValues = {
    name: curentContact.name,
    number: curentContact.number,
  };

  const curentContactId = curentContact.id;

  const handleSubmit = (values, actions) => {
    dispatch(editContact({ curentContactId, values }))
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

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
        <Form className={css.container}>
          <IconButton sx={{ width: "40px", marginLeft: "auto" }} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <div className={css.inputContainer}>
            <Field
              as={TextField}
              id={nameFieldId}
              label="Name"
              type="text"
              name="name"
              //  size="small"
            />
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
              // size="small"
            />
            <ErrorMessage className={css.error} name="number" component="span" />
          </div>
          <div className={css.btnContainer}>
            <Button
              variant="contained"
              type="submit"
              size="large"
              sx={{ width: "158px", marginLeft: "auto", marginRight: "auto", borderRadius: "40px" }}>
              Save Contact
            </Button>
          </div>
        </Form>
      </Formik>
    </>
  );
}
