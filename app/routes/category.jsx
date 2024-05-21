import { Link, Outlet } from "@remix-run/react"

const ListCategory = () => {
    return (
        <div className="container">
            <h2>List Category</h2>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Category Name</th>
                            <th>Category Color Code</th>
                            <th>Actions</th>
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