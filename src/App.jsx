import { useEffect, useState } from "react"
import TodoCard from "./components/TodoCard"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([
    "Go to the gym",
    "Eat more fruits",
    "Pick up medicine",
  ])
  const [todoValue, setTodoValue] = useState('')

  const persistData = (newList) => {
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }
  const handleAddTodos = (newTodo) => {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }
  const handleDeleteTodos = (index) => {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  const handleEditTodo = (index) => {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodos(index)
  }
  useEffect(() => {
    if (!localStorage) {
      return
    }
      let localTodos = localStorage.getItem('todos')
      if (!localTodos) {
        return 
      }
      localTodos = JSON.parse(localTodos). todos
      setTodos(localTodos)
  }, [])
  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodos={handleDeleteTodos} todos={todos} />
      <TodoCard />
    </>
  )
}

export default App
