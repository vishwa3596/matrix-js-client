import { Fragment } from "react";
import Grid from "@mui/material/Grid";
import SocialWindow from "./childComponent/Dashboardbar";
import ChatWindow from "./childComponent/chatWindow";
import { CssBaseline } from "@mui/material";

const chatArea = () => {
  return (
    <Fragment>
      <Grid container direction="row">
        <CssBaseline />
        <Grid item xs={4}>
          <SocialWindow />
        </Grid>
        <Grid item xs={8}>
          <ChatWindow />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default chatArea;
