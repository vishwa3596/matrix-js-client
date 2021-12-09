import {Fragment, useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import SocialWindow from "./childComponent/Dashboardbar";
import ChatWindow from "./childComponent/chatWindow";
import { CssBaseline } from "@mui/material";
import RoomData from "./util/RoomData.js";
const ChatArea = () => {
  const [RoomList, onSettingRoomList] = useState([]);
  useEffect(() => {
    const loadRoomData = async() => {
      await RoomData(onSettingRoomList);
    }
    loadRoomData();
  },[])
  return (
    <Fragment>
      <Grid container direction="row">
        <CssBaseline />
        <Grid item xs={4}>
          <SocialWindow roomList={RoomList}/>
        </Grid>
        <Grid item xs={8}>
          <ChatWindow />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ChatArea;
