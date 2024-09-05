import React from "react"
import TodoCard from "./TodoCard"

export default function TodoList(props) {
  const {todos} = props
  return (
    <ul>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} todo={todo} index={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}
