import react, {useState} from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const RegistrationForm = () => {
    const [values, setValues] = useState({
	username: '',
	amount: '',
	password: '',
	weight: '',
	weightRange: '',
	showPassword: false,
    });


    const handleUsernameChange = (event) => {
	setValues({...values, username: event.target.value
	})
    }
    const handlePasswordChange = (event) => {
	setValues({...values, password: event.target.value});
    };

    const handleClickShowPassword = () => {
	setValues({
	    ...values,
	    ['showPassword']: !values.showPassword,
	})
    }
    const handleMouseDownPassword = () => {
	setValues({
	    ...values,
	    showPassword: !values.showPassword,
	})
    }
	
    return(
	<Box
	    component="form"
	    sx={{
		'& > :not(style)': { m: 1, width: '25ch' },
	    }}
	    noValidate
	    autoComplete="off"
	>
	    <TextField id="outlined-basic"
		       value={values.username}
		       label="username"
		       variant="outlined"
		       onClick={handleUsernameChange}
	    />
	<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handlePasswordChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
	</Box>
    );
}

export default RegistrationForm;
