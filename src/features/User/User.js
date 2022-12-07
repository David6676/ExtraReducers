import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsersData } from "./userApi"
import { Link } from "react-router-dom"

function User() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsersData())
    }, [])

    const { users } = useSelector(s => s.userData)

    return (
        <table className="table table-success table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td><Link to={"/user/post/" + user.id}>{user.name}</Link></td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default User