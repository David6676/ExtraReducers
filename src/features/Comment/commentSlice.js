import { createSlice } from "@reduxjs/toolkit"
import { fetchCommentData } from "./commentApi"


const commentState = { comments: [] }

const commentSlice = createSlice({
    initialState: commentState,
    name: "comment",
    extraReducers: (builder) => {
        builder.addCase(fetchCommentData.fulfilled, (state, action) => {
            state.comments = action.payload
            console.log(state.comments);
        })
    }
})

export default commentSlice.reducer