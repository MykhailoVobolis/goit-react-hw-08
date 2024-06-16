import clsx from "clsx";
import { NavLink, useMatch } from "react-router-dom";

import css from "./AuthNav.module.css";
import { Tab, Tabs } from "@mui/material";

// const getNavLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };

export default function AuthNav() {
  const matchRegister = useMatch("/register");
  const matchLogin = useMatch("/login");
  const currentTab = matchRegister ? "/register" : matchLogin ? "/login" : false;

  return (
    // <div>
    //   <NavLink className={getNavLinkClass} to="/register">
    //     Register
    //   </NavLink>
    //   <NavLink className={getNavLinkClass} to="/login">
    //     Log In
    //   </NavLink>
    // </div>
    <Tabs value={currentTab}>
      <Tab label="Register" value="/register" to="/register" component={NavLink} />
      <Tab label="Log In" value="/login" to="/login" component={NavLink} />
    </Tabs>
  );
}
