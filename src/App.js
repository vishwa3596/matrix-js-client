import Homepage from "./component/jsxComponents/Homepage";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import theme from "./component/jsxComponents/individualComponents/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
