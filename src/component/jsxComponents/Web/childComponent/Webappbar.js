import Appbar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const DisplayName = styled(Typography)(({ theme }) => ({
  fontFamily: "Montez",
  fontSize: "2.3em",
  fontWeight: 600,
  alingSelf: "center",
}));
const PaddedDiv = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginBottom: "3rem",
}));

const Webappbar = () => {
  return (
    <>
      <Appbar
        elevation={0}
        color="appbarColor"
        sx={{
          flexGrow: 1,
          alignItems: "center",
        }}
      >
        <Toolbar>
          <DisplayName color="primary"> Ping </DisplayName>
        </Toolbar>
      </Appbar>
      <PaddedDiv />
    </>
  );
};

export default Webappbar;
