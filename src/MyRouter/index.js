import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../component/Layout"
import Comment from "../features/Comment/Comment"
import Post from "../features/Post/Post"
import User from "../features/User/User"

function MyRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="user" element={<User />} />
                    <Route path="user/post/:id" element={<Post />} />
                    <Route path="user/post/comment/:id" element={<Comment />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default MyRouter