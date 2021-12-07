import Grid from "@mui/material/Grid";
import {Avatar, Box, Paper, Toolbar, Typography} from "@mui/material";
import React from "react";
import {styled} from "@mui/styles";
import {alpha} from "@mui/system";

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

const ProfileCard = () => {
    return(
        <Box sx={{
            "&:hover":{
                cursor: "pointer",
                backgroundColor: "#F2EEEE"
            }
        }}>
            <Toolbar sx={{
                justifyItems: "center",
                width: "100%",
                "&:hover":{
                    cursor: "pointer",
                    backgroundColor: "#F2EEEE"
                }
            }}>
                <Paper elevation={0} sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" , "&:hover": {
                        borderColor: "lineColor.main",
                    }}}>
                    <Avatar sx={{ bgcolor: "#5F95F5", p: '12px'}} aria-label="profile">
                        N
                    </Avatar>
                    <Grid container direction="row" sx={{ ml: 1, flex: 1 }} alignItems="center">
                        <Grid item xs={10}>
                            <ProfileName>Name</ProfileName>
                        </Grid>
                        <Grid item xs={2}>
                            <LastSeen>wed</LastSeen>
                        </Grid>
                        <Grid item xs={10}>
                            <ProfileInfo>This is chat...</ProfileInfo>
                        </Grid>
                        <Grid item xs={2} sx={{
                            justifyContent: "center"
                        }}>
                            <MsgCount >100</MsgCount>
                        </Grid>
                    </Grid>
                </Paper>

            </Toolbar>
        </Box>

    )
}
export default ProfileCard;
