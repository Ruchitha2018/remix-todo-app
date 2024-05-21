import { Link } from "@remix-run/react"

const CategoryForm = () => {
    return (
        <form className="form">
            <div className="form-col">
                <label htmlFor="name">Category Name</label>
                <input type="text" id="name" name="cat_name" required maxLength={30} className="form-control"/>
            </div>
            <div className="form-col">
                <label htmlFor="colorCode">Category Color Code</label>
                <input type="text" id="title" name="cat_color_code" required maxLength={30} className="form-control"/>
            </div>
            <div className="form-btns">
                <button>Save Category</button>
                <Link to="..">Cancel</Link>
            </div>
        </form>
    )
}

export default CategoryForm