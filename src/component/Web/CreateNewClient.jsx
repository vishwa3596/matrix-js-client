import { login } from "./util/login.js";
import RegistrationForm from "./childComponent/form";
import Box from "@mui/material/Box";
import Webappbar from "./childComponent/Webappbar.js";

const CreateNewClient = (props) => {
  const loginInfo = async (username, password) => {
    try {
      await login(username, password);
      const userInfo = {
        baseUrl: window.localStorage.getItem("base_url"),
        accessToken: window.localStorage.getItem("access_token"),
        userId: window.localStorage.getItem("user_id"),
        deviceId: window.localStorage.getItem("device_id"),
      };
      props.userData(true, userInfo);
    } catch {
      console.log("in catch");
    }
  };
  return (
    <Box>
      <Webappbar />
      <RegistrationForm onSavingData={loginInfo} />
    </Box>
  );
};

export default CreateNewClient;
