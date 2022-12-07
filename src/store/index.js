import { configureStore } from '@reduxjs/toolkit'
import commentSlice from '../features/Comment/commentSlice'
import postSlice from '../features/Post/postSlice'
import userSlice from '../features/User/userSlice'

export const store = configureStore({
  reducer: {
    userData:userSlice,
    postData:postSlice,
    commentData:commentSlice
  },
})