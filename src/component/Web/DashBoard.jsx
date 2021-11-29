import { Event } from "./util/event";
import React from "react";
const DashBoard = (props) => {
  const userInformation = props.userInformation;
  console.log(userInformation);
  Event(userInformation);
  return <React.Fragment>Welcome - {userInformation.userId}</React.Fragment>;
};

export default DashBoard;
