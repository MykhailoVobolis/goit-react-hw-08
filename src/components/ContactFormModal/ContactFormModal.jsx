import Modal from "react-modal";
import ContactForm from "../ContactForm/ContactForm";
import EditForm from "../EditForm/EditForm";

import { useSelector } from "react-redux";
import { selectCurrentContact } from "../../redux/contacts/selectors";

import css from "./ContactFormModal.module.css";

Modal.setAppElement("#root");

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: "none",
    borderRadius: "14px",
  },
};

export default function ContactFormModal({ isOpen, onClose }) {
  const curerentContacts = useSelector(selectCurrentContact);

  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={{
        base: css.modalContainer,
        afterOpen: css.openedModalContainer,
        beforeClose: css.closedModalContainer,
      }}
      style={modalStyles}
      closeTimeoutMS={500}
      onRequestClose={onClose}>
      {!curerentContacts ? <ContactForm /> : <EditForm />}
    </Modal>
  );
}
