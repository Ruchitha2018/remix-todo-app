import { Link, Outlet, useLoaderData } from "@remix-run/react"
import { getCategories } from "../data/category.server";
import CategoryList from "../components/CategoryList";

const ListCategory = () => {

    const categories = useLoaderData();

    return (
        <div className="container">
            <h2>List Category</h2>
            <div>
                <CategoryList categories={categories}/>
            </div>
            <Outlet />
        </div>
    )
}

export default ListCategory;

export function loader() {
    return getCategories();
}