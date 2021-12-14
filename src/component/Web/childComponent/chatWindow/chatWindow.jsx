import { Fragment } from "react";
import React from "react";
import Grid from "@mui/material/Grid";
import {Toolbar} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MsgField from "./MsgField";
import ProfileCard from "./ProfileCard.jsx";
import {IconButton} from "@material-ui/core";

const ChatWindow = (props) => {
    console.log(props.userInformation);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        sx={{ height: "100%",  borderLeft: 1,
            borderColor: "lineColor.main", }}
      >
        <Toolbar
          sx={{
            borderBottom: 1,
              borderColor: "lineColor.main"

          }}
        >
              <ProfileCard userInformation={props.userInformation}/>
            <IconButton aria-label="search">
                <SearchIcon />
            </IconButton>
            <IconButton aria-label="Phone">
                <PhoneIcon />
            </IconButton>
            <IconButton aria-label="Options">
                <MoreVertIcon />
            </IconButton>
          </Toolbar>
        <Grid item sx={{ marginTop: "auto" }}>
          <MsgField />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ChatWindow;