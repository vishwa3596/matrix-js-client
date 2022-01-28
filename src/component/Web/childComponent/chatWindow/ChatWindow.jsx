import {Fragment} from "react";
import React from "react";
import Grid from "@mui/material/Grid";
import {Box, Toolbar} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ProfileCard from "./ProfileCard.jsx";
import {IconButton} from "@material-ui/core";
import MsgBox from "../MsgArea/MsgBox.jsx";
import MsgField from "../MsgArea/MsgField.jsx";

const ChatWindow = (props) => {
    console.log(props.roomInformation);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Fragment>
            <Box sx={{
                height: "100%",
                borderLeft: 1,
                borderColor: "lineColor.main"
            }}>
                <Toolbar
                    position="sticky"
                    sx={{
                        borderBottom: 1,
                        borderColor: "lineColor.main"

                    }}
                >
                    <ProfileCard roomInformation={props.roomInformation}/>
                    <IconButton aria-label="search">
                        <SearchIcon/>
                    </IconButton>
                    <IconButton aria-label="Phone">
                        <PhoneIcon/>
                    </IconButton>
                    <IconButton aria-label="Options">
                        <MoreVertIcon/>
                    </IconButton>
                </Toolbar>
                <MsgBox/>
            </Box>
        </Fragment>
    );
};

export default ChatWindow;