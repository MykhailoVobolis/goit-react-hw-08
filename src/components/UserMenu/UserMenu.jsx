import { useDispatch, useSelector } from "react-redux";

import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import { Avatar, IconButton, Tooltip, Typography, tooltipClasses } from "@mui/material";
import { styled } from "@mui/material/styles";
import LogoutIcon from "@mui/icons-material/Logout";

import { Fragment } from "react";

import { stringToColor } from "../../helpers/toColor";

import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut());
  };

  const AvatarTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(
    ({ theme }) => ({
      [`& .${tooltipClasses.tooltip}`]: {
        color: "rgba(240, 244, 249, 0.75)",
        fontSize: theme.typography.pxToRem(12),
      },
    })
  );

  return (
    <div className={css.wrapper}>
      <AvatarTooltip
        title={
          <Fragment>
            <Typography color="#f0f4f9" fontSize={"12px"} fontWeight={"700"}>
              Phonebook Account
            </Typography>
            <b>{user.name}</b>
            <p>{user.email}</p>
          </Fragment>
        }>
        <Avatar
          aria-label="user"
          sx={{
            bgcolor: stringToColor(user.name),
            width: 36,
            height: 36,
          }}>
          {user.name[0].toUpperCase()}
        </Avatar>
      </AvatarTooltip>
      <Tooltip title="Logout">
        <IconButton type="button" onClick={handleLogout}>
          <LogoutIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}
