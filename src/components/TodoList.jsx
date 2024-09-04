import React from "react"
import TodoCard from "./TodoCard"

export default function TodoList() {
  const todos = ["Go to the gym", "Eat more fruits", "Pick up medicine"]
  return (
    <ul>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex} todo={todo}>
            <p>{todo}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}
