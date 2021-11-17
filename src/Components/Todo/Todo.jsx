import { useState } from "react"
import TodoInput from "./TodoInput"
import TodoList from "./TodoList";
import TodoItem from "./TodoList"

function Todo() {
    const [list, setList] = useState([]);
    const [showCompleted, setshowCompleted] = useState(false)

    const handleSubmit = ({ title, description }) => {
        const payload = {
            id: title.length + 1,
            title,
            description,
            status: list.length % 2 === 0 ? true : false
        };
        setList([...list, payload])
    }
    return(
        <div>
            <TodoInput onSubmit = {handleSubmit}/>
            <TodoList data={list.filter((item)=> !item.status)}/>
            <div>
                <button onClick={()=> setshowCompleted(!showCompleted)}>
                    Toggle to see completed
                </button>
            </div>
            {showCompleted && <TodoList data={list.filter((item)=> item.status)}/>}
        </div>
    )
}

export default Todo