import { useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts/TodoContext";
import { TodoForm, TodoItem } from "./components";

function App() {

  const[todos, setTodos] = useState([])

  const addTodo = (todo) => {
      setTodos((prev) => [{id:Date.now(), ...todo}, ...prev])
  }
  
  const updateTodo = (id, todo) => {
      setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo:prevTodo) ))
  }
  
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => (prevTodo.id !== id)))
  }
  
  const toggleComplete = (id) => {
      setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed:!prevTodo.completed} : prevTodo)))
  }

  return (
    <TodoProvider 
    value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen pb-8">
        <div className="relative w-full h-72">
          <img
            src="https://img.freepik.com/premium-photo/illuminated-corporate-bridge-representing-partnership-shared-business-goals-futuristic-urban-landscape_38013-13734.jpg"
            alt="background-image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-purple-700 opacity-50"></div>
        </div>
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4"><TodoForm/></div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
                <div key={todo.id}
                className="w-full"
                >
                  <TodoItem todo={todo}/>
                </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
