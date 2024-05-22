import { useLoaderData } from "@remix-run/react";

const TodoItem = ({ data }) => {

    const { categories } = useLoaderData();

    return (
        <>
            {
                data?.map((todo, index) => {
                    const category = categories.find((cat) => cat.id === todo.catId);
                    return (
                        <div className="todo-item" key={todo.id}>
                            <p style={{backgroundColor:category.catCode}} className="catgory-code">{category.catName}</p>
                            <h4>{todo.name}</h4>
                            <div className="todo-item-flex">
                                <p>Deadline</p>
                                <p>Edit | Delete</p>
                            </div>
                        </div>

                    )
                })
            }
        </>

    )
}

export default TodoItem;