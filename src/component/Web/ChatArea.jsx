import {Fragment, useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import SocialWindow from "./childComponent/dashboardBar/SocialWindow.jsx";
import ChatWindow from "./childComponent/chatWindow/chatWindow.jsx";
import { CssBaseline } from "@mui/material";
import RoomData from "./util/RoomData.js";
import SelectChat from "./childComponent/selectChat/main";
const ChatArea = () => {
  const [RoomList, onSettingRoomList] = useState([]);
  const [userInformation, onUpdatingUserInformation] = useState({})
  useEffect(() => {
    const loadRoomData = async() => {
      await RoomData(onSettingRoomList);
    }
    loadRoomData();
  },[])
  const chatSelected = (userInformation) => {
    onUpdatingUserInformation(userInformation);
  }

  return (
    <Fragment>
      <Grid container direction="row">
        <CssBaseline />
        <Grid item xs={3}>
          <SocialWindow onSelectingChat={chatSelected} roomList={RoomList}/>
        </Grid>
        <Grid item xs={9}>
          {Object.keys(userInformation).length === 0 ?
              <SelectChat /> : <ChatWindow userInformation={userInformation}/>}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ChatArea;
