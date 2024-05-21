import { FaUser, FaPhone } from "react-icons/fa6";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";

import { deleteContact } from "../../redux/contacts/operations";
import { addCurrentContact } from "../../redux/contacts/slice";
import { useDispatch } from "react-redux";

import css from "./Contact.module.css";

export default function Contact({ contacts: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  const handleEdit = () => dispatch(addCurrentContact({ id, name, number }));

  return (
    <div className={css.mainContainer}>
      <div className={css.border}></div>
      <div className={css.container}>
        <div className={css.containerItem}>
          <p className={css.contactName}>
            <FaUser className={css.icon} />
            {name}
          </p>
          <p className={css.contactNumber}>
            <FaPhone className={css.icon} />
            {number}
          </p>
        </div>
        <div className={css.btnContainner}>
          <button className={css.btnEdit}>
            <RiEdit2Line className={css.editIcon} onClick={handleEdit} size={20} />
          </button>
          <button className={css.btnDel} onClick={handleDelete}>
            <RiDeleteBinLine className={css.deletIcon} size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
