import { Fragment } from "react";
import Grid from "@mui/material/Grid";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, alpha } from "@mui/system";
import { InputBase } from "@mui/material";
import { Box } from "@mui/system";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  borderColor: theme.palette.common.blueA,
  backgroundColor: alpha(theme.palette.gray.main, 1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.gray.main, 1),
  },
  marginLeft: 0,
  width: "100%",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  border: 1,
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

const socialWindow = (props) => {
  return (
    <Fragment>
      <Grid
        sx={{
          borderRight: 1,
          borderColor: "gray.main",
        }}
        container
        direction="column"
      >
        <Grid item>
          <AppBar
            sx={{
              backgroundColor: "appbarColor.main",
            }}
            position="static"
            elevation={0}
          >
            <Toolbar
              sx={{
                justifyItems: "start",
              }}
            >
              <IconButton
                size="small"
                edge="start"
                color="primary"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Search>
                <StyledInputBase
                  placeholder="Search"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default socialWindow;
