import React from "react";
import Card from "@mui/material/Card";
import { Avatar, Box, CardHeader, Typography } from "@mui/material";
import { alpha } from "@mui/system";
import { styled } from "@mui/system";

const LastSentFont = styled(Typography)(({ theme }) => ({
  fontSize: "0.6rem",
  textAlign: "center",
  fontWeight: "100",
  color: alpha(theme.palette.textColor.main, 1),
}));
const SocialCard = () => {
  return (
    <Card
      sx={{
        width: "100%",
        height: 75,
        paddingRight: "2px",
        "& .MuiCardHeader-action": {
          display: "grid",
          justifyContent: "space-between",
        },
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#5F95F5" }} aria-label="profile">
            {" "}
            N{" "}
          </Avatar>
        }
        title="Contact"
        subheader="this is the chat .. "
        action={
          <Box>
            <LastSentFont> wed </LastSentFont>
            <Typography
              sx={{
                fontSize: "0.7rem",
                textAlign: "Center",
                borderRadius: "50%",
                backgroundColor: "#5F95F5",
                color: "#FFF",
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
