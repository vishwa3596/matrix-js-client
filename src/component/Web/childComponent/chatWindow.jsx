import { Fragment } from "react";
import React from "react";
import Grid from "@mui/material/Grid";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const ChatWindow = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Fragment>
      <Grid container direction="column">
        <Grid
          item
          sx={{
            borderBottom: 1,
            borderColor: "gray.main",
          }}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                textTransform: "none",
                fontWeight: 500,
                marginLeft: "2rem",
              }}
            >
              name
            </Typography>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="icon tabs example"
            >
              <Tab icon={<PhoneIcon />} aria-label="phone" />
              <Tab icon={<SearchIcon />} aria-label="search" />
              <Tab icon={<MoreVertIcon />} aria-label="more" />
            </Tabs>
          </Toolbar>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ChatWindow;
