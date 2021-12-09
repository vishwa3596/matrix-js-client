import sdk from "matrix-js-sdk";
import getClient from "./client.js";
/**
 * This function is to get the lastest joined Rooms list to render onto the server and also to attach diffrerent
 * events.
 *
 *
 * */

const RoomData = async (onSettingRoomList) => {
    const client = await getClient();
    const rooms = client.getRooms();
    onSettingRoomList(rooms);
    let listOfRooms = []
    client.on("Room.accountData", (event, room) => {
        if(event.getType() === "m.room.avatar"){
            console.log(event.getContent())
        }
        if(event.getType() === "m.room.colorscheme"){
            console.log(event.getContent());
        }
    })
    console.log(listOfRooms);
}

export default RoomData;