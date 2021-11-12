import { useState } from "react"

function TodoInput({onTaskCreate}){
    const [text,setText] = useState("")
    const handleChange = (e)=>{
        setText(e.target.value)
    }
    const handleClick = ()=>{
        onTaskCreate(text)
    }
    return(
        <>
        <input type="text" placeholder="Add Todo Here" value={text} onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
        </>
    )
}

export default TodoInput