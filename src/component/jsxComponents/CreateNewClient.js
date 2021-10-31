import react, {useState, useEffect} from "react";
import { login } from "../jsUtil/login"
import RegistrationForm from "./form"
import Box from "@mui/material/Box"

const CreateNewClient = () => {
    const [values, setValues] = useState({
	username: '',
	password: '',
    })

    const loginInfo = async(username, password) => {
	console.log(" in to this ");
	setValues({
	    ...values,
	    username: username,
	    password: password,
	})
	const val = await login(values.username, values.password);
	console.log(val);
    }
	
    
    return(
	    <Box sx={{
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)'
	    }}
	    >
	    <h1> ping </h1>
	    <RegistrationForm handleSubmit={loginInfo}/>
	    </Box>
    );
}

export default CreateNewClient;
