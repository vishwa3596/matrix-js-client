import "./App.css";
import { ThemeProvider } from "@mui/material";
import theme from "./component/individualComponents/Theme";
import Pingweb from "./component/Web/main";
import Spinner from "./component/Web/childComponent/Spinner.jsx";

function App() {
  console.log("app is loaded");
  return (
    <ThemeProvider theme={theme}>
			<Pingweb />
    </ThemeProvider>
  );
}

export default App;
