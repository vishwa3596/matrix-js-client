import { Event } from "./util/event";
import React from "react";
import ChatArea from "./ChatArea";
const DashBoard = (props) => {
  const userInformation = props.userInformation;
  console.log(userInformation);
  Event(userInformation);
  return <React.Fragment>
    <ChatArea />
  </React.Fragment>;
};

export default DashBoard;
