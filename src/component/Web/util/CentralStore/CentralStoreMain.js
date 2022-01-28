import {combineReducers, createStore} from "@reduxjs/toolkit";
/**
 * state of user is the contact list of the user, the userName, the avatarUrl of the user, currentRoom selected
 * the color mode of the user(Light mode, Dark mode).
 * **/
const initialStateOfUser = {
    "userName": "",
    "baseUrl": "",
    "accessToken": "",
    "deviceId": "",
    "avatarUrl": "",
    "contactList": [],
    "currentActive": {
        "roomId": "",
        "roomAvatar" : "",
        "members": [],
    },
    "colorMode": "lightMode"
}


const CentralReducer = (state=initialStateOfUser, action) => {
    switch(action.type){
        case 'updateLastestMsgForRoom': {
            console.log("updateLatestMsg")
            console.log(action.payload);
            const { roomId, LastMsg, notification} = action.payload;
            let copyList = state.contactList.slice();
            copyList.forEach(e => {
                if(e.roomId === roomId){
                    e.lastMsg = LastMsg
                    e.notification = notification
                }
            })
            return {
                ...state,
                contactList: [...copyList]
            }
        }
        case 'appendContactToList': {
            console.log("appendContactToList");
            console.log(action.payload);
            let copyList = state.contactList.slice();
            const newRoom = {
                "name": action.payload.name,
                "notification": action.payload.notification,
                "avatarUrl": action.payload.avatarUrl,
                "roomId": action.payload.roomId,
                "lastMsg": action.payload.LastMsg,
            }
            copyList = [...copyList, newRoom]
            console.log(copyList)
            return{
                ...state,
                contactList: [...copyList]
            }
        }
        case 'updateUserInformation': {
            return {
                ...state,
                userName: action.payload.userName,
                deviceId: action.payload.deviceId,
                baseUrl: action.payload.baseUrl,
                accessToken: action.payload.accessToken,
            }
        }
        case 'currentRoomInformation': {
            return {
                ...state,
                currentActive: {
                    ...state.currentActive,
                    roomId: action.payload.roomId,
                    roomAvatar: action.payload.roomAvatar
                }
            }
        }
        default: {
            return {
                ...state,
            }
        }   
    }
}
const MainReducer = combineReducers({CentralReducer})

export const socialWindowStore = createStore(
    MainReducer
);