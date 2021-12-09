import * as React from "react";

import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { Scrollbars } from "react-custom-scrollbars";

import SocialCard from "./SocialCard";

const useStyles = makeStyles((theme) => ({
  root: {
    "&::-webkit-scrollbar": {
      width: 7,
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "darkgrey",
      outline: `0.8px solid slategrey`,
    },
  },
}));
const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    borderRadius: 6,
    backgroundColor: "#AEAEAE",
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

const CustomScrollbars = (props) => (
  <Scrollbars
    renderThumbHorizontal={renderThumb}
    renderThumbVertical={renderThumb}
    {...props}
  />
);
const SocialScroll = (props) => {
  const classes = useStyles();
  return (
    <Box
      className={classes.root}
      sx={{
        width: "100%",
        height: "93vh",
      }}
    >
      <CustomScrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
        {props.roomList.map(e => <SocialCard key={e.name} eachRoom={e}/>)}
      </CustomScrollbars>
    </Box>
  );
};

export default SocialScroll;
