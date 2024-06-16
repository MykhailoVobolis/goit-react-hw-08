import Contact from "../Contact/Contact";

import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/filters/selectors";

import css from "./ContactList.module.css";

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  // Сортування масиву контактів за алфавітом
  const sortVisibleContacts = visibleContacts.toSorted((firstContact, secondContact) =>
    firstContact.name.localeCompare(secondContact.name)
  );

  return (
    <>
      <ul className={css.container}>
        {sortVisibleContacts.map((contacts) => (
          <li key={contacts.id}>
            <Contact contacts={contacts} />
          </li>
        ))}
      </ul>
    </>
  );
}
