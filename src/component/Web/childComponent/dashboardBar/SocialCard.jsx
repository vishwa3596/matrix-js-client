import Grid from "@mui/material/Grid";
import {Avatar, Box, Paper, Toolbar, Typography} from "@mui/material";
import React, {useState} from "react";
import {styled} from "@mui/styles";
import {alpha} from "@mui/system";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import dp from "./assests/dp.jpg"
import axios from "axios";
import { socialWindowStore } from "../../util/CentralStore/CentralStoreMain";

const ProfileName = styled(Typography)(({theme}) => ({
    fontSize: "16px",
    fontWeight: "600",
    color: alpha("#000", 0.8)
}))

const ProfileInfo = styled(Typography)(({theme}) => ({
    fontSize: "14px",
    fontWeight: "100",
    color: alpha(theme.palette.textColor.main, 1)
}))

const LastSeen = styled(Typography)(({theme}) => ({
    fontSize: "0.7rem",
    fontWeight: "100",
    color: alpha(theme.palette.textColor.main, 1),
    textAlign: "center"
}))

const MsgCount = styled(Typography)(({theme}) => ({
    fontSize: "0.7rem",
    fontWeight: "900",
    color: alpha(theme.palette.common.blueA, 1),
    textAlign: "center"
}))

const SocialCard = (props) => {
    const [AvatarUrl, onSettingavatarUrl] = useState("");
    const [shouldRender, onShouldRender] = useState(false);
    const eachRoom = props.eachRoom;
    const userName = eachRoom.name;
    let NotificationValue;
    let notificationCount = undefined;
    notificationCount = eachRoom.notification;
    const avatarUrl = eachRoom.avatarUrl;
    let msg = eachRoom.lastMsg;
    msg = msg.substr(0, 30);
    let avatar;
    axios.get(avatarUrl ,{
        responseType: "arraybuffer"
    }).then(response => {
        let base64ImageString = Buffer.from(response.data, 'binary').toString('base64')
        let url = `data:image/png;base64,${base64ImageString}`;
        onSettingavatarUrl(url);
    }).catch(err=>{
        onSettingavatarUrl(dp);
    })

    if(notificationCount === undefined){
        NotificationValue = (<Box sx={{display: 'flex', justifyContent: 'center'}}>
            <ErrorOutlineOutlinedIcon color="warning" sx={{ fontSize: 20}}/>
        </Box>)
    }
    else{
        if(parseInt(notificationCount) >= 1000){
            notificationCount = parseInt(notificationCount)/1000
            notificationCount = notificationCount.toString().substr(0, 3)+"K"
        }
        NotificationValue = <MsgCount>{notificationCount}</MsgCount>
    }
    const onClickingChat = () => {
        console.log("here clicking")
        onShouldRender(true);
        const user = {
            roomAvatar: AvatarUrl,
            roomId: userName
        };
        socialWindowStore.dispatch({type: "currentRoomInformation", payload: user});
    }
    return(
        <Box>
            <Toolbar sx={{
                justifyItems: "center",
                width: "100%",

            }}>
                <Paper elevation={0} onClick={onClickingChat}sx={{
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    width: "100%" ,
                    "&:hover": {
                        backgroundColor: "#F2EEEE",
                        cursor: "pointer",
                        borderRadius: "5px"
                    }}}>
                    {AvatarUrl.length > 0 ?
                        <Avatar sx={{width: 45, height: 45}} aria-label="profile" src={AvatarUrl} alt="P"/>:
                        <Avatar sx={{ bgcolor: "#5F95F5", p: '12px', width: 45, height: 45}} aria-label="profile">N</Avatar>}
                    <Grid container direction="row" sx={{
                        ml: 1,
                        flex: 1 ,
                        justifyContent: "center"
                    }} alignItems="center">
                        <Grid item xs={10}>
                            <ProfileName>{userName}</ProfileName>
                        </Grid>
                        <Grid item xs={2}>
                            <LastSeen>wed</LastSeen>
                        </Grid>
                        <Grid item xs={10}>
                            <ProfileInfo>{msg}</ProfileInfo>
                        </Grid>
                        <Grid item xs={2} sx={{
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: 21
                        }}>
                            {NotificationValue}
                        </Grid>
                    </Grid>
                </Paper>
            </Toolbar>
        </Box>
    )
}
export default SocialCard;