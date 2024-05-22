import CategoryForm from "../components/CategoryForm"
import Modal from "../components/Modal"
import { getCategory } from "../data/category.server"

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