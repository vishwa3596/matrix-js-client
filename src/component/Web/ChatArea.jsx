import {Fragment, useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import SocialWindow from "./childComponent/dashboardBar/SocialWindow.jsx";
import ChatWindow from "./childComponent/chatWindow/ChatWindow.jsx";
import { CssBaseline } from "@mui/material";
import RoomData from "./util/RoomData.js";
import SelectChat from "./childComponent/selectChat/main";
const ChatArea = () => {
  const [RoomList, onSettingRoomList] = useState([]);
  const [userInformation, onUpdatingUserInformation] = useState({})
  const [updatedRoomList, onUpdatingRoomList] = useState([]);
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
        <Grid
              item xs={5} sm={5} md={4} lg={3} xl={3}>
          <SocialWindow onSelectingChat={chatSelected} roomList={RoomList}/>
        </Grid>
        <Grid
              item xs={7} sm={7} md={8} lg={9} xl={9}>
          {Object.keys(userInformation).length === 0 ?
              <SelectChat /> : <ChatWindow userInformation={userInformation}/>}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ChatArea;