import PageTitle from "../../components/PageTitle/PageTitle";
import ContactForm from "../../components/ContactForm/ContactForm";
import EditForm from "../../components/EditForm/EditForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading, selectError, selectCurrentContact } from "../../redux/contacts/selectors";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import { Fab, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ContactFormModal from "../../components/ContactFormModal/ContactFormModal";
import { openModal, closeModal } from "../../redux/modal/slice";
import { selectStateModal } from "../../redux/modal/selectors";
import { addCurrentContact } from "../../redux/contacts/slice";

import css from "../ContactsPage/ContactsPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  // const curerentContacts = useSelector(selectCurrentContact);
  const isOpen = useSelector(selectStateModal);
  const visibleContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
    dispatch(addCurrentContact(null));
  };

  return (
    <div>
      {/* <PageTitle>Your contacts</PageTitle> */}
      {/* {!curerentContacts ? <ContactForm /> : <EditForm />} */}
      <ContactFormModal isOpen={isOpen} onClose={handleCloseModal} />
      {visibleContacts.length > 0 && <SearchBox />}
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
