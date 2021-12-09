import Grid from "@mui/material/Grid";
import {Avatar, Box, Paper, Toolbar, Typography} from "@mui/material";
import React from "react";
import {styled} from "@mui/styles";
import {alpha} from "@mui/system";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
const ProfileName = styled(Typography)(({theme}) => ({
    fontSize: "16px",
    fontWeight: "500",
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

const ProfileCard = (props) => {
    const room = props.room;
    const userName = room.name;
    let NotificationValue;
    let notificationCount = room.notificationCounts.total;
    if(notificationCount === undefined){
        NotificationValue = (<Box sx={{display: 'flex', justifyContent: 'center'}}>
            <ErrorOutlineOutlinedIcon color="warning" sx={{ fontSize: 20}}/>
        </Box>)
    }else{
        if(parseInt(notificationCount) >= 1000){
            notificationCount = Math.ceil(parseInt(notificationCount)/1000)
            notificationCount = notificationCount.toString()+"K"
        }
        NotificationValue = <MsgCount>{notificationCount}</MsgCount>
    }
    return(
        <Box sx={{

        }}>
            <Toolbar sx={{
                justifyItems: "center",
                width: "100%",

            }}>
                <Paper elevation={0} sx={{
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    width: "100%" ,
                    "&:hover": {
                        backgroundColor: "#F2EEEE",
                        cursor: "pointer",
                        borderRadius: "5px"
                    }}}>
                    <Avatar sx={{ bgcolor: "#5F95F5", p: '12px'}} aria-label="profile">
                        N
                    </Avatar>
                    <Grid container direction="row" sx={{ ml: 1, flex: 1 , justifyContent: "center"}} alignItems="center">
                        <Grid item xs={10}>
                            <ProfileName>{userName}</ProfileName>
                        </Grid>
                        <Grid item xs={2}>
                            <LastSeen>wed</LastSeen>
                        </Grid>
                        <Grid item xs={10}>
                            <ProfileInfo>This is chat...</ProfileInfo>
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
export default ProfileCard;
