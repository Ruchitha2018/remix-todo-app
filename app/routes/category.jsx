import { Link, Outlet, useLoaderData } from "@remix-run/react"
import { getCategories } from "../data/category.server";
import CategoryList from "../components/CategoryList";

const ListCategory = () => {

    const categories = useLoaderData();

    return (
        <div className="container">
            <div className="main-heading">
                <h2>List Category</h2>
                <button><Link to="add">Add Category</Link></button>
            </div>
            <div>
                <CategoryList categories={categories} />
            </div>
            <Outlet />
        </div>
    )
}

export default ListCategory;

export function loader() {
    return getCategories();
}