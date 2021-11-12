function TodoItem({id,status,title}){
    return(
        <div className="inner">
            <span>{`${title} - ${status}`}</span>
        </div>
    )
}

export default TodoItem