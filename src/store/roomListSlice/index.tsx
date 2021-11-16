import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


const roomListSlice = createSlice({
    name: "roomList",
    initialState: [],
    reducers: {}
})

export const selectRoomList = (state: RootState) => state.roomList

export default roomListSlice;