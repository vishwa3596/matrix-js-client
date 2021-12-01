import { Event } from "./util/event";
import React from "react";
import DashBoardbar from "./childComponent/Dashboardbar";
const DashBoard = (props) => {
  const userInformation = props.userInformation;
  console.log(userInformation);
  Event(userInformation);
  return <React.Fragment>
    <DashBoardbar />
  </React.Fragment>;
};

export default DashBoard;
