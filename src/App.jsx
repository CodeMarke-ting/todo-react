import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Input from "./Input";
import Todos from "./Todos";
import "./App.css";

function App() {
  const initial = {
    todo: "",
    id: "",
  };

  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState(handleInitialTodos);

  function handleInitialTodos() {
    const lsTodos = localStorage.getItem("todos");

    return lsTodos ? JSON.parse(lsTodos) : [];
  }

  function handleInput(e) {
    setTodo({ todo: e.target.value, id: uuidv4() });
  }

  function handleAddTodo(e) {
    e.preventDefault();

    if (!todo.todo || !todo.todo.trim().length) return;
    setTodos((prevTodos) => {
      let arr = [...prevTodos, todo];
      localStorage.setItem("todos", JSON.stringify(arr));
      return arr;
    });
    setTodo(initial);
  }

  function handleDelete(id) {
    const lsTodos = JSON.parse(localStorage.getItem("todos"));
    const filtered = lsTodos.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(filtered));
    setTodos(filtered);
  }
  return (
    <>
      <Input
        todo={todo}
        handleInput={handleInput}
        handleAddTodo={handleAddTodo}
      />
      <Todos todos={todos} handleDelete={handleDelete} />
    </>
  );
}

export default App;
