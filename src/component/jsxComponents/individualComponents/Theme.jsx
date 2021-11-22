import { createTheme } from "@mui/material/styles";
const arcBlue = "#9747E6";
const arcOrange = "#D96E30";
const cyan = "#72A693";
const black = "#353537";
const arcYellow = "#D9A13B";
const white = "#FFFFFF";
const theme = createTheme({
  palette: {
    common: {
      arcBlue: `${arcBlue}`,
      arcOrange: `${arcOrange}`,
      cyan: `${cyan}`,
      black: `${black}`,
      arcYellow: `${arcYellow}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcYellow}`,
    },
    appbarColor: {
      main: `${white}`,
    },
  },
  typography: {
    h3: {
      fontWeight: 200,
      color: `red`,
    },
  },
});

export default theme;
