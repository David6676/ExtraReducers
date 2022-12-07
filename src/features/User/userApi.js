import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchUsersData = createAsyncThunk('users/fetchUsersData',
    async () => {
        const response = await axios("https://jsonplaceholder.typicode.com/users")
        return response.data
    }
)