import { Tab, Tabs } from "@mui/material";

import { NavLink, useMatch } from "react-router-dom";

export default function AuthNav() {
  const matchRegister = useMatch("/register");
  const matchLogin = useMatch("/login");
  const currentTab = matchRegister ? "/register" : matchLogin ? "/login" : false;

  return (
    <Tabs value={currentTab}>
      <Tab label="Register" value="/register" to="/register" component={NavLink} />
      <Tab label="Log In" value="/login" to="/login" component={NavLink} />
    </Tabs>
  );
}
