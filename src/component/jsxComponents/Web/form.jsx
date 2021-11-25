import react, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import "./form.css";

const RegistrationForm = (props) => {
  const [values, setValues] = useState({
    username: "",
    amount: "",
    password: "",
    showPassword: false,
  });

  const handleUsernameChange = (event) => {
    setValues({
      ...values,
      username: event.target.value,
    });
  };
  const handlePasswordChange = (event) => {
    setValues({ ...values, password: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = () => {
    const username = values.username;
    const password = values.password;
    props.onSavingData(username, password);
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid container direction="column" alignItems="center">
        <Grid
          item
          sx={{
            mx: 2,
            my: 2,
            minWidth: "20%",
          }}
        >
          <TextField
            fullWidth
            id="outlined-basic"
            label="username"
            variant="outlined"
            value={values.username}
            onChange={handleUsernameChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    sx={{ visibility: "hidden" }}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid
          item
          sx={{
            mx: 2,
            my: 2,
            minWidth: "20%",
          }}
        >
          <TextField
            fullWidth
            label="Password"
            className="passwordField"
            variant="outlined"
            type={values.showPassword ? "text" : "password"}
            onChange={handlePasswordChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <Button fullWidth onClick={handleSubmit} variant="contained">
            Login
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RegistrationForm;
