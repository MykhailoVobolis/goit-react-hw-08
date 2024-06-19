import { Avatar, Card, CardActions, CardContent, IconButton, Link, Typography } from "@mui/material";

import PhoneIcon from "@mui/icons-material/Phone";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { addCurrentContact, addCurrentDeleteContact } from "../../redux/contacts/slice";
import { openModal } from "../../redux/modal/slice";
import { useDispatch } from "react-redux";

import { stringToColor } from "../../helpers/toColor";

export default function Contact({ contacts: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(addCurrentContact({ id, name, number }));
    dispatch(openModal());
  };

  const handleDelete = () => {
    dispatch(addCurrentDeleteContact({ id }));
    dispatch(openModal());
  };

  return (
    <div>
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
                bgcolor: stringToColor(name),
                width: 36,
                height: 36,
              }}>
              {name[0].toUpperCase()}
            </Avatar>
            {name}
          </Typography>
          <Typography variant="body1" sx={{ display: "flex", alignItems: "center", gap: "18px", marginLeft: "8px" }}>
            <PhoneIcon sx={{ fill: "rgba(0, 0, 0, 0.54)" }} />
            <Link href={`tel:${number}`} underline="none" color="inherit">
              {number}
            </Link>
          </Typography>
        </CardContent>
        <CardActions
          sx={{ padding: "0", alignItems: "start", display: "flex", flexDirection: "column" }}
          disableSpacing>
          <IconButton aria-label="edit contact" sx={{ minWidth: "36px", padding: "8px" }} onClick={handleEdit}>
            <EditIcon sx={{ width: "24px", height: "24px" }} />
          </IconButton>
          <IconButton aria-label="delet contact" sx={{ minWidth: "36px", padding: "8px" }} onClick={handleDelete}>
            <DeleteIcon sx={{ width: "24px", height: "24px" }} />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
