import { FaUser, FaPhone } from "react-icons/fa6";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";

import { deleteContact } from "../../redux/contacts/operations";
import { addCurrentContact } from "../../redux/contacts/slice";
import { openModal } from "../../redux/modal/slice";
import { useDispatch } from "react-redux";

import { stringToColor } from "../../helpers/toColor";

import { Avatar, Card, CardActions, CardContent, IconButton, Link, Typography } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import PhoneIcon from "@mui/icons-material/Phone";

import css from "./Contact.module.css";

export default function Contact({ contacts: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  const handleEdit = () => {
    dispatch(addCurrentContact({ id, name, number }));
    dispatch(openModal());
  };

  return (
    <div
    // className={css.mainContainer}
    >
      {/* <div className={css.border}></div>
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
      </div> */}
      <Card sx={{ width: 330, display: "flex", justifyContent: "space-between", padding: "12px" }}>
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "4px", justifyContent: "center", padding: "0" }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ display: "flex", gap: "14px", alignItems: "center" }}>
            <Avatar
              aria-label="recipe"
              sx={{
                // bgcolor: stringToColor(name),
                width: 36,
                height: 36,
              }}>
              {name[0].toUpperCase()}
            </Avatar>
            {name}
          </Typography>
          <Typography variant="body1" sx={{ display: "flex", alignItems: "center", gap: "18px", marginLeft: "8px" }}>
            <PhoneIcon />
            <Link href={`tel:${number}`} underline="none" color="inherit">
              {number}
            </Link>
            {/* {number} */}
          </Typography>
        </CardContent>
        <CardActions sx={{ padding: "0", alignItems: "start" }}>
          <IconButton aria-label="edit contact" sx={{ minWidth: "36px", padding: "8px" }} onClick={handleEdit}>
            <EditOutlinedIcon sx={{ width: "24px", height: "24px" }} />
          </IconButton>
          <IconButton aria-label="delet contact" sx={{ minWidth: "36px", padding: "8px" }} onClick={handleDelete}>
            <DeleteOutlinedIcon sx={{ width: "24px", height: "24px" }} />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
