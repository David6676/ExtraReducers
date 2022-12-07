import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchCommentData } from "./commentApi"

function Comment() {

    const dispatch = useDispatch()

    let { id } = useParams()

    useEffect(() => {
        dispatch(fetchCommentData(id))
    }, [])

    const { comments } = useSelector(s => s.commentData)

    return (
        <table className="table table-primary table-hover">
            <thead>
                <tr>
                    <th>Post Id</th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {
                    comments.map((comment, index) => {
                        return (
                            <tr key={index}>
                                <td>{comment.postId}</td>
                                <td>{comment.id}</td>
                                <td>{comment.name}</td>
                                <td>{comment.email}</td>
                                <td>{comment.body}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
export default Comment