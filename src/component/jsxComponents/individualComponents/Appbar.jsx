import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles((theme) => ({
  toobarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1em",
  },
  tabStyle: {
    textTransform: "none",
  },
  tabContainerStyle: {
    marginLeft: "auto",
    textTransform: "none",
  },
}));

const Appbar = (props) => {
  const [value, onChangeValue] = useState("one");
  const changeTab = (e, newValue) => {
    onChangeValue(newValue);
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar disabelGutters>
            <Typography>Ping</Typography>
            <Tabs
              value={value}
              onChange={changeTab}
              textColor="secondary"
              indicatorColor="secondary"
              className={classes.tabContainerStyle}
            >
              <Tab className={classes.tabStyle} label="Home" value="one" />
              <Tab className={classes.tabStyle} label="Ping web" value="two" />
              <Tab
                className={classes.tabStyle}
                label="Ping Download"
                value="three"
              />
              <Tab className={classes.tabStyle} label="About us" value="four" />
            </Tabs>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div className={classes.toobarMargin} />
    </React.Fragment>
  );
};

export default Appbar;
