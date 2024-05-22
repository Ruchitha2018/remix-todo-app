import Modal from "../components/Modal";
import { getCategories } from "../data/category.server.js";
import TodoForm from "../components/TodoForm";
import { addTodo } from "../data/todo.server.js";
import { redirect } from "@remix-run/react";

const AddTodo = () => {
 return (
  <>
   <Modal title="Add Todo">
    <TodoForm />
   </Modal>
  </>
 )
}

export default AddTodo;

export function loader() {
    return getCategories();
}

export async function action({request}) {
    const formData = await request.formData();
    const todoData = Object.fromEntries(formData);
    console.log('TODO1', todoData)
    await addTodo(todoData)
    return redirect('/todo');
}
