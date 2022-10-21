import React from 'react'


function TodoItem(props) {
  const {todo , removeTodo, completeTodo}=props
  return (
    <div className={"todo.completed" ? "todo-row complete" : "todo-row"}>
        {props.todo.text}
        <button onClick={()=>removeTodo(todo.id)}>Remove</button>
        <button onClick={()=>completeTodo(todo.id)}>Update</button>
    </div>
  )
}

export default TodoItem