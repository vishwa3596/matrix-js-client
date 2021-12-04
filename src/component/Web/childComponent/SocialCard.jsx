import React from "react";
import Card from "@mui/material/Card";
import { Avatar, Box, CardHeader, CardMedia, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

const SocialCard = () => {
  return (
    <Card
      sx={{
        width: "100%",
        height: 75,
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#5F95F5" }} aria-label="profile">
            {" "}
            N{" "}
          </Avatar>
        }
        title="ChatName"
        subheader="this is the chat .. "
        action={
          <Box>
            <Typography
              sx={{
                fontSize: "0.875rem",
              }}
            >
              {" "}
              wed{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.8rem",
                textAlign: "Center",
              }}
            >
              {" "}
              2{" "}
            </Typography>
          </Box>
        }
      />
    </Card>
  );
};

export default SocialCard;
