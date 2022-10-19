import React, { useState } from 'react'


function TodoForm(props) {
    const[input,setInput]=useState("");

    const handleSubmit =(e)=> {
      e.preventDefault();
      props.addTodo(input)
      setInput("")
    }
  return (
    <div>
       <form onClick={handleSubmit}>
        <input  onClick={(e)=> setInput(e.target.value)} 
         className='todo-app'
         placeholder='Add a todo'
         />
        <button  type='submit' className='todo-button'>Add Todo</button>
       </form>
      
    </div>
  )
}

export default TodoForm