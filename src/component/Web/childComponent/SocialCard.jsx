import { Fragment } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import PersonIcon from "@mui/icons-material/Person";

import { Toolbar } from "@mui/material";
const ChatName = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem",
}));
const LastChat = styled(Typography)(({ theme }) => ({
  fontSize: "0.7rem",
}));
/**
 * 2 component inside the box will be there like
 * */
const SocialCard = () => {
  const handleClick = () => {
    alert("this is me");
  };

  return (
    <Fragment>
      <Box
        sx={{
          "&:hover": { backgroundColor: "#F2EEEE", borderRadius: "5px" },
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <Toolbar></Toolbar>
      </Box>
    </Fragment>
  );
};

export default SocialCard;
