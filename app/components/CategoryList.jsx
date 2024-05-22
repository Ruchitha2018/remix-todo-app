import { Link, useFetcher } from "@remix-run/react"

const CategoryList = ({categories}) => {

    const fetcher = useFetcher();
    function handleDeleteCategory(id) {
      const proceed = confirm('Are you sure? Do you want to delete this item?');
      if (!proceed) {
        return;
      }
      fetcher.submit(null, { method: 'delete', action: `/category/${id}` });
    }
  
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
                                <Link onClick={() => handleDeleteCategory(data.id)}>Delete</Link>
                            </td>
                            </tr>
                        ))}
                       
                    </tbody>
                </table>
    )
}

export default CategoryList