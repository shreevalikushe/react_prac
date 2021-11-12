import { useState } from "react"
import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"

function Todo() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "DEFAULT",
            status: false
        }
    ])
    const handleTaskCreate = (title) => {
        const payload = {
            title: title,
            status: false,
            id: todos.length + 1
        };
        console.log(payload)
        setTodos([...todos, payload]);
    }
    return (
        <>
            <h3>Todo List</h3>
            <TodoInput onTaskCreate={handleTaskCreate} />
            {todos.map((item) => {
                return (
                    <TodoItem key={item.id} title={item.title} status = {item.status} />
                )
            })}
        </>
    );
}

export default Todo