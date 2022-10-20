// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
const[todos,setTodos]=useState([])

const addTodo = (text) =>
{
  let id=1;
  if(todos.length > 0)
  {
    id=todos[0].id+1;
  }
  let todo={id : id , text : text, completed:false}
  let newTodos=[todo, ...todos]
  console.log(newTodos)
  setTodos(newTodos)
}

  return (
    <div className='todo-app'>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo}/>
      
      {todos.map((todo) =>
      {
        return(
          <TodoItem key={todo.id} todo={todo}/>
        )
      }
      )}
    </div>
  )
}

export default App