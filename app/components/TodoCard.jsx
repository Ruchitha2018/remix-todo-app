import TodoItem from "./TodoItem";

const TodoCard = ({ title, data }) => {
    return (
        <div className="todo-card">
            <h4 className="todo-title">{title}</h4>
            <div className="todo-content">
                <TodoItem data={data}/>
            </div>
        </div>
    )
}

export default TodoCard;