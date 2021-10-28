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
	    console.log("after syncing the states", state);
	});

	Client.on("Room.timeline", (event, room, toStartOfTimeline) => {
	    console.log("after on the Room.timeline", event.event);
	});
    }
    catch{
	console.log("login failed")
    }
}


export {
    login, createClient
};
