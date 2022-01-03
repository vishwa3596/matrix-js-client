const redux = require('@reduxjs/toolkit');


export const roomListStore = redux.createSlice({
    name: "roomListInformation",
    initialState: {
        roomList: []
    },
    reducers: {
        renderingUserList(state, initialList){
            state.roomList = initialList
        },
    }
})

export const {renderingUserList} = roomListStore.actions;