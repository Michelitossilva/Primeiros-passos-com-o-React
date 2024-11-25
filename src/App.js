import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [darkMode, setDarkMode] = useState(false);

  const addTodo = (task, category) => {
    setTodos([
      ...todos,
      { id: Date.now(), task, category, completed: false },
    ]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos =
    filter === "All"
      ? todos
      : todos.filter((todo) => todo.category === filter);

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <h1>To-Do List</h1>
      <button
        className="dark-mode-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Modo Claro" : "Modo Escuro"}
      </button>
      <AddTodo addTodo={addTodo} />
      <div className="filters">
        <button onClick={() => setFilter("All")}>Todos</button>
        <button onClick={() => setFilter("Work")}>Trabalho</button>
        <button onClick={() => setFilter("Personal")}>Pessoal</button>
        <button onClick={() => setFilter("Study")}>Estudo</button>
      </div>
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
