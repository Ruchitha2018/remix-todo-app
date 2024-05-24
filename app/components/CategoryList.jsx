import { Link, useFetcher } from "@remix-run/react";
import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

const CategoryList = ({ categories }) => {

   const fetcher = useFetcher();
   function handleDeleteCategory(id) {
      const proceed = confirm('Are you sure? Do you want to delete this item?');
      if (!proceed) {
         return;
      }
      fetcher.submit(null, { method: 'delete', action: `/category/${id}` });
   }

   return (
      <div className="table-responsive">
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
                     <td >{index + 1}</td>
                     <td>{data.catName}</td>
                     <td>{data.catCode}</td>
                     <td className="td-icons">
                        <Link to={'/category/' + data.id}><FaEdit /></Link>
                        <Link onClick={() => handleDeleteCategory(data.id)}><FaTrashCan /></Link>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>

   )
}

export default CategoryList