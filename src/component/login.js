import sdk from "matrix-js-sdk"

const Client = sdk.createClient("https://matrix.org")
const login = async() => {
    const client = await Client.login("m.login.password",{"user":"vishwarhunt",
							  "password":"8043/5/2009v"});
    console.log(" from log in js" , client);
    Client.startClient();
    Client.once('sync', (state, prevState, res) => {
	console.log("after syncing the states", state);
    });

    Client.on("Room.timeline", (event, room, toStartOfTimeline) => {
	console.log("after on the Room.timeline", event.event);
    });
    
}


export default login;
