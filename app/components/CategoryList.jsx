import { Link } from "@remix-run/react"

const CategoryList = ({categories}) => {
    return (
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
                        {categories.map((data, index) => (
                            <tr key={data.id}>
                                <td >{data.id}</td>
                                <td>{data.catName}</td>
                                <td>{data.catCode}</td>
                                <td>
                                <Link to={'/category/'+ data.id}>Edit</Link>
                                <Link>Delete</Link>
                            </td>
                            </tr>
                        ))}
                       
                    </tbody>
                </table>
    )
}

export default CategoryList