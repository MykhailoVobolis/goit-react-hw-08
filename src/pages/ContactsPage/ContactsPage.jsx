import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

import { Fab, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading, selectError } from "../../redux/contacts/selectors";
import { openModal, closeModal } from "../../redux/modal/slice";
import { selectStateModal } from "../../redux/modal/selectors";
import { addCurrentContact, addCurrentDeleteContact } from "../../redux/contacts/slice";

import ContactFormModal from "../../components/ContactFormModal/ContactFormModal";

import css from "../ContactsPage/ContactsPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const isOpen = useSelector(selectStateModal);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
    dispatch(addCurrentContact(null));
    dispatch(addCurrentDeleteContact(null));
  };

  return (
    <div className={css.contactsContainer}>
      <ContactFormModal isOpen={isOpen} onClose={handleCloseModal} />
      <SearchBox />
      {error && <Error>Login to the app</Error>}
      <ContactList />
      {loading && <Loader>Please wait</Loader>}
      <Tooltip title="Add contact" placement="left">
        <Fab
          color="primary"
          aria-label="add"
          size="medium"
          sx={{ position: "fixed", bottom: "5%", right: "5%", zIndex: "theme.zIndex.tooltip" }}
          onClick={handleOpenModal}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}
