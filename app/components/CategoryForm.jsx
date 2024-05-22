import { Form, Link, useLoaderData } from "@remix-run/react"

const CategoryForm = () => {

    const categoryData = useLoaderData();
    console.log(categoryData)
    return (
        <Form className="form" method={categoryData ? 'patch' : 'post'
        }>
            <div className="form-col">
                <label htmlFor="name">Category Name</label>
                <input type="text" id="name" name="catName" defaultValue={categoryData?.catName || ''}required maxLength={30} className="form-control"/>
            </div>
            <div className="form-col">
                <label htmlFor="colorCode">Category Color Code</label>
                <input type="text" id="title" name="catCode" required defaultValue={categoryData?.catCode || ''} maxLength={30} className="form-control"/>
            </div>
            <div className="form-btns">
                <button>Save Category</button>
                <Link to="..">Cancel</Link>
            </div>
        </Form>
    )
}

export default CategoryForm