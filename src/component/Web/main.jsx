import { useEffect, useState } from "react";
import { Fragment } from "react";
import CreateNewClient from "./CreateNewClient";
import DashBoard from "./DashBoard";
import Leftpane from "./childComponent/Dashboardbar.jsx";
import { CssBaseline } from "@mui/material";
import Grid from "@mui/material/Grid";
import ChatArea from "./ChatArea";

const Main = () => {
  const [userInformation, setUserInformation] = useState({
    isLoggedin: false,
    Information: {},
  });
  useEffect(() => {
    console.log("uin");
    const localStorage = window.localStorage;
    const flag = localStorage.getItem("isAccessToken");
    if (flag) {
      const userInfo = {
        baseUrl: window.localStorage.getItem("base_url"),
        accessToken: window.localStorage.getItem("access_token"),
        userId: window.localStorage.getItem("user_id"),
        deviceId: window.localStorage.getItem("device_id"),
      };
      setUserInformation((prevState) => ({
        ...prevState,
        isLoggedin: true,
        Information: {
          ...prevState.Information,
          ...userInfo,
        },
      }));
    }
  }, []);
  const loggedUserInfo = (status, userInfo) => {
    console.log(status, userInfo);
    console.log({ ...userInfo });
    setUserInformation((prevState) => ({
      ...prevState,
      isLoggedin: status,
      Information: {
        ...prevState.Information,
        ...userInfo,
      },
    }));
  };
  return (
    <>
      <ChatArea />
    </>
  );
};
export default Main;
/**
 *
      {userInformation.isLoggedin === true ? (
        <DashBoard userInformation={userInformation.Information} />
      ) : (
        <CreateNewClient userData={loggedUserInfo} />
      )}
 *
 *
 * */
