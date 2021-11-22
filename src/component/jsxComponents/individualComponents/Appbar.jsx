import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";

const TabStyle = styled(Tab)(({ theme }) => ({
  fontSize: "0.8em",
  textTransform: "none",
  fontWeight: 700,
}));
const TabContainer = styled(Tabs)(({ theme }) => ({
  marginLeft: "auto",
}));
const PaddedDiv = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginBottom: "1.7em",
}));
const DisplayName = styled(Typography)(({ theme }) => ({
  fontFamily: "Montez",
  fontSize: "1.9em",
  fontWeight: 600,
}));

const Appbar = () => {
  const [value, onChangeValue] = useState("one");
  const changeTab = (e, newValue) => {
    onChangeValue(newValue);
  };
  return (
    <React.Fragment>
      <AppBar
        sx={{ borderBottom: 1, borderColor: "secondary.main" }}
        color="appbarColor"
        elevation={0}
        disableGutters
      >
        <Toolbar>
          <DisplayName>Ping</DisplayName>
          <TabContainer
            value={value}
            onChange={changeTab}
            textColor="primary"
            indicatorColor="appbarColor.main"
          >
            <TabStyle label="Home" value="one" />
            <TabStyle label="Ping web" value="two" />
            <TabStyle label="Ping Download" value="three" />
            <TabStyle label="About us" value="four" />
          </TabContainer>
        </Toolbar>
      </AppBar>
      <PaddedDiv />
    </React.Fragment>
  );
};

export default Appbar;
