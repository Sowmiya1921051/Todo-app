import React from 'react'
import {RiCloseCircleLine} from './react-icons/ri'

function TodoItem(props) {
  return (
    <div>
        {props.todo.text}
        <RiCloseCircleLine />
    </div>
  )
}

export default TodoItem