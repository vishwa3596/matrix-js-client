import { createTheme } from "@mui/material/styles";

const greenDark = "#43E86B";
const greenDarkMinus = "#4FF246";
const greenMatte = "#84DB4B";
const limeGreen = "#C7F246";
const yellow = "#E8E343";
const white = "#FFF";
const theme = createTheme({
  palette: {
    common: {
      greenDark: `${greenDark}`,
      greenDarkMinus: `${greenDarkMinus}`,
      greenMatte: `${greenMatte}`,
      limeGreen: `${limeGreen}`,
      yellow: `${yellow}`,
    },
    primary: {
      main: `${greenDark}`,
    },
    secondary: {
      main: `${greenDarkMinus}`,
    },
    appbarColor: {
      main: `${white}`,
    },
  },
});

export default theme;
