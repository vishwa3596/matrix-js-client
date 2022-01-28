import {Fragment, useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import SocialWindow from "./childComponent/dashboardBar/SocialWindow.jsx";
import ChatWindow from "./childComponent/chatWindow/ChatWindow.jsx";
import { CssBaseline } from "@mui/material";
import RoomData from "./util/RoomData.js";
import SelectChat from "./childComponent/selectChat/main";
import { socialWindowStore } from "./util/CentralStore/CentralStoreMain.js";

const ChatArea = () => {
  const [roomInformation, onUpdatingRoomInformation] = useState({})

  useEffect(() => {
    const loadRoomData = async() => {
      await RoomData();
    }
    loadRoomData();
  },[])

  socialWindowStore.subscribe(() => {
    let roomData = socialWindowStore.getState();
    if(roomData !== undefined){
      roomData = roomData.CentralReducer.currentActive;
      if(roomData.roomId.length > 0){
        onUpdatingRoomInformation(roomData);
      }
    }
  })

  return (
    <Fragment>
      <Grid container direction="row">
        <CssBaseline />
        <Grid
              item xs={5} sm={5} md={4} lg={3} xl={3}>
          <SocialWindow/>
        </Grid>
        <Grid
              item xs={7} sm={7} md={8} lg={9} xl={9}>
          {Object.keys(roomInformation).length === 0 ?
              <SelectChat /> : <ChatWindow roomInformation={roomInformation}/>}
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default ChatArea;