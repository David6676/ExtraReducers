import { createSlice } from "@reduxjs/toolkit";
import { fetchPostData } from "./postApi";

const postState = {post:[]}

const postSlice = createSlice({
    initialState: postState,
    name: "post",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPostData.fulfilled, (state, action) => {
            state.post = action.payload
        })
    }
})

export default postSlice.reducer