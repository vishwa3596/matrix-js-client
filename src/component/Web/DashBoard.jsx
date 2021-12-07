import React,{useState, useEffect} from "react";

import { Event } from "./util/event";
import ChatArea from "./ChatArea";
import Spinner from "./childComponent/Spinner.jsx";

const DashBoard = (props) => {

	// handle the error
	const [userSyncState, setUserSyncState] = useState("SYNCING");
  const userInformation = props.userInformation;
  console.log(userInformation);

	useEffect(() => {
		Event(userInformation, setUserSyncState);
	}, [] );


  return <React.Fragment>
		{ userSyncState === "SYNCING" ? <Spinner /> : <ChatArea /> }
  </React.Fragment>;
};

export default DashBoard;
