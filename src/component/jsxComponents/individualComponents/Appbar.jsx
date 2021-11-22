import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import theme from "./Theme.jsx";
const useStyles = makeStyles((theme) => ({
  toobarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1em",
  },
  tabContainerStyle: {
    marginLeft: "auto",
  },
  tabStyle: {
    fontSize: "0.9rem",
  },
}));

const Appbar = (props) => {
  const [value, onChangeValue] = useState("one");
  const changeTab = (e, newValue) => {
    onChangeValue(newValue);
  };
  const classes = useStyles(theme);
  return (
    <React.Fragment>
      <AppBar color="appbarColor" elevation={0}>
        <Toolbar>
          <Typography>Ping</Typography>
          <Tabs
            value={value}
            onChange={changeTab}
            textColor="primary"
            indicatorColor="primary"
            className={classes.tabContainerStyle}
          >
            <Tab
              sx={{
                textTransform: "none",
                fontWeight: 900,
              }}
              label="Home"
              value="one"
            />
            <Tab
              sx={{
                textTransform: "none",
                fontWeight: 900,
              }}
              label="Ping web"
              value="two"
            />
            <Tab
              sx={{
                textTransform: "none",
                fontWeight: 900,
              }}
              label="Ping Download"
              value="three"
            />
            <Tab
              sx={{
                textTransform: "none",
                fontWeight: 900,
              }}
              className={classes.tabStyle}
              label="About us"
              value="four"
            />
          </Tabs>
        </Toolbar>
      </AppBar>
      <div className={classes.toobarMargin} />
    </React.Fragment>
  );
};

export default Appbar;
