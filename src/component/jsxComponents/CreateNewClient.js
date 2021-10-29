import react, {useState, useEffect} from "react";
import { login } from "../jsUtil/login"
import RegistrationForm from "./form"

const CreateNewClient = () => {
    const connectAndEngage = async() => {
	const val = await login();
	console.log(val);
    }
    
    return(
	    <>
	    <RegistrationForm/>
	    </>
    );
}

export default CreateNewClient;
