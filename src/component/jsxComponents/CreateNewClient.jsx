import { login } from "../jsUtil/login";
import RegistrationForm from "./form";
import Box from "@mui/material/Box";

const CreateNewClient = () => {
  const loginInfo = async (username, password) => {
    const val = await login(username, password);
    console.log(val);
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
      }}
    >
      <h1> ping </h1>
      <RegistrationForm onSavingData={loginInfo} />
    </Box>
  );
};

export default CreateNewClient;
