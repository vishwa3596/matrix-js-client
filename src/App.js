import "./App.css";
import { ThemeProvider } from "@mui/material";
import { lightTheme} from "./component/individualComponents/Theme";
import PingWeb from "./component/Web/main";
import {Provider} from "react-redux";
import {socialWindowStore} from "./component/Web/util/CentralStore/CentralStoreMain.js";

function App() {
  console.log("app is loaded");
  return (
    <ThemeProvider theme={lightTheme}>
        <Provider store={socialWindowStore}>
            <PingWeb />
        </Provider>
    </ThemeProvider>
  );
}

export default App;
