import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const memberSlice = createSlice({
    name: "member",
    initialState: [],
    reducers: {
       
    }
})

export const selectMember = (state: RootState) => state.member

export default memberSlice;
