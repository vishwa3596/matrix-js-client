import getClient from "./client.js";

/**
 * This function is to get the lastest joined Rooms list to render onto the server and also to attach diffrerent
 * events.
 * */

const RoomData = async (onSettingRoomList) => {
    const client = await getClient();
    const rooms = client.getRooms();
    let listofAvatar = []
    console.log(client);
    rooms.forEach(e=> {
        listofAvatar.push({
            "room": e,
            "name": e.name,
            "notification": e.notificationCounts,
            "avatarUrl":e.getAvatarUrl(client.baseUrl, 24, 24, "scale" , true),
            "lastMsg": "LastMsg",
            "latestTime": "wed"
        });
    });
    const userid = (window.localStorage.user_id);
    client.on("User.avatarUrl", (event, user) => {
        console.log(user.avatarUrl," ", user.name);
    })
    client.on("Room.timeline", (event, room, toStartOfTime) => {
        if (event.getType() !== "m.room.message") {
            return;
        }
        console.log("(%s) %s :: %s", room.name, event.getSender(), event.getContent().body);
    })
    const user = client.getUser(userid)
    console.log(user.avatarUrl);
    onSettingRoomList(listofAvatar);
}

export default RoomData;