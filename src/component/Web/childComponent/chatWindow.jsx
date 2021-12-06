import { Fragment } from "react";
import React from "react";
import Grid from "@mui/material/Grid";
import {CardHeader, Toolbar, Typography} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MsgField from "./MsgField";
import ProfileCard from "./ProfileCard.jsx";
const ChatWindow = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Fragment>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        sx={{ height: "100%" }}
      >
        <Grid
          item
          sx={{
            borderBottom: 1,
            borderColor: "lineColor.main",
          }}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
            }}
          >
            <ProfileCard />

            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="icon tabs example"
            >
              <Tab
                sx={{ minWidth: 50 }}
                icon={<SearchIcon />}
                aria-label="search"
              />
              <Tab
                sx={{
                  minWidth: 50,
                }}
                icon={<PhoneIcon />}
                aria-label="phone"
              />
              <Tab
                sx={{ minWidth: 50 }}
                icon={<MoreVertIcon />}
                aria-label="more"
              />
            </Tabs>
          </Toolbar>
        </Grid>
        <Grid item sx={{ marginTop: "auto" }}>
          <MsgField />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ChatWindow;
