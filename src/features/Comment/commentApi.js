import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCommentData = createAsyncThunk("comment/fetchCommentData",
    async (id) => {
        const response = await axios(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response.data
    }
)