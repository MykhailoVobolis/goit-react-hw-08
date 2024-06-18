import { NavLink, useMatch } from "react-router-dom";

import { useSelector } from "react-redux";
import { Tab, Tabs } from "@mui/material";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const matchHome = useMatch({ path: "/", exact: true });
  const matchContacts = useMatch("/contacts");
  const currentTab = matchHome ? "/" : matchContacts ? "/contacts" : false;

  return (
    <nav>
      <Tabs value={currentTab}>
        <Tab label="Home" value="/" to="/" component={NavLink} />
        {isLoggedIn && <Tab label="Contacts" value="/contacts" to="/contacts" component={NavLink} />}
      </Tabs>
    </nav>
  );
}
