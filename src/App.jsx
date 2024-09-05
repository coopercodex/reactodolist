import { useState } from "react"
import TodoCard from "./components/TodoCard"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([
    "Go to the gym",
    "Eat more fruits",
    "Pick up medicine",
  ])

  const handleAddTodos = (newTodo) => {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }
  const handleDeleteTodos = (index) => {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodoList)
  }

  const handleEditTodo = () => {}
  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList handleDeleteTodos={handleDeleteTodos} todos={todos} />
      <TodoCard />
    </>
  )
}

export default App
