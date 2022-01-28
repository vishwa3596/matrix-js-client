import Grid from "@mui/material/Grid";
import {Avatar, Typography} from "@mui/material";
import React, {useState} from "react";
import {styled} from "@mui/styles";
import {alpha} from "@mui/system";

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

const ProfileCard = (props) => {
    console.log("in here ", props.roomInformation);
    return(
        <Grid container direction="row" justifyContent="flex-start" alignItems="center">
            <Grid item>
            <Avatar sx={{width: 45, height: 45}} aria-label="profile" src={props.roomInformation.roomAvatar} alt="P"/>
            </Grid>
            <Grid item sx={{
                marginLeft: "5px",
                paddingLeft: "5px"
            }}>
                <Grid container direction="column">
                    <ProfileName>{props.roomInformation.roomId}</ProfileName>
                    <ProfileInfo>Last Seen 5 m ago</ProfileInfo>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default ProfileCard;