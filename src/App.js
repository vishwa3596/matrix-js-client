import "./App.css";
import { ThemeProvider } from "@mui/material";
import {darkTheme, lightTheme} from "./component/individualComponents/Theme";
import Pingweb from "./component/Web/main";

function App() {
  console.log("app is loaded");
  return (
    <ThemeProvider theme={lightTheme}>
			<Pingweb />
    </ThemeProvider>
  );
}

export default App;
