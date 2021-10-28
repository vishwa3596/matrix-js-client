import react, {useState, useEffect} from "react";
import login from "./login";

const CreateNewClient = () => {
    const [username, setUsername] = useState("Initial Name");
    useEffect(() => {
	console.log("variable is changed")
    },[username]);

    const connectAndEngage = async() => {
	const val = await login();
	console.log(val);
    }

    
    return(
	<div>
	    {username}
	    <div>
	    <button onClick={connectAndEngage}> Click </button>
	    </div>
	</div>
    );
}

export default CreateNewClient;
