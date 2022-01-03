import getClient from "./client.js";
global.Olm = require('olm')
/**
 * This function is to get the latest joined Rooms list to render onto the server and also to attach different.
 * */

const RoomData = async (onSettingRoomList) => {
    const client = await getClient();
    const rooms = client.getRooms();
    rooms.forEach(e => console.log(e.name, " ",client.isRoomEncrypted(e.roomId)));
    const roomData = rooms.map(e => ({
        "name": e.name,
        "notification": e.getUnreadNotificationCount(),
        "avatarUrl": e.getAvatarUrl(client.baseUrl, 24, 24, "scale" , true),
        "roomId": e.roomId,
        "LastMsg": "This is the last msg..."
    }))
    //roomStore.dispatch(renderingUserList(roomData));
    //console.log(" after first update ", roomStore.getState())

    client.on("Room.timeline", async (event, room, toStartOfTime) => {
        if(event.getType() === "m.room.encrypted"){
            const response = await event.attemptDecryption(client.crypto, {isRetry: true})
            console.log(response);
            console.log("err")
            console.log(room.roomId, " ", event.getContent().ciphertext);
        }
        if (event.getType() === "m.room.message") {
            console.log("(%s) %s :: %s", room.name, event.getSender(), event.getContent().body, client.isRoomEncrypted(room.roomId));
            roomData.forEach(e => {
                if(e.name === room.name){
                    e.notification = room.getUnreadNotificationCount()
                    e.LastMsg = event.getContent().body
                }
            })
            //roomStore.dispatch(renderingUserList(roomData));
            //console.log(" after second update ", roomStore.getState())
        }
        console.log(roomData);
        onSettingRoomList(roomData);
    })
    onSettingRoomList(roomData);
}
export default RoomData;