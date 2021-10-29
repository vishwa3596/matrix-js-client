import sdk from "matrix-js-sdk"
import Storage from "./storage"

const createClient = () => {
    return sdk.createClient(Storage.baseUrl);
}
    
const login = async() => {
    const Client = createClient();
    try{
	const client = await Client.login("m.login.password",{"user":Storage.userName,
							  "password":Storage.password});
	console.log(" from log in js" , client);
	Client.startClient();
	Client.once('sync', (state, prevState, res) => {
	    switch(state){
	    case "ERROR":
		console.log("error occured ", state, " ", prevState);
		break;
	    case "SYNCING":
		console.log("syncing");
		break;
	    case "PREPARED":
		const rooms = Client.getRooms();
		console.log(typeof(rooms));
		console.log(rooms);
		break;
	    }
	});
    }
    catch (e){
	console.log("login failed", + e)
    }
}

const registration = async() => {
    /* user registration for the matrix client */

    
}


export {
    login, createClient
};
