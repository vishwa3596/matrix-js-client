import { login } from "../jsUtil/login.js";
import RegistrationForm from "./form";
import Box from "@mui/material/Box";

const CreateNewClient = () => {
  const loginInfo = async (username, password) => {
    await login(username, password);
  };

  return (
    <Box>
      <RegistrationForm onSavingData={loginInfo} />
    </Box>
  );
};

export default CreateNewClient;
