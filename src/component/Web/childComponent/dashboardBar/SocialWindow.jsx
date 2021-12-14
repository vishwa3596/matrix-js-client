import { Fragment } from "react";
import {Box, Toolbar} from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, alpha } from "@mui/system";
import { InputBase } from "@mui/material";
import SocialScroll from "./SocialScroll";
import Paper from "@mui/material/Paper";
import {Divider} from "@material-ui/core";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  borderColor: theme.palette.common.blueA,
  backgroundColor: alpha(theme.palette.lineColor.main, 0.5),
  "&:hover": {
    backgroundColor: alpha(theme.palette.lineColor.main, 1),
  },
  marginLeft: 0,
  width: "100%",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  backgroundColor: alpha(theme.palette.lineColor.main, 0.5),
  borderRadius: "10px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
  "&:hover": {
    backgroundColor: alpha(theme.palette.lineColor.main, 0.8),
  },
  "&:after": {
    backgroundColor: "#FFF",
  },
}));

const socialWindow = (props) => {
  console.log(props.roomList);
  const handleSearchClick = () => {};
  return (
    <Fragment>
      <Box>
      <Toolbar>
              <Paper
                  component="form"
                  elevation={0}
                  sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
              >
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <Search>
                  <StyledInputBase
                      placeholder="Search"
                      inputProps={{ 'aria-label': 'search chat' }}
                  />
                </Search>
              </Paper>
      </Toolbar>
      </Box>
      <SocialScroll onSelectingChat={props.onSelectingChat} roomList={props.roomList}/>
    </Fragment>

  );
};

export default socialWindow;