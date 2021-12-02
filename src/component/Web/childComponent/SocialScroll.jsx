import * as React from "react";
import Box from "@mui/material/Box";
import SocialCard from "./SocialCard";
import { List } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "&::-webkit-scrollbar": {
      width: 7,
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "darkgrey",
      outline: `1px solid slategrey`,
    },
  },
}));

const SocialScroll = () => {
  const classes = useStyles();
  return (
    <Box
      className={classes.root}
      sx={{
        width: "100%",
        height: "93vh",
      }}
    >
      <List
        sx={{
          height: "100%",
          overflow: "auto",
        }}
        disablePadding
      >
        <SocialCard />
        <SocialCard />
        <SocialCard />
        <SocialCard />
        <SocialCard />
        <SocialCard />
        <SocialCard />
        <SocialCard />
        <SocialCard />
        <SocialCard />
        <SocialCard />
        <SocialCard />
        <SocialCard />
        <SocialCard />
        <SocialCard />
      </List>
    </Box>
  );
};

export default SocialScroll;
