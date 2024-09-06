import React from "react"

export default function TodoCard(props) {
  const {children, handleDeleteTodos, index, handleEditTodo} = props
  return <div>
    <li className='todoItem'>
        {children}
        <div className="acitonsContainer">
          <button onClick={() => {
            handleEditTodo(index)
          }}>
        <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button onClick={() => {
            handleDeleteTodos(index)
          }}>
        <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
       </li>
  </div>
}
