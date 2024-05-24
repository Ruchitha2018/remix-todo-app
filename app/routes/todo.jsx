import { Link, Outlet, json, useLoaderData } from "@remix-run/react"
import { getCategories } from "../data/category.server.js";
import TodoCard from "../components/TodoCard";
import { getTodosTodoStatus,getTodosInProgressStatus, getTodosCompletedStatus } from "../data/todo.server.js";

const ListTodo = () => {

    const { todosTodoStatus, todosInProgressStatus, todosCompletedStatus } = useLoaderData();
    console.log(todosTodoStatus, todosInProgressStatus)
    return (
        <div className="container">
            <div className="main-heading">
                <h2>Todos</h2>
                <button><Link to="add">Add Todo</Link></button>
            </div>
            <div className="todo-grid">
                <TodoCard title="ToDo" data={todosTodoStatus}/>
                <TodoCard title="In-Progress" data={todosInProgressStatus} />
                <TodoCard title="Completed" data={todosCompletedStatus} />
            </div>
            <Outlet />
        </div >
    )
}

export default ListTodo;

export async function loader() {
    const categories = await getCategories();
    const todosTodoStatus = await getTodosTodoStatus();
    const todosInProgressStatus = await getTodosInProgressStatus()
    const todosCompletedStatus = await getTodosCompletedStatus();

    return { categories, todosTodoStatus, todosInProgressStatus, todosCompletedStatus}

}