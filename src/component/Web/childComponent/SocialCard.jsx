import Grid from "@mui/material/Grid";
import {Avatar, Box, Typography} from "@mui/material";
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
    width: "20px",
    lineHeight: "20px",
    borderRadius: "50%",
    textAlign: "center",
    fontSize: "12px",
    backgroundColor: "#5F95F5",
    fontWeight: "100",
    color: "#FFF"
}))

const ProfileCard = () => {
    return(
        <Box sx={{
            "&:hover":{
                backgroundColor: "lineColor.main",
                cursor: "pointer"
            }
        }}>
        <Grid container direction="row" justifyContent="flex-start" alignItems="center" sx={{
            width: "100%"
        }}>
            <Grid item sx={{
                width: "auto",
                paddingLeft: "24px"
            }}>
                <Avatar sx={{ bgcolor: "#5F95F5", marginLeft: "auto", marginRight: "auto"}} aria-label="profile">
                    N
                </Avatar>
            </Grid>
            <Grid item xs={true} sx={{
                paddingLeft: "13px",
                paddingRight: "10px"
            }}>
            <Grid container="row" justifyContent="space-between">
                <Grid item>
                    <Grid container direction="column">
                        <ProfileName>Name</ProfileName>
                        <ProfileInfo>This is the Chat ...</ProfileInfo>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid continer direction="column" justifyContent="space-between">
                        <Grid item>
                            <LastSeen>wed</LastSeen>
                        </Grid>
                        <Grid item >
                            <MsgCount textAlign="center">20</MsgCount>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Grid>
            </Grid>
        </Box>
    )
}
export default ProfileCard;