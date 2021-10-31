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
import Button from '@mui/material/Button';
import './form.css'

const RegistrationForm = (props) => {
    const [values, setValues] = useState({
	username: '',
	amount: '',
	password: '',
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

    const handleSubmit = () => {
	const username = values.username;
	const password  = values.password;
	props.onSavingData(username, password);
    }
	
    return(
	<Box
	    component="form"
	    sx={{
		'& > :not(style)': { m: 1, width: '25ch' },
		'border': `${1}px solid`,
		'borderRadius': 3,
		'display': 'inline-grid',
		'gap': 5
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
	<Button variant="contained" color="success" onClick={handleSubmit}> Login </Button>
	</Box>
    );
}

export default RegistrationForm;
