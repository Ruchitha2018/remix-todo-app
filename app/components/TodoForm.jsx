import { Form, Link, useLoaderData } from "@remix-run/react"

const TodoForm = () => {

    const categories = useLoaderData();
    console.log(categories)

    return (
        <Form className="form" method='post'>
            <div className="form-col">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" defaultValue={''} required maxLength={30} className="form-control" />
            </div>
            <div className="form-col">
                <label htmlFor="deadline">Deadline</label>
                <input type="date" id="deadline" name="deadline" required  className="form-control" />
            </div>
            <div className="form-col">
                <label>Category</label>
                <select name="catId" id="catId">
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.catName}
                    </option>
                ))}
            </select>
            </div>
           <div className="form-col">
            <label>Status</label>
            <select name="status" id="status">
               <option value="todo">Todo</option>
               <option value="in-progress">In Progress</option>
               <option value="completed">Completed</option>
            </select>
           </div>
          
            <div className="form-btns">
                <button>Save Todo</button>
                <Link to="..">Cancel</Link>
            </div>
        </Form>
    )
}

export default TodoForm