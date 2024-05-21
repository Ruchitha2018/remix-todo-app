import { Link, Outlet } from "@remix-run/react"

const ListCategory = () => {
    return (
        <div className="container">
            <h2>List Category</h2>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Sr.No</td>
                            <td>Category Name</td>
                            <td>Category Color Code</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Project 1</td>
                            <td>red</td>
                            <td>
                                <Link>Edit</Link>
                                <Link>Delete</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Project 2</td>
                            <td>red</td>
                            <td>
                                <Link>Edit</Link>
                                <Link>Delete</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Project 3</td>
                            <td>red</td>
                            <td>
                                <Link>Edit</Link>
                                <Link>Delete</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Outlet />
        </div>
    )
}

export default ListCategory