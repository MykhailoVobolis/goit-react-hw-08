import PageTitle from "../../components/PageTitle/PageTitle";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading, selectError } from "../../redux/contacts/selectors";

// import TaskEditor from "../../components/TaskEditor/TaskEditor";

export default function ContactsPage() {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <PageTitle>Your contacts</PageTitle>
      <ContactForm />
      <SearchBox />
      {loading && <Loader>Loading message</Loader>}
      {error && <Error>Error message</Error>}
      <ContactList />
      {/* <TaskEditor />
      <div>{isLoading && "Request in progress..."}</div>
      <TaskList /> */}
    </>
  );
}
