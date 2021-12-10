import Grid from "@mui/material/Grid";
import {Avatar, Typography} from "@mui/material";
import React from "react";
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
const ProfileCard = () => {
    return(
        <Grid container direction="row" justifyContent="flex-start" alignItems="center">
            <Grid item>
                <Avatar sx={{ bgcolor: "#5F95F5", marginLeft: "auto", marginRight: "auto", width: 45, height: 45}} aria-label="profile">
                    N
                </Avatar>
            </Grid>
            <Grid item sx={{
                marginLeft: "5px",
                paddingLeft: "5px"
            }}>
                <Grid container direction="column">
                    <ProfileName>Name</ProfileName>
                    <ProfileInfo>Last Seen 5 m ago</ProfileInfo>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default ProfileCard;