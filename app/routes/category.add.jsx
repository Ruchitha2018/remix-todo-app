import { redirect } from "@remix-run/react";
import CategoryForm from "../components/CategoryForm";
import Modal from "../components/Modal";
import { addCategory } from "../data/category.server";

const AddCategory = () => {
 return (
  <>
   <Modal title="Add Category">
    <CategoryForm />
   </Modal>
  </>
 )
}

export default AddCategory;

export async function action({request}) {
 const formData = await request.formData();

 const categoryData = Object.fromEntries(formData);
console.log(formData)
 await addCategory(categoryData)
 return redirect('/category')
}