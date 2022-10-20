import React, { useState } from 'react'


function TodoForm(props) {
    const[input,setInput]=useState("");

    const handleSubmit =(e)=> {
      e.preventDefault()
      props.addTodo(input)
      setInput("")
    }
  return (
    <div>
       <form onSubmit={handleSubmit} className="Todo-form">
        <input  
           className='todo-app'
           value={input}
            onChange={(e)=> setInput(e.target.value)} 
            placeholder='Add a todo'
         />
        <button  type='submit' className='todo-button'>Add Todo</button>
       </form>
      
    </div>
  )
}

export default TodoForm