import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";

import css from "./Contact.module.css";

export default function Contact({ contacts: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.mainContainer}>
      <div className={css.border}></div>
      <div className={css.container}>
        <div className={css.containerItem}>
          <p>
            <FaUser className={css.icon} />
            {name}
          </p>
          <p>
            <FaPhone className={css.icon} />
            {number}
          </p>
        </div>
        <button className={css.btnDel} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
