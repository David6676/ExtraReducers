import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

console.log();
export const fetchPostData = createAsyncThunk("post/fetchPostData",
    async (id) => {
        const response = await axios(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        return response.data
    }
);