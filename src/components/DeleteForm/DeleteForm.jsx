import { toast } from "react-hot-toast";
import { Box, Typography, Button, IconButton } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/modal/slice";
import { addCurrentDeleteContact } from "../../redux/contacts/slice";
import { deleteContact } from "../../redux/contacts/operations";
import { selectCurrentDeleteContact } from "../../redux/contacts/selectors";

export default function DeleteForm() {
  const dispatch = useDispatch();
  const curentContact = useSelector(selectCurrentDeleteContact);

  const id = curentContact.id;

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then((reponse) => {
        // toast.success("Success!!!");
      })
      .catch((error) => {
        toast.error("Error!!!");
      });
    dispatch(addCurrentDeleteContact(null));
    dispatch(closeModal());
  };

  const handleClose = () => {
    dispatch(addCurrentDeleteContact(null));
    dispatch(closeModal());
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          alignItems: "center",
          backgroundColor: "#ffffff",
          width: "330px",
          padding: "24px",
          marginBottom: "20px",
          borderRadius: "14px",
        }}>
        <IconButton sx={{ width: "40px", marginLeft: "auto" }} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <Typography variant="body1">Are you sure to delete contact?</Typography>
        <Button
          variant="contained"
          size="large"
          type={"button"}
          color="error"
          sx={{ width: "185px", marginLeft: "auto", marginRight: "auto", borderRadius: "42px" }}
          onClick={handleDelete}>
          Delete contact
        </Button>
      </Box>
    </div>
  );
}
