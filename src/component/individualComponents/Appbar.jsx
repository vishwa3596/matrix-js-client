import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import PingWeb from "../Web/main.jsx";
import Aboutus from "../AboutUs.jsx";
import PingDownload from "../Download/main.jsx";

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
  const allTab = ["/", "/Pingweb", "/PingDownload", "/AboutUs"];
  const [value, onChangeValue] = useState("one");
  const changeTab = (e, newValue) => {
    onChangeValue(newValue);
  };

  return (
    <>
      <AppBar
        sx={{ borderBottom: 1, borderColor: "secondary" }}
        color="appbarColor"
        elevation={0}
      >
        <Toolbar>
          <DisplayName>Ping</DisplayName>
          <BrowserRouter>
            <Route
              path="/"
              element={({ location }) => (
                <React.Fragment>
                  <TabContainer
                    value={location.pathname}
                    onChange={changeTab}
                    textColor="primary"
                    indicatorColor="appbarColor"
                  >
                    <TabStyle
                      label="Home"
                      value="/"
                      component={Link}
                      to={allTab[0]}
                    />
                    <TabStyle
                      label="Home"
                      value="/Pingweb"
                      component={Link}
                      to={allTab[1]}
                    />
                    <TabStyle
                      label="Home"
                      value="/Pingweb"
                      component={Link}
                      to={allTab[2]}
                    />
                    <TabStyle
                      label="Home"
                      value="/Pingweb"
                      component={Link}
                      to={allTab[3]}
                    />
                  </TabContainer>
                  <Routes>
                    <Route path={allTab[1]} element={<PingWeb />} />
                    <Route path={allTab[2]} element={<PingDownload />} />
                    <Route path={allTab[3]} element={<Aboutus />} />
                  </Routes>
                </React.Fragment>
              )}
            />
          </BrowserRouter>
        </Toolbar>
      </AppBar>
      <PaddedDiv />
    </>
  );
};

export default Appbar;
