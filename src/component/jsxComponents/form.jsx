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
import './form.css'

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
	setValues({
	    ...values,
	    username: event.target.value
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
    const handleMouseDownPassword = (event) => {
	event.preventDefault();
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
		    onChange={handleUsernameChange}
	/>
	<TextField
	    label="Password"
	    className="passwordField"
	    variant="outlined"
	    type={values.showPassword?'text':'password'}
	    onChange={handlePasswordChange}
	    InputProps={{ // <-- This is where the toggle button is added.
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
		)
	    }}
	/>
	</Box>
    );
}

export default RegistrationForm;
