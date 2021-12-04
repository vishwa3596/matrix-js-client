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
import MsgField from "./MsgField";
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
            <Grid container direction="column">
              <Typography
                sx={{
                  fontSize: "17.5px",
                  textTransform: "none",
                  fontWeight: 700,
                  marginLeft: "2rem",
                }}
              >
                Name
              </Typography>
              <Typography
                sx={{
                  fontSize: "17px",
                  textTransform: "none",
                  fontWeight: 200,
                  marginLeft: "2rem",
                  color: "#AEAEAE",
                }}
              >
                last seen 5m ago
              </Typography>
            </Grid>
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
