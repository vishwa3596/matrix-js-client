import {combineReducers, createStore} from "@reduxjs/toolkit";
/**
 * state of user is the contact list of the user, the userName, the avatarUrl of the user, currentRoom selected
 * the color mode of the user(Light mode, Dark mode).
 * **/
const initialStateOfUser = {
    "userName": "",
    "avatarUrl": "",
    "contactList": [],
    "currentActiveRoom": "",
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