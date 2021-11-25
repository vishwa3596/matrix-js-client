import { createTheme } from "@mui/material/styles";

const blueA = "#5F95F5";
const blueB = "#63C4FF";
const blueC = "#66D9E8";
const greenA = "#63FFE6";
const greenB = "#5FF5B3";
const white = "#FFF";
const theme = createTheme({
  palette: {
    common: {
      blueA: `${blueA}`,
      blueB: `${blueB}`,
      blueC: `${blueC}`,
      greenA: `${greenA}`,
      greenB: `${greenB}`,
    },
    primary: {
      main: `${blueA}`,
    },
    secondary: {
      main: `${blueB}`,
    },
    appbarColor: {
      main: `${white}`,
    },
  },
});

export default theme;
