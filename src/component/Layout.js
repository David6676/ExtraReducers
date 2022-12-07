import { Link, Outlet } from "react-router-dom"

function Layout() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/user">User</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}
export default Layout