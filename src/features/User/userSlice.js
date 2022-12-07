import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersData } from "./userApi";


const userState = {
    users: []
}

const userSlice = createSlice({
    initialState: userState,
    name: "user",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsersData.fulfilled, (state, action) => {
            state.users = action.payload
        })
    }
})

export default userSlice.reducer