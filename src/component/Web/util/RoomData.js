import getClient from "./client.js";
import { socialWindowStore } from "./CentralStore/CentralStoreMain.js";
global.Olm = require('olm')
/**
 * This function is to get the latest joined Rooms list to render onto the server and also to attach different.
 * */
const RoomData = async () => {
    const client = await getClient();
    const rooms = client.getRooms();
    rooms.forEach(e => console.log(e.name, " ",client.isRoomEncrypted(e.roomId)));
    let roomData = rooms.map(e => ({
        "name": e.name,
        "notification": e.getUnreadNotificationCount(),
        "avatarUrl": e.getAvatarUrl(client.baseUrl, 24, 24, "scale" , true),
        "roomId": e.roomId,
        "LastMsg": "This is the last msg..."
    }))
    roomData.forEach(e => socialWindowStore.dispatch({type: "appendContactToList", payload: e}));
    client.on("Room.timeline", async (event, room, toStartOfTime) => {
        console.log(event.getSender(), " ", event.getType(), " ", room.name);
        if(event.getType() === "m.room.encrypted"){
            const response = await event.attemptDecryption(client.crypto, {isRetry: true})
            console.log(response);
            console.log("err")
            console.log(room.roomId, " ", event.getContent().ciphertext);
        }
        if (event.getType() === "m.room.message") {
            console.log("(%s) %s :: %s", room.name, event.getSender(), event.getContent().body, client.isRoomEncrypted(room.roomId), " ", room.getUnreadNotificationCount());
            const updateInfo = {
                "roomId": room.roomId,
                "LastMsg": event.getContent().body,
                "notification": room.getUnreadNotificationCount()
            }
            socialWindowStore.dispatch({type: "updateLastestMsgForRoom", payload: updateInfo});
        }
    })
    client.on("User.currentlyActive", (event, user) => {
        let newCurrentlyActiveUser = user.currentlyActive;
        console.log(newCurrentlyActiveUser);
    })
    socialWindowStore.subscribe(() => {
        console.log(socialWindowStore.getState());
    });
}
export default RoomData;