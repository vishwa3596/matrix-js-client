const redux = require('@reduxjs/toolkit');
/**
 * the store will contain the side user List along with all the necessary fields.
 *
 * */

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