import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react"
import { fetchPostData } from "./postApi"
import { useParams, Link } from "react-router-dom"

function Post() {
    const dispatch = useDispatch()

    let { id } = useParams()

    useEffect(() => {
        dispatch(fetchPostData(id))
    }, [])

    const { post } = useSelector(s => s.postData)

    return (
        <table className="table table-dark table-hover">
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {
                    post.map((pst, index) => {
                        return (
                            <tr key={index}>
                                <td>{pst.userId}</td>
                                <td>{pst.id}</td>
                                <td><Link to={"/user/post/comment/" + pst.id}>{pst.title}</Link></td>
                                <td>{pst.body}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
export default Post