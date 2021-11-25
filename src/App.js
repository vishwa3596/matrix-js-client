import "./App.css";
import { ThemeProvider } from "@mui/material";
import theme from "./component/jsxComponents/individualComponents/Theme";
import Pingweb from "./component/jsxComponents/Web/main.jsx";

function App() {
  console.log("app is loaded");
  return (
    <ThemeProvider theme={theme}>
      <Pingweb />
    </ThemeProvider>
  );
}

export default App;
