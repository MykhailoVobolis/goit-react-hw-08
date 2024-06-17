import { Box, Typography } from "@mui/material";

import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
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
