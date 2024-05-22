import { redirect } from "@remix-run/react"
import CategoryForm from "../components/CategoryForm"
import Modal from "../components/Modal"
import { deleteCategory, getCategory, updateCategory } from "../data/category.server"

const EditCategory = () => {
    return (
        <>
            <Modal title="Edit Category">
                <CategoryForm />
            </Modal>

        </>
    )
}

export default EditCategory

export async function loader({params}) {
   const category = await getCategory(+params.id);
   return category;
}

export async function action({params, request}) {
    console.log('Hello', request)


    if(request.method === 'PATCH') {
        const formData = await request.formData()
        const categoryData = Object.fromEntries(formData);
        try {
            await updateCategory(+params.id, categoryData);
            return redirect('/category')
        } catch (error) {
            console.log(error)
        }
    } else if(request.method === 'DELETE') {
        await deleteCategory(+params.id);
        return { deletedId: +params.id}
    }

}

