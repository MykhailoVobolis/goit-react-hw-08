import { Box, Typography } from "@mui/material";
import PageTitle from "../../components/PageTitle/PageTitle";

import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      {/* <div className={css.container}>
        <PageTitle>
          Hello! This is your phone book{" "}
          <span role="img" aria-label="Greeting icon">
            💁🏼
          </span>
        </PageTitle>
        <p>
          To start using, please register. After registration, you will be able to add, store and delete your friends'
          phone numbers. Now your contacts are always with you!
        </p>
      </div> */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          padding: "36px",
          marginTop: "120px",
          borderRadius: "28px",
        }}>
        <Box>
          <Typography variant="h4" sx={{ paddingTop: "34px", fontSize: "40px", marginBottom: "12px" }}>
            Phonebook app
          </Typography>
          <Typography variant="body1">
            To begin using the application, you need to register. Once registered, you can manage your friends' phone
            numbers by adding, storing, and deleting them. Now you can always have your contacts with you!
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
